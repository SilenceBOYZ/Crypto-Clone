function ListMenuItem({children, active = false}) {
  let activeStyle = "rounded-3xl px-4 py-1 bg-blue-700 flex items-center justify-center"
  return (
    <li className={`cursor-pointer ${active ? activeStyle : ""}`}>{children}</li>
  )
}

export default ListMenuItem
