function InputList({task, setTask, addTask}){
    return(
        <div>
            <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Input Task Bro"
            />
            <button onClick={addTask}>Add</button>
        </div>
    );
}

export default InputList