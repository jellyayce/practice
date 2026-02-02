function List(){
    const fruits = [{id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];

    fruits.sort();

    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li>);

    return(<ul>{listItems}</ul>);
}
export default List