/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { updateRecepies } from "../redux/recepies";

function Recipes() {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  const fetchItems = async () => {
    const query = document.getElementById('query').value;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7c1f09e1&app_key=d64e63d13c80d619abd4f13d439ebd71`;
    const data = await fetch(url);
    const recipesJason = await data.json();
    const recipes = recipesJason.hits;
    setRecipes(recipes);
  };

  const onSubmit = (e) => {
    fetchItems();
    console.log(recipes);
    e.preventDefault();
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <div className="recepies">
        <form onSubmit={onSubmit} className="p-3">
          <div className="form-group">
            <label htmlFor="exampleInputPassword1"> Search</label>
            <input type="text" className="form-control w-75" id="query" placeholder="search" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {recipes.map((recipe) => (
          <div>{recipe.recipe.image}</div>

        ))}

      </div>
    </div>

  );
}
export default Recipes;
