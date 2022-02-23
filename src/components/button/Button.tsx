import React from 'react'
import "./Button.scss"

export type ButtonType = {
  disabled?: boolean
  type?: "danger" | "success" | "warning" | "primary"
  callback?: () => void
  loading?: boolean
  min?: boolean
  large?: boolean
  block?: boolean
  outlined?: boolean
  text?: boolean
}


export const Button: React.FC<ButtonType> = ({ children, ...props}) => {

  const {disabled, type, callback, loading, min, large, block, outlined, text} = props
  const childrenElem = React.Children.toArray(children)

  const spinner = <svg className="btn__spinner" viewBox="0 0 50 50"><circle className="path" cx="25" cy="25" r="15" fill="none" strokeWidth="4"></circle></svg>
  const minStyle = min && "btn_min"
  const largeStyle = large && "btn_large"
  const blockStyle = block && "btn_block"
  const outlinedStyle = outlined && "btn_outlined"
  const textStyle = text && "btn_text"

  return (
    <div className="button">
      <button onClick={callback} className={`btn ${type ? type : "primary"} ${minStyle} ${largeStyle} ${blockStyle} ${outlinedStyle} ${textStyle}`} disabled={disabled}>
        {loading
            ? spinner
            : <div className="btn__content">{childrenElem[0]}</div> }
      </button>
    </div>
  )
}

