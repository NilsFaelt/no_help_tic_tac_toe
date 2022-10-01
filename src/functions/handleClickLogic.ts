import {Square} from '../types/types'
type HandleClickLoqgic= () => number


export function  handleClickLoqgic (square:Square,  playerIsCircle: boolean, setplayingState:React.Dispatch<React.SetStateAction<Square[] | null>>, setCircleIndexes: React.Dispatch<React.SetStateAction<number[]>>,circleIndexes:number[],   setpPlayerIsCircle: React.Dispatch<React.SetStateAction<boolean>>, setXIndexes: React.Dispatch<React.SetStateAction<number[]>>, xIndexes:number[]){

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
}


