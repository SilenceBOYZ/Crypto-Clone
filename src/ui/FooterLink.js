function FooterLink({ children, linkHref = "" }) {
  return (
    <li><a href={`${linkHref}`} className="text-[1rem] font-normal textColor2">{children}</a></li>
  )
}

export default FooterLink
