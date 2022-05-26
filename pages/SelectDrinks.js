import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopMenu from "../components/TopMenu";
import Button from "../components/Button";
import axios from "axios";

export default function SelectDrinks() {
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
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
    return (
      <button onClick={() => selectDrink(drink)}>
        <div className="bg-indigo-600 w-32 h-32 ml-1 my-1">
          <div className="content-center">
            <img className="h-20" src={drinkImg} alt=""></img>
            {drinkName}
          </div>
        </div>
      </button>
    );
  }

  //sets selectedDrinks to whatever the user chooses
  function selectDrink(item) {
    const drink = item;
    setSelectedDrinks(drink);
    localStorage.setItem("selectedDrink", JSON.stringify(drink));
  }

  return (
    <div>
      <TopMenu />
      <div className="flex flex-row">
        <div>
          <div>Selected drink: {selectedDrinks.name}</div>
          <div>Here are some drinks:</div>
          <div className="flex flex-row flex-wrap">
            {drinks.map((item, index) => (
              <MakeBox key={index} drink={item} />
            ))}
          </div>
        </div>
        <div>
          <Button
            text={"To order screen"}
            clickAction={() => router.push("/OrderScreen")}
          />
        </div>
      </div>
    </div>
  );
}
