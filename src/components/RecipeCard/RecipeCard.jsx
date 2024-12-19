import React from 'react';
import './RecipeTabs.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-card-image"
        />
        <div className="recipe-card-title">
          <p>{recipe.featuredText}</p>
          <button className="close-button">&times;</button>
        </div>
      </div>
      <div className="recipe-card-body">
        <h2>{recipe.title}</h2>
        <div className="recipe-info">
          <div>
            <i className="icon">⏱️</i>
            <span>{recipe.time}</span>
          </div>
          <div>
            <i className="icon">🍴</i>
            <span>{recipe.ingredients} Ingredients</span>
          </div>
          <div>
            <i className="icon">👥</i>
            <span>{recipe.serving} Serving</span>
          </div>
        </div>
        <p className="recipe-description">{recipe.description}</p>
        <button className="view-recipe-button">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;