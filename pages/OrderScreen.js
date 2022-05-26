import React, { useState } from "react";
import ReceiptScreen from "./ReceiptScreen";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";

export default function OrderScreen() {
  let selectedMeal;
  if (typeof window !== "undefined") {
    selectedMeal = localStorage.getItem("selectedMeal");
  }
  console.log(selectedMeal);
  const selectedDrinks = props.selectedDrinks;
  const [hasClickedToReceiptScreen, setHasClickedToReceiptScreen] =
    useState(false);
  const router = useRouter();

  function ToReceiptScreen() {
    setHasClickedToReceiptScreen(true);
  }

  if (hasClickedToReceiptScreen === true) {
    return (
      <div>
        <ReceiptScreen
          selectedMeal={selectedMeal}
          selectedDrinks={selectedDrinks}
        />
      </div>
    );
  }

  return (
    <div>
      <TopMenu />
      <div> This is Order Screen </div>
      <div>Here is your order:</div>
      <div>{selectedMeal.strMeal}</div>
      <div>{selectedDrinks}</div>
      <button className="btn" onClick={() => router.push("/ReceiptScreen")}>
        {" "}
        To Receipt Screen{" "}
      </button>
    </div>
  );
}
