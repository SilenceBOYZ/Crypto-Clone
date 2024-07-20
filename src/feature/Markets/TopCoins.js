import Coin from "../../components/Coin"
import ListMenuItem from "../../components/ListMenuItem"
import Spinner from "../../ui/Spinner"

function TopCoins({ coins }) {
  return (
    <div className="top-coin rounded-3xl border-[1px] border-neutral-600 translate-y-[-20%]" style={{
      borderColor: "hsl(225, 15%, 16%)",
      backgroundColor: "hsl(228, 9%, 10%)"
    }}>
      <div className="p-4">
        <ul className="flex gap-4 text-white text-[1rem] items-center font-medium pb-4 border-b-[1px] avg:flex-wrap tablet:flex-wrap" style={{ borderColor: "hsl(225, 15%, 16%)", }}>
          <ListMenuItem active={true}>Crypto</ListMenuItem>
          <ListMenuItem>DeFi</ListMenuItem>
          <ListMenuItem>BSC</ListMenuItem>
          <ListMenuItem>NFT</ListMenuItem>
          <ListMenuItem>Metaverse</ListMenuItem>
          <ListMenuItem>Polkadot</ListMenuItem>
          <ListMenuItem>Solana</ListMenuItem>
          <ListMenuItem>Opensea</ListMenuItem>
          <ListMenuItem>Marketsplace</ListMenuItem>
        </ul>

        <ul className="flex justify-between items-center pt-4 gap-3 tablet:grid tablet:grid-cols-2 mobile:grid-cols-1 min-h-36">
          {!coins.length ? <Spinner /> : coins.map((coin, index) => {
            if(index === 1) {
              return <Coin key={coin.uuid} coin={coin} active={true}/>
            }
            return <Coin key={coin.uuid} coin={coin} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default TopCoins
