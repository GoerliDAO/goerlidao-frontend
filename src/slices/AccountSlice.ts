import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { BigNumber, ethers } from "ethers";
import {
  // MIGRATOR_ADDRESSES,
  GDAO_ADDRESSES,
  STAKING_ADDRESSES,
  XGDAO_ADDRESSES,
  // V1_OHM_ADDRESSES,
  // V1_SOHM_ADDRESSES,
  // V1_STAKING_ADDRESSES,
  // V1_STAKING_HELPER_ADDRESSES,
  // WSOHM_ADDRESSES,
} from "src/constants/addresses";
import { handleContractError, setAll } from "src/helpers";
import { IBaseAddressAsyncThunk } from "src/slices/interfaces";
import { RootState } from "src/store";
// import { IERC20__factory, WsOHM__factory } from "src/typechain";
// import { GOHM__factory } from "src/typechain/factories/GOHM__factory";
import { IERC20__factory } from "src/typechain_goerli/factories";
import { XGDAO__factory } from "src/typechain_goerli/factories/xGDAOERC20.sol/XGDAO__factory";

interface IUserBalances {
  balances: {
    ohmV1: string;
    sohmV1: string;
    wsohm: string;
  };
}

export const getBalances = createAsyncThunk(
  "account/getBalances",
  async ({ address, networkID, provider }: IBaseAddressAsyncThunk): Promise<IUserBalances> => {
    let gdaoBalance = BigNumber.from("0");
    let sgdaoBalance = BigNumber.from("0");
    // let wsohmBalance = BigNumber.from("0");
    // try {
    //   const wsohmContract = WsOHM__factory.connect(
    //     WSOHM_ADDRESSES[networkID as keyof typeof WSOHM_ADDRESSES],
    //     provider,
    //   );
    //   wsohmBalance = await wsohmContract.balanceOf(address);
    // } catch (e) {
    //   handleContractError(e);
    // }
    try {
      const gdaoContract = IERC20__factory.connect(
        V1_OHM_ADDRESSES[networkID as keyof typeof V1_OHM_ADDRESSES],
        provider,
      );
      gdaoBalance = await gdaoContract.balanceOf(address);
    } catch (e) {
      handleContractError(e);
    }
    try {
      const sgdaoContract = IERC20__factory.connect(
        V1_SOHM_ADDRESSES[networkID as keyof typeof V1_SOHM_ADDRESSES],
        provider,
      );
      sgdaoBalance = await sgdaoContract.balanceOf(address);
    } catch (e) {
      handleContractError(e);
    }

    return {
      balances: {
        ohmV1: ethers.utils.formatUnits(gdaoBalance, "gwei"),
        sohmV1: ethers.utils.formatUnits(sgdaoBalance, "gwei"),
        // wsohm: ethers.utils.formatEther(wsohmBalance),
      },
    };
  },
);

interface IUserAccountDetails {
  staking: {
    ohmStakeV1: number;
    ohmUnstakeV1: number;
  };
  wrapping: {
    sohmWrap: number;
    wsohmUnwrap: number;
    gOhmUnwrap: number;
    wsOhmMigrate: number;
  };
}

export const getMigrationAllowances = createAsyncThunk(
  "account/getMigrationAllowances",
  async ({ networkID, provider, address }: IBaseAddressAsyncThunk) => {
    const ohmAllowance = BigNumber.from(0);
    const sOhmAllowance = BigNumber.from(0);
    const wsOhmAllowance = BigNumber.from(0);
    const gOhmAllowance = BigNumber.from(0);

    // if (V1_OHM_ADDRESSES[networkID as keyof typeof V1_OHM_ADDRESSES]) {
    //   try {
    //     const ohmContract = IERC20__factory.connect(
    //       V1_OHM_ADDRESSES[networkID as keyof typeof V1_OHM_ADDRESSES],
    //       provider,
    //     );
    //     ohmAllowance = await ohmContract.allowance(
    //       address,
    //       MIGRATOR_ADDRESSES[networkID as keyof typeof MIGRATOR_ADDRESSES],
    //     );
    //   } catch (e) {
    //     handleContractError(e);
    //   }
    // }

    // if (V1_SOHM_ADDRESSES[networkID as keyof typeof V1_SOHM_ADDRESSES]) {
    //   try {
    //     const sOhmContract = IERC20__factory.connect(
    //       V1_SOHM_ADDRESSES[networkID as keyof typeof V1_SOHM_ADDRESSES],
    //       provider,
    //     );
    //     sOhmAllowance = await sOhmContract.allowance(
    //       address,
    //       MIGRATOR_ADDRESSES[networkID as keyof typeof MIGRATOR_ADDRESSES],
    //     );
    //   } catch (e) {
    //     handleContractError(e);
    //   }
    // }

    // if (WSOHM_ADDRESSES[networkID as keyof typeof WSOHM_ADDRESSES]) {
    //   try {
    //     const wsOhmContract = IERC20__factory.connect(
    //       WSOHM_ADDRESSES[networkID as keyof typeof WSOHM_ADDRESSES],
    //       provider,
    //     );
    //     wsOhmAllowance = await wsOhmContract.allowance(
    //       address,
    //       MIGRATOR_ADDRESSES[networkID as keyof typeof MIGRATOR_ADDRESSES],
    //     );
    //   } catch (e) {
    //     handleContractError(e);
    //   }
    // }

    // if (XGDAO_ADDRESSES[networkID as keyof typeof XGDAO_ADDRESSES]) {
    //   try {
    //     const gOhmContract = IERC20__factory.connect(
    //       XGDAO_ADDRESSES[networkID as keyof typeof XGDAO_ADDRESSES],
    //       provider,
    //     );
    //     gOhmAllowance = await gOhmContract.allowance(
    //       address,
    //       MIGRATOR_ADDRESSES[networkID as keyof typeof MIGRATOR_ADDRESSES],
    //     );
    //   } catch (e) {
    //     handleContractError(e);
    //   }
    // }

    return {
      migration: {
        ohm: +ohmAllowance,
        sohm: +sOhmAllowance,
        wsohm: +wsOhmAllowance,
        gohm: +gOhmAllowance,
      },
      isMigrationComplete: false,
    };
  },
);

