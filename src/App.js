import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import { useEffect, useState } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./Main";
function App() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const yourWEB3CollectionAddresss = "";

  useEffect(() => {
    const getMyNfts = async () => {
      const response = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=" +
          yourWEB3CollectionAddresss
      );
      setData(response.data.assets);
    };
    getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {data.length > 0 && (
        <>
          <Main activePunk={data[selectedIndex]} />
          <PunkList listData={data} setSelectedIndex={setSelectedIndex} />
        </>
      )}
    </div>
  );
}

export default App;
