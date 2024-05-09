import FooterLink from "./FooterLink"

function FooterList({ children, title }) {
  return (
    <ul className="text-sm space-y-2">
      <li><p className="font-bold mb-3">{title}</p></li>
      {children}
    </ul>
  )
}

export default FooterList
