import Button from "../components/Button"
import Container from "../components/Container"

function Hero() {
  return (
    <section className="w-full transition-all duration-500 " style={{ backgroundColor: "hsl(228, 9%, 10%)" }}>
      <Container lazyLoading={true} >
        <div className="flex xl:flex-row text-white py-[8rem] avg:py-[6rem] gap-8 sm:gap-12 transition-all duration-500 sm:flex-col mobile:flex-col mobile:gap-16 mobile:pt-6 mobile:pb-12">
          <div className="space-y-6 xl:w-[55%] sm:w-full mobile:w-ful">
            <h1 className="text-[4rem] font-bold leading-[1.2] avg:text-[3rem]">Buy & Sell Diggital Assets In The Cryptex</h1>
            <p className="text-xl font-medium text-neutral-400">Coin Cryptex is the easiest, safest and fastest way to buy & sell crypto asset exchange</p>
            <Button fontSize={"text-md font-bold"} custom="px-6 py-3 bg-blue-700 border-none">Get Started Now</Button>
          </div>
          <div className="xl:w-[45%] sm:w-full sm:flex sm:justify-center mobile:w-full">
            <img alt="banner" src="hero-banner.png" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
