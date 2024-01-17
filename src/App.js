import Pages from "./pages/Pages";

function App() {
  const key = process.env.REACT_APP_API_KEY;
  console.log(key)
  return (
    <div className="App">
      <h1>Hello</h1>
      <Pages />      
    </div>
  );
}

export default App;
