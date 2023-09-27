import React from "react";
import { Sepolia } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import App from "./App";

import {
  ChainId,
  ThirdwebProvider,
  metamaskWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import { StateContextProvider } from "./context";
import "./styles/globals.css";

// const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThirdwebProvider
    desiredChainId={ChainId.Sepolia}
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
    activeChain={Sepolia}
  >
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </ThirdwebProvider>
);
