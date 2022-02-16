import React, {useState, useEffect, useRef} from 'react';
import RandomMeal from '../../services/RandomMeal';
import CurrentMealBoard from '../CurrentMealBoard/CurrentMealBoard.jsx';
import LikedMealsBoard from '../LikedMealsBoard/LikedMealsBoard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ModalNewMeal from '../ModalNewMeal/ModalNewMeal.jsx';

import { BrowserRouter as Router,  Routes, Route} from 'react-router-dom';

import './App.css';


export default function App() {
    const [randomMeal, setRandomMeal] = useState(null);
    const [likedMeals, setLikedMeals] = useState([]);
    const [modalNewMealIsVisible, setModalNewMealIsVisible] = useState(false);

    let mealId = useRef(1);

    const modalNewMeal = modalNewMealIsVisible ?
        <ModalNewMeal
            toggleModalNewMeal={toggleModalNewMeal}
            likeMeal={likeMeal}
            mealId={mealId}
        />
        :
        null;
    
    async function showNewMeal() {
        const randomMeal = new RandomMeal();
        const newMeal = await randomMeal.meal;
        setRandomMeal(newMeal);
    }

    function likeMeal(likedMeal) {
        return () => {
            setLikedMeals(state => [...state, likedMeal]);
            showNewMeal();
        }
    }

    function deleteMeal(deletedMeal) {
        return () => {
            setLikedMeals(state => {
                let newState = [];
                
                for (let elem of state) {
                    if (elem.idMeal !== deletedMeal.idMeal) newState.push(elem);
                }

                return newState;
            });
        }
    }

    function toggleModalNewMeal() {
        setModalNewMealIsVisible(s => !s);
    }

    useEffect(() => showNewMeal(), []);
    
    return (
        <React.StrictMode>
            <Router>
                <NavBar/>

                {modalNewMeal}

                    <main>
                        <Routes>
                            <Route path="/" element={
                                    <CurrentMealBoard
                                        meal={randomMeal}
                                        showNewMeal={showNewMeal}
                                        likeMeal={likeMeal}
                                    />
                                }/>
                            
                            <Route path="/liked" element={
                                <LikedMealsBoard
                                    mealsArr={likedMeals}
                                    toggleModalNewMeal={toggleModalNewMeal}
                                    deleteMeal={deleteMeal}
                                />
                            }/>
                        </Routes>
                    </main>
            </Router>
        </React.StrictMode>
    );
};