import React, { useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import DatePicker from "react-datepicker";
import Container from "../components/Container";
import "react-datepicker/dist/react-datepicker.css";

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
            console.log(day);
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
      localStorage.setItem("selectedDate", JSON.stringify(visitDate));
      localStorage.setItem("guestCount", JSON.stringify(guestCount));
      localStorage.setItem("userEmail", JSON.stringify(userEmail));
      router.push("/ReceiptScreen");
    } else if (guestCount > 10) {
      alert("Please select a number of guests between 1 and 10");
    } else if (!emailEntered) {
      alert("Please enter your email");
    }
  }

  return (
    <div>
      <TopMenu />
      <div className="flex flex-row justify-center">
        <Container className="bg-bits-yellow">
          <div className="text-bits-yellow">
            Please choose your date and time:
          </div>
          <ChooseDate />
          <div className="text-bits-yellow">
            Please enter the number of guests:
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
              // defaultValue={userEmail}
              required
              onChange={updateEmail}
            ></input>
          </div>
          <Button text={"To Receipt Screen"} clickAction={toReceiptScreen} />
        </Container>
      </div>
    </div>
  );
}
