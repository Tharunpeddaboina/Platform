import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes, applyFilters } from './../Slice/RecipeSlice';
import SearchBar from './../components/SearchBar';
import FilterForm from './../components/FilterForm';
import './RecipeListPage.css';

const RecipeListPage = () => {
    const dispatch = useDispatch();
    const { filteredRecipes, status, searchTerm } = useSelector((state) => state.recipes);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null); // Track which recipe's details are shown

    useEffect(() => {
    const fetchRecipes = async () => {
        const response = await fetch(`https://platform-33lgw1l7o-tharunpeddaboinas-projects.vercel.app/search?query=${searchTerm.trim()}`);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        dispatch(setRecipes(data));
    };

    if (searchTerm) {
        fetchRecipes();
    }
}, [dispatch, searchTerm]);


    useEffect(() => {
        dispatch(applyFilters());
    }, [dispatch, searchTerm]);

    const handleViewDetails = (recipeId) => {
        setSelectedRecipeId(selectedRecipeId === recipeId ? null : recipeId); // Toggle the selected recipe
    };

    return (
        <div className="recipe-list-page">
            <div className="sidebar">
                <FilterForm />
            </div>
            <div className="main-content">
                <div className="search-container">
                    <h1 className="recipe-title">EpiCurious Recipes</h1>
                    <SearchBar />
                </div>

                <div className="recipes-container">
                    {status === 'succeeded' && filteredRecipes.length > 0 ? (
                        <div className="recipes-grid">
                            {filteredRecipes.map(recipe => (
                                <div key={recipe._id} className="recipe-card">
                                    <h5 className="recipe-name">{recipe.title}</h5>
                                    <p className="recipe-description">{recipe.desc}</p>
                                    <p className="recipe-rating">⭐ {recipe.rating}</p>
                                    <p className="recipe-calories">Calories: {recipe.calories}</p>
                                    <p className="recipe-fat">Fat: {recipe.fat}g</p>
                                    <p className="recipe-protein">Protein: {recipe.protein}g</p>
                                    <p className="recipe-sodium">Sodium: {recipe.sodium}mg</p>
                                    <p className="recipe-categories">Categories: {recipe.categories.join(', ')}</p>
                                    
                                    <div className="button-group">
                                        <button className="view-button" onClick={() => handleViewDetails(recipe._id)}>
                                            {selectedRecipeId === recipe._id ? "Hide Details" : "View Details"}
                                        </button>
                                    </div>

                                    {selectedRecipeId === recipe._id && (
                                        <div className="details-grid">
                                            <h3>Ingredients:</h3>
                                            <ul className="details-list">
                                                {recipe.ingredients.map((ingredient, index) => (
                                                    <li key={index}>{ingredient}</li>
                                                ))}
                                            </ul>
                                            <h3>Directions:</h3>
                                            <ol className="details-list">
                                                {recipe.directions.map((direction, index) => (
                                                    <li key={index}>{direction}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No recipes found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeListPage;
