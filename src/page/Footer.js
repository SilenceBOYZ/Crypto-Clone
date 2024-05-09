import Container from "../components/Container"
import FooterNav from "../components/FooterNav"
import { IoLogoLinkedin, IoLogoInstagram, IoLogoFacebook, IoLogoGithub } from "react-icons/io";
import Logo from "../ui/Logo"

function Footer() {
  return (
    <>
      <footer className="bg-neutral-900 text-white box-border py-12">
        <Container diplay={"tablet:px-12"} >
          <div className="grid grid-cols-[2fr_repeat(4,_minmax(_0,_1fr))] gap-5 smtablet:grid-cols-2" >
            <div className="space-y-3">
              <Logo image={"crypto.png"}/>
              <p className="text-2xl font-bold ">Let's talk 👍</p>
              <p className="textColorPrimary text-[1rem]">+12 345 678 9101</p>
              <a href="#" className="inline-block textColorPrimary text-[1rem]">Nguyenthanhtri23079@gmail.com</a>
              <p className="textColorPrimary text-[1rem]">Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</p>
            </div>
            <FooterNav />
          </div>
        </Container>
      </footer>
      <div className="colorCustomMain box-border py-4 text-white">
        <Container diplay={"flex justify-between items-center"}>
          <h4 className="textColorPrimary">© Recreated Cryptex Layout by <a href="https://www.facebook.com/profile.php?id=100006555301110" className="cursor-pointer hover:text-blue-700 transition-all duration-500">NguyenThanhTri</a></h4>
          <div className="flex items-center textColorPrimary gap-4 text-2xl">
            <IoLogoLinkedin />
            <IoLogoInstagram />
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100006555301110">
              <IoLogoFacebook />
            </a>
            <IoLogoGithub />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
