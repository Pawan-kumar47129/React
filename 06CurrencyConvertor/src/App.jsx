import { useState, useEffect, useId } from "react";
import InputBox  from "./Component/InputBox.jsx";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  let [amount, setAmount] = useState('');
  let [from, setFrom] = useState("USD");
  let [to, setTo] = useState("INR");
  let [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);// this method called when element are first render and every reRender. reRender element by react when any State change propchange contactChange then reRender element by React
  const option = Object.keys(currencyInfo);
  const swap = () => {
    let currTo=to;
    let currFrom=from;
    setFrom(currTo);
    setTo(currFrom);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div
      className="h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-orange-600"
      // style={
      //   // backgroundImage="url(backgroundImg.jpg)"
      // }
    >
        <div className="max-w-md border border-grey-60 rounded-lg p-5 bg-white/30">
          <form className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                  setAmount(amount);
                }}
                onAmountChange={(amount) => setAmount(amount)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 bg-black">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={()=>{
                  swap();
                  convert();
                }}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
    </div>
  );
}
export default App;
