import CoinInfor from "../../components/CoinInfor"
import CoinTableHeader from "../../components/CoinTableHeader"
import ListMenuItem from "../../components/ListMenuItem"

function CoinsRank({ coins }) {
  return (
    <div id="coinRank" className="text-white space-y-8">
      <div className="w-full flex justify-between items-center font-bold">
        <h2 className="text-5xl ">Market Update</h2>
        <a href="#ad" className="  pb-.5 border-b-[2px] border-b-transparent hover:border-b-blue-700 hover:text-blue-700 transition-all duration-500 active:hover:text-blue-800 active:border-b-blue-800">See All Coins</a>
      </div>
      <ul className="flex gap-12 text-white text-[1rem] items-center font-medium tablet:flex-wrap tablet:gap-4" style={{ borderColor: "hsl(225, 15%, 16%)", }}>
        <ListMenuItem active={true}>View All</ListMenuItem>
        <ListMenuItem>Metaverse</ListMenuItem>
        <ListMenuItem>Entertainment</ListMenuItem>
        <ListMenuItem>Engergy</ListMenuItem>
        <ListMenuItem>NFT</ListMenuItem>
        <ListMenuItem>Gaming</ListMenuItem>
      </ul>
      <div className="tablet:overflow-x-scroll tablet:pb-12">
        <table className="w-full tablet:w-[150%] ">
          <CoinTableHeader />
          <tbody>
            {!coins?.length ? <tr><td>Loading data</td></tr> :
              coins.map((coin, index) => <CoinInfor key={coin.uuid} coin={coin } index={index + 1}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinsRank
