import Container from "../components/Container"
import Step from "../components/Step"

function Instruction() {
  return (
    <section className="colorCustomMain text-white box-border py-14 ">
      <Container diplay="space-y-6 tablet:px-3" lazyLoading={true}>
        <h2 className="text-5xl text-center font-bold">How it work</h2>
        <h3 className="text-center text-lg textColorPrimary font-normal w-[40%] mobile:w-full mx-auto">Stacks is a production-ready library of stackable content blocks built in React Native.</h3>
        <div className="flex gap-8 tablet:grid tablet:grid-cols-2 mobile:grid-cols-1">
          <Step
            image="instruction-1.png"
            stepnum={1}
            title="Download"
            desc="Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native."
          />
          <Step
            image="instruction-2.png"
            stepnum={2}
            title="Connect Wallet"
            custom="tablet:after:hidden"
            desc="Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native."
          />
          <Step
            image="instruction-3.png"
            stepnum={3}
            title="Start Trading"
            desc="Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native."
            custom={""}
          />
          <Step
            image="instruction-4.png"
            stepnum={4}
            title="Earn Money"
            lastChild={true}
            desc="Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native."
          />
        </div>
      </Container>
    </section>
  )
}

export default Instruction
