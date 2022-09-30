import { Square } from '../types/types'
export function fillTheArray(array: Square[]): Square[] | null  {
    let newArray = null
    for (let i = 0; i < array.length; i++) {
      newArray = array.map((square) => {
        return { ...square, squareIndex: i += 1 }
      })

    }
    return newArray
   
  }