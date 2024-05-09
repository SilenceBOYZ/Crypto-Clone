import FooterLink from "../ui/FooterLink"
import FooterList from "../ui/FooterList"

function FooterNav() {
  return (
    <>
      <FooterList title={"PRODUCTS"}>
        <FooterLink>Spot</FooterLink>
        <FooterLink>Inverse Perpetual</FooterLink>
        <FooterLink>USDT Perpetual</FooterLink>
        <FooterLink>Exchange</FooterLink>
        <FooterLink>Launchpad</FooterLink>
        <FooterLink>Binance Pay</FooterLink>
      </FooterList>
      <FooterList title={"SERVICES"}>
        <FooterLink>Buy Crypto</FooterLink>
        <FooterLink>Markets</FooterLink>
        <FooterLink>Tranding Fee</FooterLink>
        <FooterLink>Affiliate Program</FooterLink>
        <FooterLink>Referral Program</FooterLink>
        <FooterLink>API</FooterLink>
      </FooterList>
      <FooterList title={"SUPPORT"}>
        <FooterLink>Bybit Learn</FooterLink>
        <FooterLink>Help Center</FooterLink>
        <FooterLink>User Feedback</FooterLink>
        <FooterLink>Submit a request</FooterLink>
        <FooterLink>API Documentation</FooterLink>
        <FooterLink>Trading Rules</FooterLink>
      </FooterList>
      <FooterList title={"ABOUT US"}>
        <FooterLink>About Bybit</FooterLink>
        <FooterLink>Authenticity Check</FooterLink>
        <FooterLink>Careers</FooterLink>
        <FooterLink>Business Contacts</FooterLink>
        <FooterLink>Blog</FooterLink>
      </FooterList>
    </>
  )
}

export default FooterNav
