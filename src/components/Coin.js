import { convertToUSD } from "../utils/currency";
import CoinTitle from "./CoinTitle";

function Coin({ coin, active = false }) {
  const { uuid, name, price, iconUrl, change, symbol } = coin;
  return (
    <li className={`text-white font-medium box-border p-5 space-y-4 rounded-xl w-full hover:colorCustom1 transition-all duration-500 ${active ? "colorCustom1" : ""}`}>
      <CoinTitle symbols={symbol} name={name} urlCoin={iconUrl} href={uuid}/>
      <h2 className="text-2xl font-bold">USD {convertToUSD(price, 2)}</h2>
      <p className="flex items-center gap-2 text-xs"><span className="">{convertToUSD(price, 2)}</span> <span className={`inline-block font-bold px-2 py-1 ${parseFloat(change) > 0 ? 'bg-green-400' : "bg-red-600"} border-none rounded-xl`}>{parseFloat(change) > 0 ? "+" : ""}{change}%</span></p>
    </li>
  )
}

export default Coin
