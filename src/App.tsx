import { useCallback, useRef } from "react";
import { OpenSeaSDK, Network } from "opensea-js";
import logo from "./logo.svg";
import "./App.css";
import { OrderSide, SaleKind } from "opensea-js/lib/types";

declare global {
  interface Window {
    ethereum: any;
  }
}

const TOKEN_ADDRESS = "0x88b48f654c30e99bc2e4a1559b4dcf1ad93fa656";
const TOKEN_ID =
  "14558678004309816148200063980092920925111433425354812527733476948433170333697";

function App() {
  const openseaSdkRef = useRef(
    new OpenSeaSDK(window.ethereum, {
      networkName: Network.Rinkeby,
    })
  );

  const handleClick = useCallback(async () => {
    const [account] = await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [],
    });

    const { orders } = await openseaSdkRef.current.api.getOrdersLegacyWyvern({
      asset_contract_address: TOKEN_ADDRESS,
      token_id: TOKEN_ID,
      side: OrderSide.Sell,
      sale_kind: SaleKind.FixedPrice,
    });

    const hash = await openseaSdkRef.current.fulfillOrderLegacyWyvern({
      order: orders[0],
      accountAddress: account,
    });
    console.log(hash);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Buy it</button>
      </header>
    </div>
  );
}

export default App;
