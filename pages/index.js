import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeScreen from "./HomeScreen";
import TopMenu from "../components/TopMenu";
import SelectDish from "./SelectDish";
import SelectDrinks from "./SelectDrinks";
import OrderScreen from "./OrderScreen";
import ReceiptScreen from "./ReceiptScreen";
import { useRouter } from "next/router";
import ActiveLink from "../components/ActiveLink";

export default function Home() {
  return (
    <div>
      <HomeScreen />;
    </div>
  );
}
