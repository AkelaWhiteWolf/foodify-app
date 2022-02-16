import React from 'react'
import './LikedMealsBoard.css';

import MealCard from '../MealCard/MealCard.jsx';
import AddCustomMealBtn from '../AddCustomMealBtn/AddCustomMealBtn.jsx';

export default function LikedMealsBoard({mealsArr, toggleModalNewMeal, deleteMeal}) {
    let renderedMeals = mealsArr?.map(meal => {
        return (
            <MealCard
                key={meal.idMeal}
                img={meal?.strMealThumb ?? null}
                mealName={meal?.strMeal ?? 'null'}
                mealInstruction={meal?.strInstructions ?? null}
                deleteMeal={deleteMeal(meal)}
            />
        );
    });
        
    return (
        <section className="liked-meals-board">
            <AddCustomMealBtn toggleModalNewMeal={toggleModalNewMeal}/>
            {renderedMeals}
        </section>
    );
}