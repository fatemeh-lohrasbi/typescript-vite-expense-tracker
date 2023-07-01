import { categories } from "../App";

export default function ExportForm() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Description" className="form-lable">
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="َAmount" className="form-lable">
          Amount
        </label>
        <input id="َAmount" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Category" className="form-lable">
          Category
        </label>
        <select id="Category" className="form-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
