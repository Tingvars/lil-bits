import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";

import Button from "../components/Button";
import {
  getDate,
  getSavedMeal,
  getEmail,
  getSavedGuestCount,
  getDrink,
} from "../storage";

export default function ReceiptScreen() {
  let timeDiv;
  let mealDiv;
  let drinkDiv;
  const [order, setOrder] = useState({});
  const router = useRouter();

  useEffect(() => {
    //using localstorage functions to pull data to object:
    setOrder({
      userEmail: getEmail(),
      selectedMeal: getSavedMeal(),
      guestCount: getSavedGuestCount(),
      selectedDrink: getDrink(),
      selectedDate: getDate(),
    });
  }, []);

  if (order.selectedDate !== undefined) {
    timeDiv = (
      <div>
        {order.selectedDate.getDate()}-{order.selectedDate.getMonth() + 1} at{" "}
        {order.selectedDate.getHours()}:
        {order.selectedDate.getMinutes().toString().padStart(2, "0")}
      </div>
    );
  } else {
    timeDiv = <div>Time not selected</div>;
  }

  if (order.selectedMeal !== undefined) {
    mealDiv = <div>{order.selectedMeal.strMeal}</div>;
  } else {
    mealDiv = <div>Meal not selected</div>;
  }

  if (order.selectedDrink !== undefined) {
    drinkDiv = <div>{order.selectedDrink.name}</div>;
  } else {
    mealDiv = <div>Drink not selected</div>;
  }

  return (
    <div>
      <TopMenu topMenuButton={"receipt"} />
      <div className="p-2 flex flex-col items-center">
        <div className="p-3 border-2 rounded border-bits-red w-96 min-h-60 flex flex-col items-center">
          <div className="font-bold p-1">YOUR RECEIPT: </div>
          <div className="font-bold">Date of visit: </div>
          <div>{timeDiv}</div>
          <div className="font-bold">Number of guests: </div>
          <div>{order.guestCount}</div>
          <div className="font-bold">Email address: </div>
          <div>{order.userEmail}</div>
          <div className="font-bold">Your order: </div>
          <div>{mealDiv}</div>
          <div>{drinkDiv}</div>
        </div>
        <Button text={"Home"} onClick={() => router.push("/HomeScreen")} />
      </div>
    </div>
  );
}
