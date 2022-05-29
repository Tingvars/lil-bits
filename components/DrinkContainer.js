function DrinkContainer({ children }) {
  return (
    <div className="text-bits-red bg-bits-yellow hover:bg-bits-dark-yellow border-4 rounded border-bits-red h-44 w-44 ml-2 my-2 flex flex-col items-center p-2">
      {children}
    </div>
  );
}

export default DrinkContainer;
