import React, { useEffect, useState } from "react";
import SelectDrinks from "./SelectDrinks";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import axios from "axios";

function getSavedMealForUser(email) {
  // look in localstorage for orders/{{email}}/mealId
}

function getCurrentMeal() {}

function setSavedMealForUser(email) {
  // set meal id for orders/{{email}}/mealId
}

function setCurrentMeal() {}

export default function SelectDish() {
  const isExistingUser = false; //props.userOrder.existingUser; Pass through email address here
  const [selectedMeal, setSelectedMeal] = useState([]);
  const router = useRouter();
  const [meal, setMeal] = useState([]);

  const getRandomMeal = async () => {
    //try catch error catch in case API fails. Retry button?

    // setLoading(true)
    const result = await axios(
      "https://themealdb.com/api/json/v1/1/random.php"
    );

    // setLoading(false)
    setMeal(result.data.meals[0]);
  };

  useEffect(() => {
    // Get the saved meal for the user
    // If meal, download that meal
    // www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    // else get random meal

    getRandomMeal();
  }, []);

  //auto sets meal if existing user
  // if (isExistingUser) {
  //     setSelectedMeal("pizza");
  // }
  //sets selectedMeal to whatever the user chooses and locks it at 1
  function selectMeal() {
    // const selectMeal1 = meal;
    if (selectedMeal.length < 1) {
      setSelectedMeal(meal);
      localStorage.setItem("selectedMeal", JSON.stringify(meal));
    }
  }

  return (
    <div>
      <TopMenu />
      <div className="topthingie flex flex-row justify-center">
        <div className="bg-indigo-600 h-60 w-60 mr-2 my-2">
          Try this meal?
          <div>{meal.strMeal}</div>
          <div>
            <img src={meal.strMealThumb} width="100" alt=""></img>
          </div>
          <div>
            <Button text={"Yes please!"} clickAction={selectMeal} />
            <Button text={"No, new meal"} clickAction={getRandomMeal} />
          </div>
        </div>
        <div className="bg-indigo-600 h-60 w-60 mr-2 my-2">
          This is for on to drinks
          <div>
            <Button
              text={"Select Drinks"}
              clickAction={() => router.push("/SelectDrinks")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
