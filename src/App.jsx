import "./App.css";
import { Select } from "./select/select";
import { Option } from "./select/option";

function App() {
  return (
    <div className="App">
      <h3>Compound Component Example</h3>
      <Select defaultText="Select an option" selectedSymbol="✓">
        <Option value="A">Option A</Option>
        <Option value="B">Option B</Option>
        <Option value="C">Option C</Option>
      </Select>
    </div>
  );
}

export default App;
