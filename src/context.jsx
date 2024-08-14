/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteMeals, setFavoriteMeals] = useState(
    JSON.parse(localStorage.getItem("favoriteMeals")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("");
  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await axios(url);
      setMeals(res.data.meals);
    } catch {
      console.log(Error);
    }
    setLoading(false);
  };

  const handleFetchRandomMeal = () => {
    fetchData(randomMealUrl);
  };

  const addToFavorites = (idMeal) => {
    const alreadyFavorite = favoriteMeals.find(
      (meal) => meal.idMeal === idMeal
    );
    const meal = meals.find((meal) => meal.idMeal === idMeal);

    if (alreadyFavorite) {
      return;
    } else {
      const updatedFavorites = [meal, ...favoriteMeals];
      setFavoriteMeals(updatedFavorites);
      localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favoriteMeals.filter(
      (meal) => meal.idMeal !== idMeal
    );
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem("favoriteMeals", JSON.stringify(updatedFavorites));
  };

  const showModal = (arr, id) => {
    const selectedItem = arr.find((item) => item.idMeal === id);
    setModal(true);
    setSelectedMeal(selectedItem);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetchData(allMealsUrl);
  }, []);

  useEffect(() => {
    fetchData(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        meals,
        setSearchTerm,
        handleFetchRandomMeal,
        favoriteMeals,
        addToFavorites,
        removeFromFavorites,
        loading,
        modal,
        showModal,
        selectedMeal,
        closeModal,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
