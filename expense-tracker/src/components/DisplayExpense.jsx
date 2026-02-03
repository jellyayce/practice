function DisplayExpense({expenses}){
    return (
        <>
            <table className="table" style={{border:"1px solid"}}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f2f2f2", width:"150px"}}>Category</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f2f2f2", width:"150px" }}>Title</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f2f2f2", width:"150px" }}>Amount</th>
                        <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f2f2f2", width:"150px" }}>Date</th>
                    </tr>
                </thead>
                <tbody style={{textAlign:"center"}}>
                    {expenses.map((expense, rowIndex) => (
                        <tr key={rowIndex}>
                            <td style={{border:"1px solid #ccc"}}>{expense.category}</td>
                            <td style={{border:"1px solid #ccc"}}>{expense.title}</td>
                            <td style={{border:"1px solid #ccc"}}>{expense.amount}</td>
                            <td style={{border:"1px solid #ccc"}}>{expense.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default DisplayExpense