function ListDisplay({tasks, deleteTask, edit}){
    return(
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    {task}
                    <button onClick={() => edit(index)}>Edit</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
export default ListDisplay