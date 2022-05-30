import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";

export default function ReceiptScreen() {
  let userEmail;
  let selectedMeal;
  let selectedDrink;
  let selectedDate;
  let guestCount;
  let day;
  let month;
  let timeHr;
  let timeMin;
  let timeDiv;
  let mealDiv;
  let drinkDiv;
  if (typeof window !== "undefined") {
    userEmail = JSON.parse(localStorage.getItem("userEmail"));
    selectedMeal = JSON.parse(localStorage.getItem("selectedMeal"));
    selectedDrink = JSON.parse(localStorage.getItem("selectedDrink"));
    selectedDate = new Date(JSON.parse(localStorage.getItem("selectedDate")));
    console.log(selectedDate);
    guestCount = localStorage.getItem("guestCount");
    localStorage.setItem("savedUserEmail", userEmail);
    localStorage.setItem("savedSelectedMeal", JSON.stringify(selectedMeal));
    localStorage.setItem("savedSelectedDrink", JSON.stringify(selectedDrink));
  }

  if (selectedDate !== undefined) {
    day = selectedDate.getDate();
    month = selectedDate.getMonth();
    timeHr = selectedDate.getHours();
    timeMin = selectedDate.getMinutes();
    timeDiv = (
      <div>
        {day}-{month} at {timeHr}:{timeMin}
      </div>
    );
  } else {
    timeDiv = <div>Time not selected</div>;
  }

  if (selectedMeal !== undefined) {
    mealDiv = <div>{selectedMeal.strMeal}</div>;
  } else {
    mealDiv = <div>Meal not selected</div>;
  }

  if (selectedDrink !== undefined) {
    drinkDiv = <div>{selectedDrink.name}</div>;
  } else {
    mealDiv = <div>Drink not selected</div>;
  }

  const router = useRouter();

  return (
    <div>
      <TopMenu />
      <div>Your receipt: </div>
      <div>Date of visit: </div>
      <div>{timeDiv}</div>
      <div>Number of guests: </div>
      <div>{guestCount}</div>
      <div>Email address: </div>
      <div>{userEmail}</div>
      <div>{mealDiv}</div>
      <div>{drinkDiv}</div>
      <Button text={"Home"} clickAction={() => router.push("/HomeScreen")} />
    </div>
  );
}
