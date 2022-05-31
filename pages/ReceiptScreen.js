import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import AltTopMenu from "../components/AltTopMenu";
import Button from "../components/Button";
import { getDate } from "../storage";

export default function ReceiptScreen() {
  let timeDiv;
  let mealDiv;
  let drinkDiv;
  const [order, setOrder] = useState({});

  useEffect(() => {
    setOrder({
      userEmail: JSON.parse(localStorage.getItem("userEmail")),
      selectedMeal: JSON.parse(localStorage.getItem("selectedMeal")),
      guestCount: localStorage.getItem("guestCount"),
      selectedDrink: JSON.parse(localStorage.getItem("selectedDrink")),
      selectedDate: getDate(),
    });
  }, []);

  if (typeof window !== "undefined") {
    localStorage.setItem("savedUserEmail", order.userEmail);
    localStorage.setItem(
      "savedSelectedMeal",
      JSON.stringify(order.selectedMeal)
    );
    localStorage.setItem(
      "savedSelectedDrink",
      JSON.stringify(order.selectedDrink)
    );
  }

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

  const router = useRouter();

  return (
    <div>
      <TopMenu topMenuButton={"order"} />
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
        <Button text={"Checkorder"} onClick={() => console.log(order)} />
      </div>
    </div>
  );
}
