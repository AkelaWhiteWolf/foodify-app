import React from 'react'
import './AddCustomMealBtn.css';

export default function AddCustomMealBtn({toggleModalNewMeal}) {
    return (
        <button
            className="btn-meal-card add-custom-meal-btn"
            onClick={toggleModalNewMeal}
        >
            Add New Meal
        </button>
    );
};
