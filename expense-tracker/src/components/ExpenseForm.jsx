
function ExpenseForm({ formData, setFormData, handleExpense }){
    
    function handleChange(e){
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    return(
        <>
            <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
            />
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount"
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <button onClick={handleExpense}>Add Expense</button>
        </>
    );
}
export default ExpenseForm