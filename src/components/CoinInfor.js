import { convertToUSD } from "../utils/currency";
import Button from "./Button"
import CoinTitle from "./CoinTitle"

function CoinInfor({ coin }) {
  const { uuid, name, price, change, iconUrl, symbol, marketCap } = coin;

  return (
    <tr row="body" className="text-white font-bold text-lg  avg:px-1  py-6 px-4 items-center gap-2 hover:colorCustom2 transition-all duration-500 cursor-pointer border-b-[2px] border-b-neutral-800 hoverRow">
      <td className="p-2 py-6">⭐</td>
      <td className="p-2 py-6">1</td>
      <td className="p-2 py-6"><CoinTitle urlCoin={iconUrl} symbols={symbol} name={name} href={uuid} /></td>
      <td className="p-2 py-6">{convertToUSD(price, 4)}</td>
      <td className={`font-thin p-2 py-6 ${parseFloat(change) < 0 ? 'text-red-600' : "text-green-400"}`}>{parseFloat(change) > 0 ? "+" : ""}{change}%</td>
      <td className="p-2 py-6">{convertToUSD(marketCap)}</td>
      <td className="p-2 py-6">
        <Button fontSize="text-[1rem]" custom="px-1 py-1 transition-all duration-500 hover:bg-blue-700" >Trade</Button>
      </td>
    </tr>
  )
}

export default CoinInfor
