import Content from "../components/Content";
import Button from "../components/Button";
import Paragaph from "../ui/Paragaph";
import Title from "../ui/Title";

function About() {
  return (
    <section className="bg-neutral-900 text-white box-border py-16 ">
      <Content imageSrc="about-banner.png" name="about crypto">
        <Title
          title={"What Is Cryptex"}
          paragraph={"Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin."}
        />
        <Paragaph
          heading={"View real-time cryptocurrency prices"}
          paragaph={"Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin."}
        />
        <Paragaph
          heading={"Buy and sell BTC, ETH, XRP, OKB, Etc..."}
          paragaph={"Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin."}
        />
        <Button custom="px-7 py-2 bg-blue-500 border-none flex items-center" fontSize="text-lg font-bold">Explore More</Button>
      </Content>
    </section>
  )
}

export default About
