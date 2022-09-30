


export function resetIfTie(circleIndexes:number[],setCircleIndexes:React.Dispatch<React.SetStateAction<number[]>>,xIndexes:number[], setXIndexes:React.Dispatch<React.SetStateAction<number[]>>):boolean{


if(xIndexes.length + circleIndexes.length === 9){
    setXIndexes([])
    setCircleIndexes([])
    return true
}
return false

}

