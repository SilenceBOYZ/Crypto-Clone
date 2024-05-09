function Logo({ image }) {
  return (
    <a href="#" className="flex mr-8 items-center gap-2">
      <img src={image} alt="" className="w-[2rem] h-[2rem]" />
      <span className="font-medium text-3xl">Cryptex</span>
    </a>
  )
}

export default Logo
