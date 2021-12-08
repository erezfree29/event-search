/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
import { updateRecepies } from "../redux/recepies";
import './recipes.css';

function Recipes() {
  const dispatch = useDispatch();
  const [recipes, setRecipes] = useState([]);

  const fetchItems = async () => {
    const query = document.getElementById('query').value;
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=7c1f09e1&app_key=d64e63d13c80d619abd4f13d439ebd71`;
    const data = await fetch(url);
    const recipesJason = await data.json();
    let recipes = recipesJason.hits;
    if (document.getElementById('calories').value !== 'any') {
      const maxCalories = parseInt(document.getElementById('calories').value, 10);
      recipes = recipes.filter((recipe) => parseInt(recipe.recipe.calories, 10) < maxCalories);
    }

    if (document.getElementById('vegan').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Vegan'));
    }

    if (document.getElementById('vegetarian').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Vegetarian'));
    }

    if (document.getElementById('pescatarian').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Pescatarian'));
    }

    if (document.getElementById('mediterranean').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Mediterranean'));
    }

    if (document.getElementById('gluten-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Gluten-Free'));
    }

    if (document.getElementById('wheat-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Wheat-Free'));
    }

    if (document.getElementById('egg-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Egg-Free'));
    }

    if (document.getElementById('tree-Nut-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('tree-Nut-Free'));
    }

    if (document.getElementById('soy-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Soy-Free'));
    }

    if (document.getElementById('fish-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Fish-Free'));
    }

    if (document.getElementById('shellfish-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('shellfish-Free'));
    }

    if (document.getElementById('pork-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Pork-Free'));
    }

    if (document.getElementById('red-Meat-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('"Red-Meat-Free'));
    }

    if (document.getElementById('crustacean-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Crustacean-Free'));
    }

    if (document.getElementById('celery-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Celery-Free'));
    }

    if (document.getElementById('mustard-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Mustard-Free'));
    }

    if (document.getElementById('sesame-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Sesame-Free'));
    }

    if (document.getElementById('lupine-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Lupine-Free'));
    }

    if (document.getElementById('mollusk-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Mollusk-Free'));
    }

    if (document.getElementById('no_oil_added').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('No oil added'));
    }

    if (document.getElementById('sulfite-Free').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes('Sulfite-Free'));
    }

    if (document.getElementById('kosher').checked) {
      recipes = recipes.filter((recipe) => recipe.recipe.healthLabels.includes("Kosher"));
    }
    setRecipes(recipes);
    localStorage.setItem('recipes', JSON.stringify(recipes));
  };

  const onSubmit = (e) => {
    fetchItems();
    document.querySelector('.carousel').style.setProperty("display", "block", "important");
    e.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem('recipes') !== null) {
      const storedNames = JSON.parse(localStorage.getItem("recipes"));
      setRecipes(storedNames);
    } else {
      document.querySelector('.carousel').style.setProperty("display", "none", "important");
    }
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center"><h1>Find Your Recipe</h1></div>
      <div className="recepies">
        <form onSubmit={onSubmit} className="p-3">
          <div className="form-group">
            <div className="input_button d-flex">
              <input type="text" className="form-control" id="query" placeholder="search" />
              <button type="submit" className="btn btn-primary">Find</button>
            </div>
            <label htmlFor="select_field">Maximum Calories</label>
            <select className="form-select" aria-label="Default select example" id="calories">
              <option selected>any</option>
              <option value="300">300</option>
              <option value="500">500</option>
              <option value="700">700</option>
              <option value="1000">1000</option>
            </select>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="vegan" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Vegan
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="vegetarian" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Vegetarian
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="pescatarian" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Pescatarian
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="mediterranean" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Mediterranean
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="gluten-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Gluten-Free
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="shellfish-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Shellfish-Free
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="fish-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Fish-Free
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="red-Meat-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Red-Meat-Free
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="pork-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Pork-free
              </div>
            </div>
            <div className="col-6">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="crustacean-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Crustacean-Free
              </div>
            </div>
            <div className="col -5">
              <div className="form-check d-flex">
                <input className="form-check-input" type="checkbox" value="" id="celery-Free" />
                <label className="form-check-label p-1" htmlFor="defaultCheck1" />
                Celery-Free
              </div>
            </div>
            <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="mustard-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Mustard-Free
            </div>
            </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="sesame-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Sesame-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="lupine-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Lupine-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="Mollusk-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Mollusk-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="Alcohol-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Alcohol-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="no_oil_added" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              No oil added
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="sulfite-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Sulfite-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="kosher" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Kosher
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="wheat-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Wheat-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="tree-Nut-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Tree-Nut-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="soy-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Soy-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="egg-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Egg-Free
            </div>
          </div>
          <div className="col-6">
            <div className="form-check d-flex">
              <input className="form-check-input" type="checkbox" value="" id="mollusk-Free" />
              <label className="form-check-label p-1" htmlFor="defaultCheck1" />
              Mollusk-Free
            </div>
          </div>
          </div>
        </form>
        <div className="carousel">
        <Carousel>
          {recipes.map((recipe) => (
            <>
              <div className="dish">
                <div>click to see the recipe</div>
                <div className="label_name">{recipe.recipe.label}</div>
                <div>
                  <a href={recipe.recipe.url}><img src={recipe.recipe.image} className="d-flex" /></a>
                </div>
              </div>
              {recipe.recipe.cautions.length > 0
        && (

          <div>
          cautions-
          {`  ${recipe.recipe.cautions}`}
          </div>

        )}

            </>
          ))}

        </Carousel>
        </div>

      </div>
    </div>

  );
}
export default Recipes;
