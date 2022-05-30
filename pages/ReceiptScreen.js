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
  const day = selectedDate.getDate();
  const month = selectedDate.getMonth();
  const timeHr = selectedDate.getHours();
  const timeMin = selectedDate.getMinutes();

  const router = useRouter();

  return (
    <div>
      <TopMenu />
      <div>Your receipt: </div>
      <div>Date of visit: </div>
      <div>
        {day}-{month} at {timeHr}:{timeMin}
      </div>
      <div>Number of guests: </div>
      <div>{guestCount}</div>
      <div>Email address: </div>
      <div>{userEmail}</div>
      <div>{selectedMeal.strMeal}</div>
      <div>{selectedDrink.name}</div>
      <Button text={"Home"} clickAction={() => router.push("/HomeScreen")} />
    </div>
  );
}
