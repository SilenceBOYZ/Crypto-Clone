function CoinTableHeader() {
  return (
    <thead row="header" className="text-white font-bold text-lg avg:px-1 gap-2 px-4 pb-4 border-b-2 border-white">
      <tr>
        <th className="p-2 text-left whitespace-nowrap" scope="cols"></th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols">#</th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols">Name</th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols">Last Price</th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols">24h %</th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols">Market Cap</th>
        <th className="p-2 text-left whitespace-nowrap" scope="cols"></th>
      </tr>
    </thead>
  )
}

export default CoinTableHeader
