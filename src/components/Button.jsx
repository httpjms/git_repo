function Button({ children, clickBtn, disabled }) {
  return (
    <button disabled={disabled} onClick={clickBtn}>
      {children}
    </button>
  );
}

export default Button;
