import categories from "./category";

interface Props {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <>
      <select className="form-select" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">
          All Categories
        </option>
        {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
    </>
  );
}
