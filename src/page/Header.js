import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Link from "../components/Link";
import Logo from "../ui/Logo";
import MobileToggle from "../ui/MobileToggle";

function Header() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function headerDisplay() {
      if (window.scrollY >= 350) {
        ref.current.classList.add("activeHeader");
      } else { 
        ref.current.classList.remove("activeHeader");
      }
    }
    document.addEventListener("scroll", headerDisplay)
  }, [])

  function handleSetToggle() {
    setToggle(toggle => !toggle)
  }

  return (
    <header className="w-full bg-neutral-900 text-white text-lg font-sans font-[600] z-40 tablet:top-[-76px]" ref={ref}>
      <Container diplay={"flex items-center justify-between lg:px-16"}>
        <nav className="flex gap-5 items-center tablet:py-5">
          <Logo image={"crypto.png"} />
          <ul className="flex h-full tablet:hidden">
            <Link active={true}>Home page</Link>
            <Link>Buy Crypto</Link>
            <Link>Markets</Link>
            <Link>Sell Crypto</Link>
            <Link>Blog</Link>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <MobileToggle toggle={toggle} handleSetToggle={() => handleSetToggle()} />
          <Button fontSize={"text-sm font-bold"} custom="px-3 py-1">Wallet</Button>
        </div>
      </Container>
      <div className={`absolute bg-black left-0 w-full z-30 overflow-hidden transition-all duration-300  ${toggle ? "h-[100dvh]" : "h-0"}`}>
        <ul className="h-full">
          <Link linkType="mobile" active="true">Home page</Link>
          <Link linkType="mobile">Buy Crypto</Link>
          <Link linkType="mobile">Markets</Link>
          <Link linkType="mobile">Sell Crypto</Link>
          <Link linkType="mobile">Blog</Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
