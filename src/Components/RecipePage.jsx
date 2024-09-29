import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { UnShow } from "../Store/ShowUnshowSlice";

export default function RecipePage() {
  let dispatch = useDispatch();
  let { Clicked } = useSelector((state) => state.ShowUnshow);
  let ingredients = Clicked[0].ingredients;
  let ArrayOfingredients = ingredients.split("|");

  let instruction = Clicked[0].instructions;
  let arrayofInst = instruction.split(".");
  arrayofInst.pop();
  let handleClose = () => {
    dispatch(UnShow(true));
  };
  return (
    <div id="ShowRecipe" className="container">
      {" "}
      <div id="row" className="row ">
        <div className="col-10">
          <h2>{Clicked[0].title}</h2>
        </div>
        <div className="col-2">
          {" "}
          <RxCross1 id="iconShape" onClick={handleClose} />
        </div>
      </div>
      <h5 className="container">Ingredients</h5>
      <div id="list">
        {ArrayOfingredients.map((val, ind) => (
          <ul key={ind}>
            <li>{val}</li>
          </ul>
        ))}
      </div>
      <h5 className="container">Instructions</h5>
      <div id="list1">
        {arrayofInst.map((val, ind) => (
          <ul key={ind}>
            <li>{val}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
