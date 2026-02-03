import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm';
import DisplayExpense from './components/DisplayExpense';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const [count, setCount] = useState(0)
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    amount: "",
    date: "", 
  });

  function handleExpense(){
    if(!formData.category || !formData.title || !formData.amount || !formData.date)return;

    setExpenses([...expenses, {...formData, amount:parseFloat(formData.amount)}]);
    setFormData({ category: "", title: "", amount: "", date: "" });
  }

  return (
    <>
      <ExpenseForm formData={formData} setFormData={setFormData} handleExpense={handleExpense}></ExpenseForm>
      <DisplayExpense expenses={expenses}/>
      <h3 style={{textAlign:"center"}}>Expense Chart by Category</h3>
      <ExpenseChart expenses={expenses}/>
    </>
  )
}

export default App
