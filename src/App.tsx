import { useState } from "react";

import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "movies", amount: 10_000, category: "Entertainment" },
    { id: 2, description: "internet", amount: 280_000, category: "Utilities" },
    { id: 3, description: "meat", amount: 93_000, category: "Groceries" },
    { id: 4, description: "water bill", amount: 624_000, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const FilteredList = selectedCategory
    ? expenses.filter((item) => item.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="mb-5">
        <ExpenseForm
          onSubmitHandler={(newExpense) =>
            setExpenses([
              ...expenses,
              { ...newExpense, id: expenses.length + 1 }, // we don't get id in 
            ])
          }
        />
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
