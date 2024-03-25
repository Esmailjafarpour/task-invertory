const Button = (props) => {
  const { name, onClick, children } = props;
  return (
    <button
      onClick={onClick}
      className="flex justify-center text-stone-950 bg-amber-500 w-full text-sm rounded-lg py-2"
    >
      {children}
      {name}
    </button>
  );
};

export default Button;
