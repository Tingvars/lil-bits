import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import AltTopMenu from "../components/AltTopMenu";
import Button from "../components/Button";
import DrinkButton from "../components/DrinkButton";
import DrinkContainer from "../components/DrinkContainer";
import axios from "axios";

export default function SelectDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [drinkSelected, setDrinkSelected] = useState(false);
  const router = useRouter();

  const getDrinks = async () => {
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
    let thisDrinkSelected = "";
    if (drink === selectedDrinks) {
      thisDrinkSelected = (
        <DrinkButton text={"Confirm selection"} onClick={onToOrderScreen} />
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
    localStorage.setItem("selectedDrink", JSON.stringify(drink));
    setDrinkSelected(true);
  }

  function onToOrderScreen() {
    if (drinkSelected) {
      router.push("/OrderScreen");
    } else {
      alert("Please choose a drink");
    }
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
            {drinks.map((item, index) => (
              <MakeBox key={index} drink={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
