import { useEffect, useState } from "react"
import Container from "../components/Container"
import CoinsRank from "../feature/Markets/CoinsRank"
import TopCoins from "../feature/Markets/TopCoins"
import instance from "../config/axios";


function Markets() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    async function fetchCoins() {
      const req = await instance.get("coins", {
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '8',
          offset: '0'
        },
      })
      const response = await req.data.data.coins;
      setCoins(response)
    }
    fetchCoins();
  }, [])
  const topCoins = coins.slice(0, 4);
  return (
    <section className="w-full  transition-all duration-500 bg-neutral-900 py-6 pb-16 mobile:pb-6 mobile:pt-4">
      <Container lazyLoading={true}>
        <TopCoins coins={topCoins}/>
        <CoinsRank coins={coins} />
      </Container>
    </section>
  )
}

export default Markets
