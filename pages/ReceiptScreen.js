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
    selectedDate = localStorage.getItem("selectedDate");
    guestCount = localStorage.getItem("guestCount");
    localStorage.setItem("savedUserEmail", userEmail);
    localStorage.setItem("savedSelectedMeal", JSON.stringify(selectedMeal));
    localStorage.setItem("savedSelectedDrink", JSON.stringify(selectedDrink));
  }
  const day = selectedDate.substring(9, 2);
  const month = selectedDate.substring(6, 2);
  const year = selectedDate.substring(1, 4);
  const time = selectedDate.substring(12, 5);

  const router = useRouter();

  return (
    <div>
      <TopMenu />
      <div>Your receipt: </div>
      <div>Date of visit: </div>
      <div>
        {day}-{month}-{year} at {time}
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
