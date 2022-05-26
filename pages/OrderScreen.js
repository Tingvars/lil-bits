import React, { useState } from "react";
import ReceiptScreen from "./ReceiptScreen";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function OrderScreen() {
  const [startDate, setStartDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  const [userEmail, setUserEmail] = useState("");

  let selectedMeal;
  if (typeof window !== "undefined") {
    selectedMeal = JSON.parse(localStorage.getItem("selectedMeal"));
  }
  let selectedDrink;
  if (typeof window !== "undefined") {
    selectedDrink = JSON.parse(localStorage.getItem("selectedDrink"));
  }
  const router = useRouter();

  const ChooseDate = () => {
    return (
      <DatePicker
        selected={startDate}
        onChange={(date = Date) => setStartDate(date)}
        showTimeSelect
        dateFormat="Pp"
      />
    );
  };

  function updateEmail(ev) {
    const input = ev.target.value;
    setUserEmail(input);
    console.log(userEmail);
  }

  function toReceiptScreen() {
    localStorage.setItem("selectedDate", JSON.stringify(startDate));
    localStorage.setItem("guestCount", JSON.stringify(guestCount));
    localStorage.setItem("userEmail", JSON.stringify(userEmail));
    router.push("/ReceiptScreen");
  }

  return (
    <div>
      <TopMenu />
      <div>Please choose your date and time:</div>
      <ChooseDate />
      <div>Please enter the number of guests:</div>
      <input
        type="number"
        value={guestCount}
        onChange={(event) => {
          setGuestCount(parseInt(event.target.value));
        }}
      />
      <div>Please enter your email:</div>
      <div>
        <input
          type="email"
          id="email"
          size="30"
          // defaultValue={userEmail}
          required
          onChange={updateEmail}
        ></input>
      </div>
      <div>Here is your order:</div>
      <div>{selectedMeal.strMeal}</div>
      <div>{selectedDrink.name}</div>
      <Button text={"To Receipt Screen"} clickAction={toReceiptScreen} />
    </div>
  );
}
