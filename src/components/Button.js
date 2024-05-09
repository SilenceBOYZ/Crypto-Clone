function Button({ fontSize = "text-sm", custom = "", children }) {
  return (
    <button className={`${custom} border-[1.5px] rounded-3xl ${fontSize} `}>
     {children}
    </button>
  )
}

export default Button
