import Container from "../components/Container"
import Content from "../components/Content"
import Paragaph from "../ui/Paragaph"
import Title from "../ui/Title"

function Aside() {
  return (
    <aside className="colorCustomMain  pt-16 lg:pt-4 text-white " >
      <Content imageSrc="app-banner.png" imagePosition="right" imageCustom="lg:translate-y-[20%] xl:translate-y-[0]">
        <Title
          title={"Free Your Money & Invest With Confident"}
          paragraph={"With Cryptor Trade, you can be sure your trading skills are matched"}
        />
        <Paragaph
          heading={"Buy, Sell, And Trade On The Go"}
          paragaph={"Manage Your Holdings From Your Mobile Decive"}
        />
        <Paragaph
          heading={"Take Control Of Your Wealth"}
          paragaph={"Rest Assured You (And Only You) Have Access To Your Funds"}
        />
        <div className="flex items-center gap-5">
          <a href="#home">
            <img src="https://codewithsadee.github.io/cryptex/assets/images/googleplay.png" alt="" />
          </a>
          <a href="#home">
            <img src="https://codewithsadee.github.io/cryptex/assets/images/appstore.png" alt="" />
          </a>
        </div>
      </Content>
    </aside>
  )
}

export default Aside
