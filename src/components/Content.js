import Container from "./Container"


function Content({ imagePosition = "left", imageSrc = "", name = "", children, imageCustom="" }) {
  return (
    <Container diplay={"flex items-center gap-12 lg:gap-5 tablet:flex-col"} lazyLoading={true}>
      <figure className={`flex w-[700px] mobile:w-[500px] ${imagePosition === "left" ? "" : "order-1"} `}>
        <img className={`${imageCustom} `} src={`${imageSrc}`} alt={`${name}`} />
      </figure>
      <div className="w-[55%] tablet:w-full space-y-6 lg:w-[70%] lg:pb-4">
        {children}
      </div>
    </Container>
  )
}

export default Content
