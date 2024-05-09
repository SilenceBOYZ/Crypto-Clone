
import { HiMenu, HiOutlineX } from "react-icons/hi";

function MobileToggle({ toggle, handleSetToggle }) {
  return (
    <div className="lg:hidden tablet:visible" onClick={() => handleSetToggle()}>
      {toggle ? <HiOutlineX className="text-4xl cursor-pointer" /> : <HiMenu className="text-4xl cursor-pointer" />}
    </div>
  )
}

export default MobileToggle
