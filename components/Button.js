function Button(props) {
  const text = props.text;
  const clickAction = props.clickAction;
  return (
    <button className="bg-amber-300" onClick={clickAction}>
      {text}
    </button>
  );
}

export default Button;
