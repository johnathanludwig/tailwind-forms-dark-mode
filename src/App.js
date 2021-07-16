import "./compiled.css";

function Checkbox(props) {
  return (
    <input
      {...props}
      className="bg-gray-300 text-blue-400 dark:bg-gray-600 dark:text-blue-300"
      type="checkbox"
    />
  );
}

function App() {
  return (
    <div className="p-8">
      <div className="p-4 bg-gray-100 space-x-4">
        <Checkbox />
        <Checkbox checked />
      </div>
      <div className="dark">
        <div className="p-4 dark:bg-gray-900 dark:text-white space-x-4">
          <Checkbox />
          <Checkbox checked />
        </div>
      </div>
    </div>
  );
}

export default App;
