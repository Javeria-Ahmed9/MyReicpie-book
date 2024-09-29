import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../Store/RecipieData";

export function RecipeSearch() {
  let dispatch = useDispatch();

  let [searchTerm, setSearchTerm] = useState("");
  let handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };
  let handle = () => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchData(searchTerm));
    }
  };
  let { stateIs } = useSelector((state) => state.ShowUnshow);
  let handleSubmit = (event) => {
    if (searchTerm.trim() !== "") {
      event.preventDefault();
      dispatch(fetchData(searchTerm));
    }
  };
  return (
    <>
      {stateIs ? (
        <div id="searchDiv" className="container text-center ">
          <h3>Recipe book</h3>
          <form onSubmit={handleSubmit}>
            <input onChange={handleSearchTerm} placeholder="Search recipe..." />
          </form>
          <button onClick={handle}>search</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
