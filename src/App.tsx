import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const expenses = [
    {id:1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id:2, description: 'bbb', amount: 10, category: 'Utilities'},
    {id:3, description: 'ccc', amount: 10, category: 'Utilities'},
    {id:4, description: 'ddd', amount: 10, category: 'Utilities'},
  ]

  // const onDeleteHandler = (id) => {}

  return (
    <>
     <ExpenseList expenses={expenses} onDelete={(id) => console.log('Delete', id)} />
    </>
  )
}

export default App
