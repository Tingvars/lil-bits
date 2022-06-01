import React, { useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import Container from "../components/Container";
import "react-datepicker/dist/react-datepicker.css";
import { setDate, setSavedGuestCount, setEmail } from "../storage";

export default function OrderScreen() {
  const [visitDate, setVisitDate] = useState(new Date());
  const [guestCount, setGuestCount] = useState(1);
  const [userEmail, setUserEmail] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const todayDate = new Date();
  const router = useRouter();

  const ChooseDate = () => {
    return (
      <div className="flex flex-row justify-center">
        <DatePicker
          selected={visitDate}
          onChange={(date = Date) => {
            const hours = date.getHours();
            const day = date.getDay();

            if (date < todayDate) {
              alert("Please select a date and time in the future");
            } else if (hours < 16 || hours > 22) {
              alert("Please select a time between 16:00 and 23:00");
            } else if (day === 0 || day === 6) {
              alert("Please select a day between Mon and Fri");
            } else {
              setVisitDate(date);
            }
          }}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>
    );
  };

  function updateEmail(ev) {
    const input = ev.target.value;
    setUserEmail(input);
    setEmailEntered(true);
  }

  function toReceiptScreen() {
    if (emailEntered && guestCount <= 10) {
      //using localstorage functions to save entered data:
      setDate(visitDate);
      setSavedGuestCount(guestCount);
      setEmail(userEmail);
      router.push("/ReceiptScreen");
    } else if (guestCount > 10) {
      alert("Please select a number of guests between 1 and 10");
    } else if (!emailEntered) {
      alert("Please enter your email");
    }
  }

  return (
    <div>
      <TopMenu topMenuButton={"order"} />
      <div className="flex flex-row justify-center">
        <Container className="bg-bits-yellow">
          <div className="text-bits-yellow">
            Please choose your date and time:{" "}
            <div>(We are open weekdays 16:00-23:00)</div>
          </div>
          <ChooseDate />
          <div className="text-bits-yellow">
            Please enter the number of guests (1-10):
          </div>
          <input
            type="number"
            value={guestCount}
            onChange={(event) => {
              setGuestCount(parseInt(event.target.value));
            }}
          />
          <div className="text-bits-yellow">Please enter your email:</div>
          <div>
            <input
              type="email"
              id="email"
              size="30"
              required
              onChange={updateEmail}
            ></input>
          </div>
          <Button text={"To Receipt Screen"} onClick={toReceiptScreen} />
        </Container>
      </div>
    </div>
  );
}
