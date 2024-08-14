import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, handleFetchRandomMeal } = useGlobalContext();

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text);
  };

  return (
    <section>
      <div className="container">
        <div className="search-wrapper">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search favorite meal"
              value={text}
              onChange={handleInput}
            />
            <button className="btn">Search</button>
          </form>
          <button onClick={handleFetchRandomMeal} className="btn btn-hipster">
            Random
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
