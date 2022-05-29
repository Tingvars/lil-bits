function Container({ children }) {
  return (
    <div className="bg-bits-green border-4 rounded border-bits-red w-96 min-h-60 ml-2 my-1 flex flex-col items-center p-2">
      {children}
    </div>
  );
}

export default Container;
