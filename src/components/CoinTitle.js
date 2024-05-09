function CoinTitle({ urlCoin, name, symbols, href }) {
  return (
    <div className="flex gap-2 items-center">
      <img className="w-6" alt="coins" src={urlCoin} />
      <a href={href} className="hover:text-blue-700 transition-all duration-300">
        {name} <span className="text-neutral-400">{symbols}</span>
      </a>
    </div>
  )
}

export default CoinTitle
