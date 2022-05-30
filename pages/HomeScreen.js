import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import Container from "../components/Container";

export default function HomeScreen() {
  let savedUserEmail;
  let enteredEmail;
  const router = useRouter();
  if (typeof window !== "undefined") {
    savedUserEmail = localStorage.getItem("savedUserEmail");
    enteredEmail = localStorage.getItem("enteredEmail");
  }

  //setting enteredEmail as whatever the user entered
  function updateEmail(ev) {
    const input = ev.target.value;
    localStorage.setItem("enteredEmail", input);
  }

  const slider = (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="foodimage1.jpg" />
      <div data-src="foodimage2.jpg" />
      <div data-src="foodimage3.jpg" />
    </AwesomeSlider>
  );

  function checkExistingEmail() {
    if (savedUserEmail === null) {
      alert("Please enter an email address");
    } else if (savedUserEmail !== enteredEmail) {
      alert("Email not found");
    } else if (savedUserEmail === enteredEmail) {
      router.push("/SelectDish");
    }
  }

  return (
    <div>
      <TopMenu />
      <div className="flex flex-col justify-center">
        <div className="h-80 flex flex-col items-center my-1">
          <div className="text-bits-red text-xl font-bold">
            WELCOME TO LIL BITS!
          </div>
          <div className="py-3 w-96">{slider}</div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col sm:flex-row sm:justify-center lg:space-x-20">
            <Container>
              <div className="text-bits-yellow flex flex-col items-center">
                <div className="font-bold">ALREADY MADE AN ORDER?</div>
                <div>Enter your email here to retrieve it</div>
              </div>
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
              <Button
                text={"Select Existing"}
                clickAction={checkExistingEmail}
              />
            </Container>
            <Container>
              <div className="text-bits-yellow flex flex-col items-center">
                <div className="font-bold">READY TO MAKE A NEW ORDER?</div>
                <div>Onwards to our many delicious dishes</div>
              </div>
              <div>
                <Button
                  text={"Select New Dish"}
                  clickAction={() => router.push("/SelectDish")}
                />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
