import { useState, useEffect } from "react";
import axios from "axios";

const Recipe = ({ meal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
        );
        setData(response.data.meals);
      } catch (err) {
        console.log("Error in fetching data", err);
      }
    };

    fetchData();
  }, [meal]);

  const modalId = `exampleModal-${meal}`;

  return (
    <>
      <div
        className="recipe"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        {data.length > 0 && data[0] && (
          <>
            <img
              className="recipe-img my-3"
              src={data[0].strMealThumb}
              alt={data[0].strMeal}
            />
            <h4>{meal}</h4>
          </>
        )}
      </div>

      {/* Modal */}

      <>
        <div
          className="modal fade"
          id={modalId}
          tabIndex="-1"
          aria-labelledby={`${modalId}-label`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModal-label">
                  {meal}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {data.length > 0 && data[0] && (
                <div className="modal-body">
                  <div className="modal-first">
                    <img
                      className="recipe-img my-3"
                      src={data[0].strMealThumb}
                      alt={data[0].strMeal}
                    />

                    <div>
                      <p style={{ fontSize: "1.5rem" }}>Ingredients: </p>
                      <ul>
                        <li>{data[0].strIngredient1}</li>
                        <li>{data[0].strIngredient2}</li>
                        <li>{data[0].strIngredient3}</li>
                        <li>{data[0].strIngredient4}</li>
                        <li>{data[0].strIngredient5}</li>
                        <li>{data[0].strIngredient6}</li>
                        <li>{data[0].strIngredient7}</li>
                        <li>{data[0].strIngredient8}</li>
                        <li>{data[0].strIngredient9}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="instructions">
                    <h5>Instructions</h5>
                    <ul>
                      <li>{data[0].strInstructions}</li>
                    </ul>
                  </div>
                </div>
              )}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Recipe;
