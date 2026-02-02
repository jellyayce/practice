function Input({city, setCity, handleSearch}){
    return(
        <>
            <input 
                className="input"
                type="text" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter a City"
            />
            <button className="search-button" onClick={handleSearch}>Search</button>
        </>
    );
}
export default Input