import { useGlobalContext } from "../context";
import { FaRegThumbsUp } from "react-icons/fa";

const Meals = () => {
  const { meals, addToFavorites, loading, showModal } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="container">
          <h4>Loading . . .</h4>
        </div>
      </main>
    );
  } else if (meals.length === 0) {
    return (
      <main>
        <div className="container">
          <h4>Sorry, no meals found!</h4>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="container">
          <div className="meals-wrapper">
            {meals.map((meal) => {
              const { idMeal, strMeal: name, strMealThumb: image } = meal;

              return (
                <div key={idMeal} className="card">
                  <img
                    className="card-img"
                    src={image}
                    alt={name}
                    onClick={() => showModal(meals, idMeal)}
                  />
                  <footer className="card-footer">
                    <h5>{name}</h5>
                    <button onClick={() => addToFavorites(idMeal)}>
                      <FaRegThumbsUp />
                    </button>
                  </footer>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
};

export default Meals;
