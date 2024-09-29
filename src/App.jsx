import { Provider } from "react-redux";
import store from "./Store/store";
import { RecipeSearch } from "./Components/RecipeSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductShow } from "./Components/ProductShow";
function App() {
  return (
    <>
      <Provider store={store}>
        <RecipeSearch />
        <ProductShow />
      </Provider>
    </>
  );
}

export default App;
