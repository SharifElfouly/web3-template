import { WagmiConfig } from "wagmi";
import "./App.css";
import Home from "./components/Home";
import { NavBar } from "./components/layout/Navbar";
import { client, chains } from "./utils/wagmi-config";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useBalance } from "wagmi";

function App() {
  return (
    <ChakraProvider>
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <NavBar />
          <Home />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
