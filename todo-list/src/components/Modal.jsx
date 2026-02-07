function Modal({setIsOpen, currentIndex, newTask, editTask, setNewTask}){
    const styles = {
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        modal: {
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          minWidth: "300px"
        }
      };
    return(
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2 style={{textAlign:"center"}}>Edit Task</h2>
                <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                <button style={{color:"red"}} onClick={() => setIsOpen(false)}>
                    Close
                </button>
                <button onClick={() => editTask(currentIndex, newTask)}>Edit</button>
            </div>
        </div>
    );
}
export default Modal