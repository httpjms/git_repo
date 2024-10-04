function Button({ children, clickBtn, disabled, className }) {
  return (
    <button className={className} disabled={disabled} onClick={clickBtn}>
      {children}
    </button>
  );
}

export default Button;
