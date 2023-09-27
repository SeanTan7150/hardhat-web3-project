import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import {
  ThirdwebProvider,
  metamaskWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";

const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ThirdwebProvider
    clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
    activeChain={activeChain}
    supportedWallets={[
      smartWallet({
        factoryAddress: "0x7848F53c78B8360DE8639920c76BA7d1019dA227",
        gasless: true,
        personalWallets: [metamaskWallet()],
      }),
    ]}
  >
    <App />
  </ThirdwebProvider>
);
