import { useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";
export default function Score() {
  const { foundCards, errors } = useContext(GameContext);
  return (
    <h1>
      Aciertos: {foundCards} Errores: {errors}
    </h1>
  );
}
