import React, {useState, useEffect, useRef} from 'react';
import RandomMeal from '../../services/RandomMeal';
import CurrentMealBoard from '../CurrentMealBoard/CurrentMealBoard.jsx';
import LikedMealsBoard from '../LikedMealsBoard/LikedMealsBoard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ModalNewMeal from '../ModalNewMeal/ModalNewMeal.jsx';

import { HashRouter,  Routes, Route} from 'react-router-dom';

import './App.css';


export default function App() {
    const localLikedMeals = localStorage.getItem('likedMeals') ?
        JSON.parse(localStorage.getItem('likedMeals'))
        :
        [];

    const [randomMeal, setRandomMeal] = useState(null);
    const [likedMeals, setLikedMeals] = useState(localLikedMeals);
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
            const newLikedMealsArr = [...likedMeals, likedMeal];

            updateLikedMealsArr(newLikedMealsArr);

            showNewMeal();
        }
    }

    function deleteMeal(deletedMeal) {
        return () => {
            const newLikedMealsArr = [];

            for (let elem of likedMeals) {
                if (elem.idMeal !== deletedMeal.idMeal) newLikedMealsArr.push(elem);
            }

            updateLikedMealsArr(newLikedMealsArr);
            // setLikedMeals(state => {
            //     let newState = [];
                
            //     for (let elem of state) {
            //         if (elem.idMeal !== deletedMeal.idMeal) newState.push(elem);
            //     }

            //     addLikedMealsToLocalStorage();

            //     return newState;
            // });
            
        }
    }

    function toggleModalNewMeal() {
        setModalNewMealIsVisible(s => !s);
    }

    function updateLikedMealsArr(arr) {
        localStorage.setItem('likedMeals', JSON.stringify(arr));
        setLikedMeals(arr);
    }

    useEffect(() => showNewMeal(), []);
    
    return (
        <React.StrictMode>
            <HashRouter>
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
            </HashRouter>
        </React.StrictMode>
    );
};