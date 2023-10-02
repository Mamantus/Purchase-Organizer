import Header from "./components/AppTitle";
import AddCategory from "./components/AddCategory";

function App() {

  return (
    <>
      <Header/>
      <h4 className="instructionText">Click on the empty box to add a new category</h4>
      <AddCategory  />
    </>
  );
}

export default App;
