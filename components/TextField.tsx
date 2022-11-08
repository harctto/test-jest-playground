import React, { FocusEvent } from "react"

interface ITextFiled {
  className?: string
  value: string
  setValue?: (value: string) => void
  type: "text" | "password" | "number" | "hidden"
  placeholder?: string
  disabled?: boolean
}

const TextField = ({
  value,
  setValue,
  type,
  placeholder = "",
  className,
  disabled,
}: ITextFiled) => {
  // const regex_price = /^[0-9]+(\.[0-9]{1,4})?$/g
  const onValueChanged = (_value: string) => {
    // if (regex_price.test(_value)) {
    if (_value.slice(0, 1) === "0" && _value.length > 1 && _value.length < 3) {
      if (setValue) setValue(_value.slice(1))
    } else {
      if (setValue) setValue(_value)
    }
    // }
    if (_value.length <= 0) {
      if (setValue) setValue("")
    }
  }
  const handleFocusEvent = (e: React.FocusEvent<HTMLInputElement>) => {
    // Do something
  }
  return (
    <input
      className={`${
        className ? className : ""
      } p-4 rounded-xl w-[100%] h-14 placeholder:text-slate-500`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onValueChanged(e.target.value)}
      // onBlur={handleFocusEvent}
      // Disable mousewheel scroll
      disabled={disabled ? disabled : false}
      onWheel={(e) => {
        e.preventDefault()
      }}
    />
  )
}
export default TextField
