import { useDispatch, useSelector } from "react-redux";
import { TbFaceIdError } from "react-icons/tb";
import { Blocks } from "react-loader-spinner";
import RecipePage from "./RecipePage";
import { Selectedrecipe, Showdat } from "../Store/ShowUnshowSlice";
import { STATUS } from "../Store/RecipieData";

export function ProductShow() {
  let { dataArray, status } = useSelector((state) => state.RecipeData);
  let { stateIs } = useSelector((state) => state.ShowUnshow);

  let dispatch = useDispatch();
  let setPage = (value) => {
    dispatch(Selectedrecipe(value));
    dispatch(Showdat(false));
  };
  if (status == STATUS.LOADING) {
    return (
      <h1 id="spinner">
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </h1>
    );
  }
  if (status == STATUS.IDLE) {
    return (
      <div id="content" className="container text-center">
        {stateIs ? (
          dataArray !== "notFound" ? (
            dataArray.map((val, ind) => (
              <div key={ind} id="maindiv">
                <h4>{val.title}</h4>
                <div id="picDiv">
                  <div id="pic"></div>
                </div>

                <div className="d-grid gap-2 ">
                  <button
                    id="recipebtn"
                    className="btn btn-primary"
                    onClick={() => setPage(val)}
                    type="button"
                  >
                    {" "}
                    Show Recipe
                  </button>
                </div>
              </div>
            ))
          ) : dataArray == "notFound" ? (
            <>
              <TbFaceIdError id="notFound" />
            </>
          ) : (
            ""
          )
        ) : (
          <RecipePage />
        )}
      </div>
    );
  }

  return <h1>Result not found!</h1>;
}
