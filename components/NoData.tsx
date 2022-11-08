interface IProp {
  text?: string
  text_2?: string
  className?: string
}

const NoData = ({ text = "No data",text_2 = "Data", className }: IProp) => {
  return (
    <div className={`${className} min-h-[600px]`}>
      <p className="uppercase text-base" data-testid="text">
        {text}
      </p>
      <p className="uppercase text-base" >
        {text_2}
      </p>
    </div>
  )
}

export default NoData
