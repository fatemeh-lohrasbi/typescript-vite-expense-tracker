import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from './components/EepenseForm'

import "./App.css";
 
export const categories = ['Groceries', 'Utilities', 'Entertainment'];

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Entertainment" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Groceries" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const FilteredList = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;
  return (
    <>
    <div className="mb-5">
      <ExpenseForm />
    </div> 
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(item) => setSelectedCategory(item)} />
      </div>
      <ExpenseList
        expenses={FilteredList}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </>
  );
}

export default App;
