


export function checkIfWin(arrayOfWhite:number[],arrayOfBlack:number[], setCircelWin:React.Dispatch<React.SetStateAction<boolean>>, circelWin:boolean, setXWin:React.Dispatch<React.SetStateAction<boolean>>,xWin:boolean,setCirclePoints: React.Dispatch<React.SetStateAction<number>>,  setXPoints: React.Dispatch<React.SetStateAction<number>> ){


    let whitearray1 = arrayOfWhite.filter((i)=> i ===1 || i === 2|| i === 3 )
    let whitearray2 = arrayOfWhite.filter((i)=> i ===4 || i === 5|| i ===6 )
    let whitearray3 = arrayOfWhite.filter((i)=> i ===6 || i === 7|| i ===9 )
   
    let whitearray4 = arrayOfWhite.filter((i)=> i ===1 || i === 4|| i ===7 )
    let whitearray5 = arrayOfWhite.filter((i)=> i ===2 || i === 5|| i ===8 )
    let whitearray6 = arrayOfWhite.filter((i)=> i ===3 || i === 6|| i ===9 )
   
    let whitearray7 = arrayOfWhite.filter((i)=> i === 1 || i === 5|| i === 9 )
    let whitearray8 = arrayOfWhite.filter((i)=> i === 3 || i === 5|| i === 7)
   
   
   if(whitearray1.length === 3 || whitearray2.length === 3 || whitearray3.length === 3|| whitearray4.length === 3 || whitearray5.length === 3 || whitearray6.length === 3 || whitearray7.length === 3 || whitearray8.length === 3){
       setCirclePoints((prev)=>prev +  1)
       setCircelWin(!circelWin)
       console.log('win O')
     whitearray1 = []
     whitearray2 = []
     whitearray3 = []
   
     whitearray4 = []
     whitearray5 = []
     whitearray6 = []
   
     whitearray7 = [] 
     whitearray8 = []
      
   }
   
   let blackarray1 = arrayOfBlack.filter((i)=> i ===1 || i === 2|| i === 3 )
   let blackarray2 = arrayOfBlack.filter((i)=> i ===4 || i === 5|| i ===6 )
   let blackarray3 = arrayOfBlack.filter((i)=> i ===6 || i === 7|| i ===9 )
   
   let blackarray4 = arrayOfBlack.filter((i)=> i ===1 || i === 4|| i ===7 )
   let blackarray5 = arrayOfBlack.filter((i)=> i ===2 || i === 5|| i ===8 )
   let blackarray6 = arrayOfBlack.filter((i)=> i ===3 || i === 6|| i ===9 )
   
   let blackarray7 = arrayOfBlack.filter((i)=> i ===1 || i === 5|| i ===9 )
   let blackarray8 = arrayOfBlack.filter((i)=> i ===3 || i === 5|| i ===7 )
   
   
   if(blackarray1.length === 3 || blackarray2.length === 3 || blackarray3.length === 3|| blackarray4.length === 3 || blackarray5.length === 3 || blackarray6.length === 3 || blackarray7.length === 3 || blackarray8.length === 3){
       setXPoints((prev)=>prev +  1)
       setXWin(!xWin)
       
       console.log('win X')
        blackarray1 = []
        blackarray2 = []
        blackarray3 = []
      
        blackarray4 = []
        blackarray5 = []
        blackarray6 = []
      
        blackarray7 = [] 
        blackarray8 = []
     
     
   }
   else return
   
   }