import { Disclosure } from "@headlessui/react";
import { useTheme } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QAComponentProps {
  question: string;
  answer: string;
  open?: boolean;
}

const QAComponent = ({ question, answer, open }: QAComponentProps) => {
  const theme = useTheme();
  return (
    <div
      style={{
        borderTop: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
      }}
      className="py-10"
    >
      <Disclosure defaultOpen={open}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between">
              <p className="text-2xl">{question}</p>
              <div
                style={{
                  border: theme.palette.mode === "dark" ? "1px solid #fff" : "1px solid #000",
                }}
                className="text-lg p-2.5 rounded-full"
              >
                {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-lg w-full md:w-1/2 py-5 text-gray-500">{answer}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="my-20 container mx-auto w-full">
      <p className="font-base text-4xl pb-5">FAQ</p>
      <div className="">
        <QAComponent
          question="What is GoerliDAO?"
          answer="GoerliDAO is a protocol on the Goerli blockchain that aims to establish GDAO as an ecosystem token. 
                GDAO is used as a governance token for the GoerliDAO Treasury, which allocates funds to invest tokens, 
                finance new projects within the ecosystem, and allocate GETH to developers building on Goerli."
          open={true}
        />

        <QAComponent
          question="What is the purpose of GDAO?"
          answer="GDAO is a governance token that enables you to participate in the decision-making process of the GoerliDAO Treasury. 
                As a GDAO staker, you will obtain voting rights to allocate funds, participate in governance decisions, 
                and contribute to the growth and development of the Goerli ecosystem."
          open={false}
        />

        <QAComponent
          question="Why do I have to bridge?"
          answer="Bonding is the process of contributing Goerli ETH, METH, GDAO or LP tokens into GoerliDAO’s protocol owned liquidity (POL) 
                in exchange for discounted and locked GDAO tokens. You are rewarded with discounted GDAO with a small lockup period 
                for your contribution to the stability of the Goerli ecosystem."
          open={false}
        />

        <QAComponent
          question="What is METH? What is GETH?"
          answer="Mainnet Ethereum is called ETH on mainnet and METH on Goerli. 
                Goerli Ethereum is called GETH on mainnet and Goerli ETH on Goerli. 
                We know this can get confusing, but you’ll get used to it!"
          open={false}
        />

        <QAComponent
          question="What is the GoerliDAO Treasury?"
          answer="The GoerliDAO Treasury is protocol-owned and allocates funds to invest tokens, 
                finance new projects within the ecosystem, and distribute GETH to developers building on Goerli."
          open={false}
        />

        <QAComponent
          question="How can I get involved in GoerliDAO?"
          answer="To get involved in GoerliDAO, you can start by bonding for or purchasing GDAO tokens, participating in staking, 
                and contributing to the growth and development of the Goerli ecosystem. You can also join the GoerliDAO community on Twitter and Telegram, 
                attend events, and share your ideas and feedback with the community."
          open={false}
        />
      </div>
    </div>
  );
}
