import { variables } from '../config'
const width = variables.width

export const getCordinants= (cellIndex)=>{
    return {
        X : cellIndex%width ,
        Y : Math.floor(cellIndex/width)
    }
}