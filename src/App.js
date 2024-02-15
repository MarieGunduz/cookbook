import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from 'react-router-dom';
import Cuisine from "./pages/Cuisine";
import Search from "./components/Search";

function App() {
  const key = process.env.REACT_APP_API_KEY;
  console.log(key)
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
        <Cuisine />
      </BrowserRouter>
    </div>
  );
}

export default App;
