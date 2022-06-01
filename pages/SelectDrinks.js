import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import DrinkButton from "../components/DrinkButton";
import DrinkContainer from "../components/DrinkContainer";
import axios from "axios";
import { setDrink } from "../storage";

export default function SelectDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const router = useRouter();

  const getDrinks = async () => {
    //pull list of drinks from API
    const result = await axios("https://api.punkapi.com/v2/beers");
    setDrinks(result.data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  function MakeBox(props) {
    const drink = props.drink;
    const drinkName = drink.name;
    const drinkImg = drink.image_url;
    //empty until user has clicked, and then a button appears to confirm selection:
    let thisDrinkSelected = "";
    if (drink === selectedDrinks) {
      thisDrinkSelected = (
        <DrinkButton
          text={"Confirm selection"}
          onClick={() => router.push("/OrderScreen")}
        />
      );
    }
    return (
      <button onClick={() => selectDrink(drink)}>
        <DrinkContainer>
          <div className="flex flex-col justify-center items-center h-screen">
            <img className="h-20" src={drinkImg} alt=""></img>
            <div className="text-sm">{drinkName}</div>
            <div className="font-bold text-bits-green">{thisDrinkSelected}</div>
          </div>
        </DrinkContainer>
      </button>
    );
  }

  //sets selectedDrinks to whatever the user chooses
  function selectDrink(item) {
    const drink = item;
    setSelectedDrinks(drink);
    setDrink(drink);
  }

  return (
    <div>
      <TopMenu topMenuButton={"selectDrink"} />
      <div className="flex flex-col items-center">
        <div className="text-bits-red text-xl font-bold p-2">
          Select your drink:
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row flex-wrap">
            {/* make box for each drink on list: */}
            {drinks.map((item, index) => (
              <MakeBox key={index} drink={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
