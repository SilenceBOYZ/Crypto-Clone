function Step({ image = "", stepnum = 0, title = "", desc = "", lastChild = false, custom = "" }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img src={`${image}`} alt="instruction icon" />
      <div className="text-center">
        <h3 className="uppercase font-bold textColorPrimary text-sm">Step {stepnum}</h3>
        <h4 className="text-xl font-bold">{title}</h4>
      </div>
      <p className={`text-center px-8 textColorPrimary font-normal ${(!desc.length || lastChild) ? "" : "text-desc"} relative ${custom} mobile:after:hidden mobile:px-[4rem]`}>{desc}</p>
    </div>
  )
}

export default Step
