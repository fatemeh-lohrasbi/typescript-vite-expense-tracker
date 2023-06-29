interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <>
      <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="" selected>
          All Categories
        </option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </>
  );
}
