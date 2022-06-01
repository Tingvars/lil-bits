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

  const DisplayTime = () =>
    order.selectedDate !== undefined ? (
      <div>
        {order.selectedDate.getDate()}-{order.selectedDate.getMonth() + 1} at{" "}
        {order.selectedDate.getHours()}:
        {order.selectedDate.getMinutes().toString().padStart(2, "0")}
      </div>
    ) : (
      <div>Time not selected</div>
    );

  const DisplayMeal = () =>
    order.selectedMeal !== undefined ? (
      <div>{order.selectedMeal.strMeal}</div>
    ) : (
      <div>Meal not selected</div>
    );

  const DisplayDrink = () =>
    order.selectedDrink !== undefined ? (
      <div>{order.selectedDrink.name}</div>
    ) : (
      <div>Drink not selected</div>
    );

  return (
    <div>
      <TopMenu topMenuButton={"receipt"} />
      <div className="p-2 flex flex-col items-center">
        <div className="p-3 border-2 rounded border-bits-red w-96 min-h-60 flex flex-col items-center">
          <div className="font-bold p-1">YOUR RECEIPT: </div>
          <div className="font-bold">Date of visit: </div>
          <DisplayTime />
          <div className="font-bold">Number of guests: </div>
          <div>{order.guestCount}</div>
          <div className="font-bold">Email address: </div>
          <div>{order.userEmail}</div>
          <div className="font-bold">Your order: </div>
          <DisplayMeal />
          <DisplayDrink />
        </div>
        <Button text={"Home"} onClick={() => router.push("/HomeScreen")} />
      </div>
    </div>
  );
}
