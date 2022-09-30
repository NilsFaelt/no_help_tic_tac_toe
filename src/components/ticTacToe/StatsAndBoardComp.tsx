import { useState } from "react";
import Board from "./board/Board";
import * as Styles from "./statsAndBoard.styles";

const StatsAndBoardComp = () => {
  const [playerIsCircle, setpPlayerIsCircle] = useState(true);
  const [circlePoints, setCirclePoints] = useState(0);
  const [xPoints, setXPoints] = useState(0);

  return (
    <Styles.Container>
      <Styles.Title>Tic Tac Toe</Styles.Title>
      <Styles.TurnText>{playerIsCircle ? "Circle" : "X"} Plays</Styles.TurnText>
      <Styles.BoardAndStatsDiv>
        <Styles.TurnText>
          X points <br />
          {xPoints}
        </Styles.TurnText>
        <Board
          setXPoints={setXPoints}
          setCirclePoints={setCirclePoints}
          setpPlayerIsCircle={setpPlayerIsCircle}
          playerIsCircle={playerIsCircle}
        />
        <Styles.TurnText>
          O points <br />
          {circlePoints}
        </Styles.TurnText>
      </Styles.BoardAndStatsDiv>
    </Styles.Container>
  );
};

export default StatsAndBoardComp;
