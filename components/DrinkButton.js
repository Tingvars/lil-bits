function DrinkButton(props) {
  const { text, onClick } = props;

  return (
    <button
      className="rounded p-1 bg-bits-green hover:bg-bits-dark-green text-center text-sm text-bits-yellow hover:bg-bits-dark-green m-2"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default DrinkButton;