export const loadAccountDetails = createAsyncThunk(
  "account/loadAccountDetails",
  async ({ networkID, provider, address }: IBaseAddressAsyncThunk, { dispatch }) => {
    const stakeAllowance = BigNumber.from("0");
    const unstakeAllowance = BigNumber.from("0");
    // let wrapAllowance = BigNumber.from("0");
    let gOhmUnwrapAllowance = BigNumber.from("0");
    // let wsOhmMigrateAllowance = BigNumber.from("0");

    try {
      const xGdaoContract = XGDAO__factory.connect(
        XGDAO_ADDRESSES[networkID as keyof typeof XGDAO_ADDRESSES],
        provider,
      );
      gOhmUnwrapAllowance = await xGdaoContract.allowance(
        address,
        STAKING_ADDRESSES[networkID as keyof typeof STAKING_ADDRESSES],
      );

      // const wsOhmContract = IERC20__factory.connect(
      //   WSOHM_ADDRESSES[networkID as keyof typeof WSOHM_ADDRESSES],
      //   provider,
      // );
      // wsOhmMigrateAllowance = await wsOhmContract.balanceOf(address);

      const gdaoContract = IERC20__factory.connect(GDAO_ADDRESSES[networkID as keyof typeof GDAO_ADDRESSES], provider);

      // stakeAllowance = await ohmContract.allowance(
      //   address,
      //   V1_STAKING_HELPER_ADDRESSES[networkID as keyof typeof V1_STAKING_HELPER_ADDRESSES],
      // );

      //   const sgdaoContract = IERC20__factory.connect(
      //     V1_SOHM_ADDRESSES[networkID as keyof typeof V1_SOHM_ADDRESSES],
      //     provider,
      //   );

      // unstakeAllowance = await sgdaoContract.allowance(
      //   address,
      //   V1_STAKING_ADDRESSES[networkID as keyof typeof V1_STAKING_ADDRESSES],
      // );
      //   wrapAllowance = await sgdaoContract.allowance(
      //     address,
      //     STAKING_ADDRESSES[networkID as keyof typeof STAKING_ADDRESSES],
      //   );
    } catch (e) {
      handleContractError(e);
    }
    await dispatch(getBalances({ address, networkID, provider }));

    return {
      staking: {
        ohmStakeV1: +stakeAllowance,
        ohmUnstakeV1: +unstakeAllowance,
      },
      //   wrapping: {
      //     sohmWrap: Number(ethers.utils.formatUnits(wrapAllowance, "gwei")),
      //     gOhmUnwrap: Number(ethers.utils.formatUnits(gOhmUnwrapAllowance, "ether")),
      //     wsOhmMigrate: Number(ethers.utils.formatUnits(wsOhmMigrateAllowance, "ether")),
      //   },
    };
  },
);

export interface IAccountSlice extends IUserAccountDetails, IUserBalances {
  balances: {
    ohmV1: string;
    sohmV1: string;
    dai: string;
    wsohm: string;
  };
  loading: boolean;
  staking: {
    ohmStakeV1: number;
    ohmUnstakeV1: number;
  };
  migration: {
    ohm: number;
    sohm: number;
    wsohm: number;
    gohm: number;
  };
  isMigrationComplete: boolean;
}

const initialState: IAccountSlice = {
  loading: false,
  balances: {
    ohmV1: "",
    sohmV1: "",
    dai: "",
    wsohm: "",
  },
  staking: { ohmStakeV1: 0, ohmUnstakeV1: 0 },
  wrapping: { sohmWrap: 0, wsohmUnwrap: 0, gOhmUnwrap: 0, wsOhmMigrate: 0 },
  migration: { ohm: 0, sohm: 0, wsohm: 0, gohm: 0 },
  isMigrationComplete: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    fetchAccountSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadAccountDetails.pending, state => {
        state.loading = true;
      })
      .addCase(loadAccountDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(loadAccountDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(getBalances.pending, state => {
        state.loading = true;
      })
      .addCase(getBalances.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getBalances.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(getMigrationAllowances.fulfilled, (state, action) => {
        setAll(state, action.payload);
      })
      .addCase(getMigrationAllowances.rejected, (state, { error }) => {
        console.log(error);
      });
  },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state: RootState) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
