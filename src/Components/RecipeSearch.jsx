import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hearts } from "react-loader-spinner";
import { fetchData } from "../Store/RecipieData";
import { NotTrue } from "../Store/ShowUnshowSlice";

export function RecipeSearch() {
  let dispatch = useDispatch();
  let { spin } = useSelector((state) => state.ShowUnshow);
  let [searchTerm, setSearchTerm] = useState("");
  let handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };
  let handle = () => {
    if (searchTerm.trim() !== "") {
      dispatch(fetchData(searchTerm));
      dispatch(NotTrue(false));
    }
  };
  let { stateIs } = useSelector((state) => state.ShowUnshow);
  let handleSubmit = (event) => {
    if (searchTerm.trim() !== "") {
      event.preventDefault();
      dispatch(fetchData(searchTerm));
      dispatch(NotTrue(false));
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
          <br />
          <>
            {" "}
            {spin ? (
              <div id="Spin">
                <Hearts
                  height="80"
                  width="80"
                  color="#bd3122"
                  ariaLabel="hearts-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              ""
            )}
          </>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
