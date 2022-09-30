import { useEffect, useState } from "react";
import { checkIfWin } from "../../../functions/checkIfWinLogic";
import { fillTheArray } from "../../../functions/fillTheArray";
import { resetIfTie } from "../../../functions/resetIfTie";
import { Square } from "../../../types/types";
import * as Styles from "./board.styles";
interface Props {
  playerIsCircle: boolean;
  setpPlayerIsCircle: React.Dispatch<React.SetStateAction<boolean>>;
  setXPoints: React.Dispatch<React.SetStateAction<number>>;
  setCirclePoints: React.Dispatch<React.SetStateAction<number>>;
}

const Board: React.FC<Props> = ({
  playerIsCircle,
  setpPlayerIsCircle,
  setXPoints,
  setCirclePoints,
}) => {
  const [circelWin, setCircelWin] = useState<boolean>(false);
  const [xWin, setXWin] = useState<boolean>(false);
  const [playingState, setplayingState] = useState<Square[] | null>(null);
  const [circleIndexes, setCircleIndexes] = useState<number[]>([]);
  const [xIndexes, setXIndexes] = useState<number[]>([]);

  const square = {
    circle: null,
    squareIndex: 0,
    backGround: "teal",
  };

  const arrayOfSquares = new Array(9).fill(square);

  const handleClick = (square: Square) => {
    if (square.circle === null && playerIsCircle === true) {
      setplayingState((prev: any) =>
        prev?.map((item: any) => {
          if (square.squareIndex === item.squareIndex) {
            setCircleIndexes([...circleIndexes, square.squareIndex]);
            return { ...item, circle: true, backGround: "black" };
          }
          return item;
        })
      );
      setpPlayerIsCircle(!playerIsCircle);
    }
    if (square.circle === null && playerIsCircle === false) {
      setplayingState((prev: any) =>
        prev?.map((item: any) => {
          if (square.squareIndex === item.squareIndex) {
            setXIndexes([...xIndexes, square.squareIndex]);
            return { ...item, circle: false, backGround: "black" };
          }
          return item;
        })
      );
      setpPlayerIsCircle(!playerIsCircle);
    }
  };

  useEffect(() => {
    checkIfWin(
      circleIndexes,
      xIndexes,
      setCircelWin,
      circelWin,
      setXWin,
      xWin,
      setCirclePoints,
      setXPoints
    );
    let check = resetIfTie(
      circleIndexes,
      setCircleIndexes,
      xIndexes,
      setXIndexes
    );
    if (check) {
      setplayingState(fillTheArray(arrayOfSquares));
    }
  }, [playingState]);

  useEffect(() => {
    setplayingState(fillTheArray(arrayOfSquares));
    setCircleIndexes([]);
    setXIndexes([]);
  }, [xWin, circelWin]);

  return (
    <Styles.Board>
      {playingState?.map((square) => (
        <Styles.Square
          key={square.squareIndex}
          onClick={() => handleClick(square)}
          color={`${square.backGround}`}
        >
          {square.circle === null ? null : square.circle ? "O" : "X"}
        </Styles.Square>
      ))}
    </Styles.Board>
  );
};

export default Board;
