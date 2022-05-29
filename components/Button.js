function Button(props) {
  const text = props.text;
  const clickAction = props.clickAction;
  return (
    <button
      className="rounded p-1 bg-bits-yellow hover:bg-bits-dark-yellow text-center text-bits-red m-2"
      onClick={clickAction}
    >
      {text}
    </button>
  );
}

export default Button;
