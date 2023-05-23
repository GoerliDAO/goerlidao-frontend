import "src/style.scss";

import { ApolloProvider } from "@apollo/client";
import { useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import {
  darkTheme as rainbowDarkTheme,
  lightTheme as rainbowLightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import Messages from "src/components/Messages/Messages";
import { MigrationCallToAction } from "src/components/MigrationCallToAction";
import { MigrationNotification } from "src/components/MigrationNotification";
import NavDrawer from "src/components/Sidebar/NavDrawer";
import Sidebar from "src/components/Sidebar/Sidebar";
import { StakeVersionContainer } from "src/components/StakeVersionContainer";
import TopBar from "src/components/TopBar/TopBar";
import Wallet from "src/components/TopBar/Wallet";
import { shouldTriggerSafetyCheck } from "src/helpers";
import { useGoogleAnalytics } from "src/hooks/useGoogleAnalytics";
import useTheme from "src/hooks/useTheme";
import { chains } from "src/hooks/wagmi";
import client from "src/lib/ApolloClientSetup";
import { getMigrationAllowances, loadAccountDetails } from "src/slices/AccountSlice";
import { loadAppDetails } from "src/slices/AppSlice";
import { AppDispatch } from "src/store";
import { dark as darkTheme } from "src/themes/dark.js";
import { girth as gTheme } from "src/themes/girth.js";
import { light as lightTheme } from "src/themes/light.js";
import LandingPage from "src/views/LandingPage";
import { useAccount, useConnect, useNetwork, useProvider } from "wagmi";

// Dynamic Imports for code splitting
const Bridge = lazy(() => import("./views/Bridge"));
const TreasuryDashboard = lazy(() => import("./views/TreasuryDashboard/TreasuryDashboard"));
const NotFound = lazy(() => import("./views/404/NotFound"));
const Swap = lazy(() => import("./views/Swap"));
const Donate = lazy(() => import("./views/Donate"));
const Bond = lazy(() => import("./views/Bond"));

const PREFIX = "App";

const classes = {
  drawer: `${PREFIX}-drawer`,
  content: `${PREFIX}-content`,
  contentShift: `${PREFIX}-contentShift`,
  toolbar: `${PREFIX}-toolbar`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  notification: `${PREFIX}-notification`,
};

// 😬 Sorry for all the console logging
const DEBUG = false;

// 🛰 providers
if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// 🔭 block explorer URL
// const blockExplorer = targetNetwork.blockExplorer;

const drawerWidth = 264;
const transitionDuration = 969;
function App() {
  useGoogleAnalytics();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();
  const [theme, toggleTheme] = useTheme();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { address = "", isConnected, isReconnecting } = useAccount();
  const { error: errorMessage } = useConnect();

  const provider = useProvider();
  const { chain = { id: 1 } } = useNetwork();

  const [migrationModalOpen, setMigrationModalOpen] = useState(false);
  const migModalClose = () => {
    setMigrationModalOpen(false);
  };

  const isSmallerScreen = useMediaQuery("(max-width: 1047px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  async function loadDetails(whichDetails: string) {
    // NOTE (unbanksy): If you encounter the following error:
    // Unhandled Rejection (Error): call revert exception (method="balanceOf(address)", errorArgs=null, errorName=null, errorSignature=null, reason=null, code=CALL_EXCEPTION, version=abi/5.4.0)
    // it's because the initial provider loaded always starts with networkID=1. This causes
    // address lookup on the wrong chain which then throws the error. To properly resolve this,
    // we shouldn't be initializing to networkID=1 in web3Context without first listening for the
    // network. To actually test rinkeby, change setnetworkID equal to 4 before testing.
    const loadProvider = provider;

    if (whichDetails === "app") {
      loadApp(loadProvider);
    }

    // don't run unless provider is a Wallet...
    if (whichDetails === "account" && address && isConnected) {
      loadAccount(loadProvider);
    }
  }

  const loadApp = useCallback(
    //@ts-ignore
    loadProvider => {
      dispatch(loadAppDetails({ networkID: chain.id, provider: loadProvider }));
    },
    [chain.id, address],
  );

  const loadAccount = useCallback(
    //@ts-ignore
    loadProvider => {
      dispatch(loadAccountDetails({ networkID: chain.id, provider, address }));
      dispatch(getMigrationAllowances({ address, provider, networkID: chain.id }));
    },
    [chain.id, address],
  );

  // The next 3 useEffects handle initializing API Loads AFTER wallet is checked
  //
  // this useEffect checks Wallet Connection & then sets State for reload...
  // ... we don't try to fire Api Calls on initial load because web3Context is not set yet
  // ... if we don't wait we'll ALWAYS fire API calls via JsonRpc because provider has not
  // ... been reloaded within App.
  useEffect(() => {
    if (shouldTriggerSafetyCheck()) {
      toast("Safety Check: Always verify you're on https://goerli.com");
    }
    loadDetails("app");
  }, []);
  useEffect(() => {
    if (isConnected && provider) {
      loadDetails("account");
    }
  }, [isConnected, chain.id, provider]);

  useEffect(() => {
    if (errorMessage) toast.error(errorMessage.message);
  }, [errorMessage]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  };

  const themeMode = theme === "light" ? lightTheme : theme === "dark" ? darkTheme : gTheme;

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#121415";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#C6D9F9";
      document.body.style.backgroundColor =
        "linear-gradient(to right, rgba(232, 232, 252, 1), rgba(232, 232, 252, 0.72))";
      document.body.style.color = "#000";
    }
  }, [theme]);

  return (
    <>
      <ApolloProvider client={client}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <RainbowKitProvider
          chains={chains}
          theme={
            theme === "dark"
              ? rainbowDarkTheme({ accentColor: "#676B74" })
              : rainbowLightTheme({ accentColor: "#E0E2E3", accentColorForeground: "#181A1D" })
          }
        >
          <ThemeProvider theme={themeMode}>
            <CssBaseline />
            <div className={`app ${isSmallerScreen && "tablet"} ${isSmallScreen && "mobile"} ${theme}`}>
              <Toaster>{t => <Messages toast={t} />}</Toaster>
              <TopBar theme={theme} toggleTheme={toggleTheme} handleDrawerToggle={handleDrawerToggle} />

              <nav className="hidden">
                {isSmallerScreen ? (
                  <NavDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
                ) : (
                  <Sidebar />
                )}
              </nav>

              <div className={`${classes.content} ${isSmallerScreen && classes.contentShift}`}>
                <MigrationCallToAction setMigrationModalOpen={setMigrationModalOpen} />
                <Suspense fallback={<div></div>}>
                  <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                      path="/stake"
                      element={<StakeVersionContainer setMigrationModalOpen={setMigrationModalOpen} />}
                    />
                    <Route path="/swap" element={<Swap />} />
                    <Route path="/bond" element={<Bond />} />
                    <Route path="/bridge" element={<Bridge />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/stats/*" element={<TreasuryDashboard />} />
                    <Route
                      path={"/info/*"}
                      element={<Wallet open={true} component="info" theme={theme} toggleTheme={toggleTheme} />}
                    />
                    <Route
                      path={"/utility"}
                      element={<Wallet open={true} component="utility" theme={theme} toggleTheme={toggleTheme} />}
                    />
                    <Route
                      path={"/wallet/history"}
                      element={
                        <Wallet open={true} component="wallet/history" theme={theme} toggleTheme={toggleTheme} />
                      }
                    />
                    <Route
                      path="/wallet"
                      element={<Wallet open={true} component="wallet" theme={theme} toggleTheme={toggleTheme} />}
                    ></Route>
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
            </div>

            <MigrationNotification isModalOpen={migrationModalOpen} onClose={migModalClose} />
          </ThemeProvider>
        </RainbowKitProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
