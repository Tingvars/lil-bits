import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";

const Container = ({ children }) => {
  return <div className="bg-indigo-600 w-96 h-32 ml-1 my-1">{children}</div>;
};

export default function HomeScreen() {
  const router = useRouter();

  //setting enteredEmail as whatever the user entered
  function updateEmail(ev) {
    const input = ev.target.value;
    localStorage.setItem("enteredEmail", input);
  }

  const slider = (
    <AwesomeSlider animation="cubeAnimation">
      <div data-src="/path/to/image-0.png" />
      <div data-src="/path/to/image-1.png" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>
  );

  return (
    <div>
      <TopMenu />
      <div className="topdivthingie flex flex-row justify-center">
        <div className="w-1/2 h-80 bg-green-400 flex flex-col items-center my-1">
          Delicious!
          <div className="py-3 w-96">{slider}</div>
        </div>
        <div className="flex flex-col items-center">
          <Container>
            Already made an order? Enter your email here to retrieve it.
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
          </Container>
          <Container>
            Ready to make a new order? Onwards to our many delicious dishes
            <div>
              <Button
                text={"Select Dish"}
                clickAction={() => router.push("/SelectDish")}
              />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
