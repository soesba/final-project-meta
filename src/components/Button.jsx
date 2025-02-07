function Button ({ text, color, callback }) {
  return (
    <button className={color}>{text}</button>
  )
}

export default Button;