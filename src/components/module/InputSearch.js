
const SearchInput = ({onChange,value}) => {
    return(
        <input placeholder="Search by car"
            className="w-full rounded-md py-2 border-solid border-2 px-2"
            onChange={onChange}
            value={value}
        />
    )
}

export default SearchInput;