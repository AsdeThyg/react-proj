function ResetButton({ count, onClick }) {
  const btnStyle = { backgroundColor: 'lightgreen' }

  // !!count && (
  // Boolean(count) && (
  return (
    count > 0 && (
      <div>
        <button style={btnStyle} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  )
}

export default ResetButton
