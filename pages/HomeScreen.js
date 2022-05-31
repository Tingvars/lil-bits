import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import AltTopMenu from "../components/AltTopMenu";
import Button from "../components/Button";
import Container from "../components/Container";
import { getEmail } from "../storage";

const Slider = () => (
  <AwesomeSlider animation="cubeAnimation">
    <div data-src="foodimage1.jpg" />
    <div data-src="foodimage2.jpg" />
    <div data-src="foodimage3.jpg" />
  </AwesomeSlider>
);

export default function HomeScreen() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [savedUserEmail, setSavedUserEmail] = useState("");

  useEffect(() => {
    //using function to pull saved email from localstorage
    const email = getEmail();
    setSavedUserEmail(email);
  }, []);

  function updateEmail(ev) {
    //setting userEmail as what the user entered on this screen
    const input = ev.target.value;
    setUserEmail(input);
  }

  function checkExistingEmail() {
    //checking if userEmail has been entered
    if (userEmail === undefined) {
      alert("Please enter an email address");
      return;
    }

    //checking if userEmail matches saved email
    if (savedUserEmail !== userEmail) {
      alert("Email not found");
      return;
    }

    //if they match, set enteredEmail in localstorage and go to next screen
    localStorage.setItem("enteredEmail", userEmail);
    router.push("/SelectDish");
  }

  function handleSelectNewDish() {
    //if brand new dish, clearing enteredEmail and going to next screen
    localStorage.setItem("enteredEmail", "");
    router.push("/SelectDish");
  }

  return (
    <div>
      <TopMenu topMenuButton={"home"} />
      <div className="flex flex-col justify-center">
        <div className="h-80 flex flex-col items-center my-1">
          <div className="text-bits-red text-xl font-bold uppercase">
            Welcome to Lil Bits!
          </div>
          <div className="py-3 w-96">
            <Slider />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col sm:flex-row sm:justify-center lg:space-x-20">
            <Container>
              <div className="text-bits-yellow flex flex-col items-center">
                <div className="font-bold uppercase">
                  Already made an order?
                </div>
                <div>Enter your email here to retrieve it</div>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  size="30"
                  required
                  onChange={updateEmail}
                  value={userEmail}
                ></input>
              </div>
              <Button text={"Retrieve Order"} onClick={checkExistingEmail} />
            </Container>
            <Container>
              <div className="text-bits-yellow flex flex-col items-center">
                <div className="font-bold uppercase">
                  Ready to make a new order?
                </div>
                <div>Onwards to our many delicious dishes</div>
              </div>
              <div>
                <Button
                  text={"Select New Dish"}
                  onClick={handleSelectNewDish}
                />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
