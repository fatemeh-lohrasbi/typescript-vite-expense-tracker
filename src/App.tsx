import ExpenseList from './components/ExpenseList';
import './App.css';
import { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([
    {id:1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id:2, description: 'bbb', amount: 10, category: 'Utilities'},
    {id:3, description: 'ccc', amount: 10, category: 'Utilities'},
    {id:4, description: 'ddd', amount: 10, category: 'Utilities'},
  ]) 

  // const onDeleteHandler = (id) => {}

  return (
    <>
     <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))} />
    </>
  )
}

export default App
