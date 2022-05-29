import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import axios from "axios";
import Container from "../components/Container";

export default function SelectDish() {
  let enteredEmail;
  let savedUserEmail;
  let savedSelectedMeal;
  if (typeof window !== "undefined") {
    savedUserEmail = localStorage.getItem("savedUserEmail");
    enteredEmail = localStorage.getItem("enteredEmail");
    savedSelectedMeal = JSON.parse(localStorage.getItem("selectedMeal"));
  }
  let userQuestion;
  if (enteredEmail === savedUserEmail && enteredEmail !== null) {
    userQuestion = "Same as last time?";
  } else {
    userQuestion = "Try this new dish?";
  }
  const [selectedMeal, setSelectedMeal] = useState([]);
  const router = useRouter();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    if (
      enteredEmail === savedUserEmail &&
      enteredEmail !== null &&
      savedSelectedMeal !== null
    ) {
      const id = "lookup.php?i=" + savedSelectedMeal.idMeal;
      console.log(id);
      getMeal(id);
    } else {
      getMeal("random.php");
    }
  }, []);

  const getMeal = async (ending) => {
    let urlEnding = ending;
    const url = "https://www.themealdb.com/api/json/v1/1/";
    let totalUrl = url + urlEnding;
    //try catch error catch in case API fails. Retry button?

    // setLoading(true)
    const result = await axios(totalUrl);

    // setLoading(false)
    setMeal(result.data.meals[0]);
  };

  //sets selectedMeal to whatever the user chooses and locks it at 1
  function selectMeal() {
    if (selectedMeal.length < 1) {
      setSelectedMeal(meal);
      localStorage.setItem("selectedMeal", JSON.stringify(meal));
      router.push("/SelectDrinks");
    }
  }

  function getRandomMeal() {
    getMeal("random.php");
  }

  return (
    <div>
      <TopMenu />
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
            <Button text={"Yes please!"} clickAction={selectMeal} />
            <Button text={"No, new meal"} clickAction={getRandomMeal} />
          </div>
        </Container>
      </div>
    </div>
  );
}
