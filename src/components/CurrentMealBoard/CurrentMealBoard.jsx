import React from 'react'
import './CurrentMealBoard.css';

import MealCard from '../MealCard/MealCard.jsx';

export default function CurrentMealBoard({meal, showNewMeal, likeMeal}) {
    return (
        <section className="current-meal-board">
            <MealCard
                img={meal?.strMealThumb ?? null}
                mealName={meal?.strMeal ?? 'null'}
                mealInstruction={meal?.strInstructions ?? null}
                isRandomMeal={true}
                showNewMeal={showNewMeal}
                likeMeal={likeMeal(meal)}
            />
        </section>
    );
}