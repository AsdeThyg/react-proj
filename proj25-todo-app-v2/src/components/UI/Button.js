import styles from './Button.module.css'

function Button(props) {
  const { children, tooltip, disabled = false } = props

  return (
    <button
      {...props}
      className={styles.button}
      // onClick={onClick}
      title={tooltip}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
