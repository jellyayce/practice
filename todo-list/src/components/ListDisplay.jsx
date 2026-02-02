function ListDisplay({tasks, deleteTask}){
    return(
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => deleteTask(index)}>X</button>
                </li>
            ))}
        </ul>
    )
}
export default ListDisplay