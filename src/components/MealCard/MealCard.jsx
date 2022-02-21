import React from 'react';
import './MealCard.css';

export default function MealCard({img, mealName, mealInstruction, isRandomMeal, showNewMeal, likeMeal, deleteMeal}) {
    const buttons = isRandomMeal ?
        <>
            <button
                className="btn-meal-card btn-decline"
                onClick={showNewMeal}
            >
                Skip
            </button>

            <button
                className="btn-meal-card btn-accept"
                onClick={likeMeal}
            >
                Like
            </button>
        </>
        :
        <button
            className="btn-meal-card btn-decline"
            onClick={deleteMeal}
        >
            Delete
        </button>;
    
    const image = img ?
        <img
            src={img}
            alt='Dish'
            className="meal-img"
        />
        :
        <div className="meal-img meal-no-img">There is no image</div>;

    return (
        <article className="meal-card">
            {image}

            <div className="description-container">
                <h1 className="meal-name">{mealName}</h1>

                <p className="meal-instruction">{mealInstruction}</p>

            </div>
            
            <div className="meal-buttons-container">
                {buttons}
            </div>
        </article>
    );
};