import { HiCheckCircle } from "react-icons/hi2"

function Paragaph({ heading, paragaph }) {
  return (
    <div className="space-y-2">
      <h3 className="flex items-center gap-2 text-3xl font-bold">  <HiCheckCircle className="text-blue-700 text-3xl" />{heading}</h3>
      <p className="textColorPrimary text-lg">{paragaph}</p>
    </div>
  )
}

export default Paragaph
