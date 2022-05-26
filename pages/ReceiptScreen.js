import React, { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";

export default function ReceiptScreen() {
  const selectedMeal = localStorage.getItem("selectedMeal");
  const selectedDrinks = props.selectedDrinks;
  const [hasClickedToHomeScreen, setHasClickedToHomeScreen] = useState(false);
  let [mealPrice, setMealPrice] = useState(0);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const router = useRouter();

  //setting meal price
  //     useEffect(() => {
  //         if (selectedMeal === "cake") {
  //         setMealPrice(30);
  //     } else if (selectedMeal === "sandwich") {
  //         setMealPrice(50);
  //     } else if (selectedMeal === "pizza") {
  //         setMealPrice(100);
  //     }
  // });

  //setting drink price
  useEffect(() => {
    if (selectedDrinks === "beer") {
      setDrinkPrice(100);
    } else if (selectedDrinks === "coke") {
      setDrinkPrice(50);
    } else if (selectedDrinks === "water") {
      setDrinkPrice(10);
    }
  }, [selectedDrinks]);

  function ToHomeScreen() {
    setHasClickedToHomeScreen(true);
  }

  if (hasClickedToHomeScreen === true) {
    return (
      <div>
        <HomeScreen />
      </div>
    );
  }

  return (
    <div>
      <TopMenu />
      <div> This is Receipt Screen </div>
      <div>Your receipt: </div>
      <div>{selectedMeal.strMeal} 100</div>
      <div>
        {selectedDrinks} {drinkPrice}
      </div>
      <button className="btn" onClick={() => router.push("/HomeScreen")}>
        {" "}
        To Home Screen{" "}
      </button>
    </div>
  );
}
