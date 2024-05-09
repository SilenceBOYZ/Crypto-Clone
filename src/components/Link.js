function Link({ children, active = false, linkType = "desktop" }) {
  let styles = {
    mobile: "px-6 py-4 inline-block w-full cursor-pointer border-b-[1px] border-b-neutral-50",
    desktop: "p-4 inline-block"
  }

  return (
    <li><a href="#" className={`${styles[linkType]} hover:bg-blue-700 transition-all duration-300 ${active ? "bg-blue-700" : ""}`}>{children}</a></li>
  )
}

export default Link
