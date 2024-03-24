const Button = (props) => {
    const {name , onClick} = props
    return (
        <button onClick={onClick} className="text-stone-950 bg-amber-500 w-full text-sm rounded-lg py-2">{name}</button>
    )
}

export default Button;

