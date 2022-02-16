import React, {useState} from 'react'
import './ModalNewMeal.css';

export default function ModalNewMeal({toggleModalNewMeal, likeMeal, mealId}) {
    const [mealName, setMealName] = useState('');
    const [mealDescription, setMealDescription] = useState('');

    return (
        <div className="modal-wrapper">
            <form
                className="modal-window modal-new-meal"
            >
                <input
                    className="modal-new-meal__input"
                    type="text"
                    placeholder="Meal Name"
                    autoFocus
                    onInput={e => {
                        setMealName(e.target.value);
                    }}
                    />
                
                <textarea
                    className="modal-new-meal__input modal-new-meal__textarea"
                    placeholder="Meal Description"
                    onInput={e => {
                        setMealDescription(e.target.value);
                    }}
                />
                
                <button
                    className="btn-decline"
                    onClick={e => {
                        e.preventDefault();
                        toggleModalNewMeal();
                    }}
                >
                    Cancel
                </button>

                <button
                    className="btn-accept"
                    onClick={e => {
                        e.preventDefault();

                        const meal = {
                            idMeal: mealId.current++,
                            strMeal: mealName,
                            strInstructions: mealDescription
                        };

                        if (!mealName || !mealDescription) {
                            alert('Please, don`t leave empty inputs!');
                            return;
                        }
                        
                        likeMeal(meal)();
                        toggleModalNewMeal();
                    }}
                >
                    Add Custom Meal
                </button>
            </form>

            <div
                className="overlay"
                onClick={toggleModalNewMeal}
            ></div>
        </div>
    );
};