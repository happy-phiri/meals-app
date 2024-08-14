import { useGlobalContext } from "../context";
import { ImBin } from "react-icons/im";

const Favorites = () => {
  const { favoriteMeals, removeFromFavorites, showModal } = useGlobalContext();

  return (
    <div className="favorites-outer-wrapper">
      <section>
        {favoriteMeals.length > 0 && (
          <div className="container">
            <div className="favorites-wrapper">
              {favoriteMeals.map((meal) => {
                const { idMeal, strMealThumb: image, strMeal: name } = meal;

                return (
                  <div key={idMeal} className="favorite-card">
                    <img
                      className="favorite-image"
                      src={image}
                      alt={name}
                      onClick={() => showModal(favoriteMeals, idMeal)}
                    />
                    <button onClick={() => removeFromFavorites(idMeal)}>
                      <ImBin />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Favorites;
