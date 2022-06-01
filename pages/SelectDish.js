import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import axios from "axios";
import Container from "../components/Container";
import { getSavedMeal, getEmail, getEntEmail, setSavedMeal } from "../storage";

export default function SelectDish() {
  const router = useRouter();
  const [userQuestion, setUserQuestion] = useState("Try this new meal?");
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    //using storage functions to set saved meal, saved email and email entered on home screen
    const savedSelectedMeal = getSavedMeal();
    const savedUserEmail = getEmail();
    const enteredEmail = getEntEmail();

    //if the user entered an email that has a meal stored, set heading accordingly
    if (enteredEmail === savedUserEmail && enteredEmail !== null) {
      setUserQuestion("Same as last time?");
    }

    if (
      //if the user entered an email that has a meal stored, get that meal
      enteredEmail === savedUserEmail &&
      enteredEmail !== null &&
      savedSelectedMeal !== null
    ) {
      const id = "lookup.php?i=" + savedSelectedMeal.idMeal;
      getMeal(id);
      //or if not get a new random meal
    } else {
      getMeal("random.php");
    }
  }, []);

  const getMeal = async (ending) => {
    //get meal from API with "saved"meal or "random"meal
    let urlEnding = ending;
    const url = "https://www.themealdb.com/api/json/v1/1/";
    let totalUrl = url + urlEnding;
    //try catch error catch in case API fails.

    // setLoading(true)
    const result = await axios(totalUrl);

    // setLoading(false)
    setMeal(result.data.meals[0]);
  };

  //sets selectedMeal to whatever the user chooses
  function selectMeal() {
    setSelectedMeal(meal);
    setSavedMeal(meal);
    router.push("/SelectDrinks");
  }

  function getRandomMeal() {
    //sets heading to new meal heading (in case the user had a saved meal but wanted a different one this time)
    setUserQuestion("Try this new meal?");
    getMeal("random.php");
  }

  return (
    <div>
      <TopMenu topMenuButton={"selectDish"} />
      <div className="flex flex-row justify-center">
        <Container>
          <div className="text-bits-yellow">{userQuestion}</div>
          <div className="text-bits-yellow font-bold">{meal.strMeal}</div>
          <div className="m-2">
            <img
              className="rounded"
              src={meal.strMealThumb}
              width="150"
              alt=""
            ></img>
          </div>
          <div>
            <Button text={"Yes please!"} onClick={selectMeal} />
            <Button text={"No, new meal"} onClick={getRandomMeal} />
          </div>
        </Container>
      </div>
    </div>
  );
}
