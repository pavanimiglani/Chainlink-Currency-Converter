import { useEffect, useState } from "react";
import "./App.css";
import { ethers } from "ethers";
import contract from '../src/artifacts/contracts/conversioncontract.sol/DataConsumerV3.json'
 
const abi = contract.abi
// Change the contract address after each deployment
//const oracleData = require("");

const oracleContractAddress = '0x3b14A39EE6A8C56a0BF9690ACDf3d58ff519303F';
//const oracleContractAbi =
 
function App() {
  const [message, setMessage] = useState("");
  const [selectedAsset, setSelectedAsset] = useState('BTC-USD');
 
  const handleRadioChange = (event) => { 
    setSelectedAsset(event.target.value);
  };
 
  const fetchPriceHandler = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        console.log(oracleContractAddress, abi, signer);
        const oracleContract = new ethers.Contract(oracleContractAddress, abi, signer);
        console.log(oracleContract);
 
        const [answer, decimals] = await oracleContract.getChainlinkDataFeedInfo(selectedAsset);
       
        console.log('Chainlink Data Feed Latest Answer:', answer, decimals);
 
        setMessage(`💰 ${selectedAsset}: ${ethers.utils.formatUnits(answer?._hex, decimals)}`);
      }
      else {
        setMessage("❌ Ethereum object does not exist");
      }
    } catch (err) {
      console.log(err);
      setMessage(`❌ERROR: ${err}`);
    }
  };
 
  const priceFetchButton = () => {
    return (
      <div>
        <button onClick={fetchPriceHandler} className="cta-button fetch-price-button">
          Get Price for {selectedAsset}
        </button>
      </div>
    );
  };
 
  return (
    <div className="card">
      <div className="header">
        <h3 className="text-color">ChainLink Price Feed Assignment</h3>
      </div>
      <div className="radio-sec">
      <h1>Select Asset:</h1>
        <div>
          <label>
            <input
              type="radio"
              name="asset"
              value="BTC-USD"
              checked={selectedAsset === 'BTC-USD'}
              onChange={handleRadioChange}
            />
            BTC-USD
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="asset"
              value="ETH-USD"
              checked={selectedAsset === 'ETH-USD'}
              onChange={handleRadioChange}
            />
            ETH-USD
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="asset"
              value="LINK-USD"
              checked={selectedAsset === 'LINK-USD'}
              onChange={handleRadioChange}
            />
            LINK-USD
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="asset"
              value="BTC-ETH"
              checked={selectedAsset === 'BTC-ETH'}
              onChange={handleRadioChange}
            />
            BTC-ETH
          </label>
        </div>
 
        <div>
          <p>Selected Asset: {selectedAsset}</p>
        </div>
      </div>
      <hr />
      <div className="container">
        {priceFetchButton()}
      </div>
      <div>
        <hr />
        <h4>{message}</h4>
      </div>
    </div>
  );
}
 
export default App; 