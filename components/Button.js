function Button(props) {
  const { text, onClick } = props;

  return (
    <button
      className="rounded p-1 bg-bits-yellow hover:bg-bits-dark-yellow text-center text-bits-red m-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
