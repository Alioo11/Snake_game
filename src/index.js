//import {hello} from './helpers/module'
import "./main.css"


const board = document.querySelector('.board')

const createBoard = (width, height) => {
    board.innerHTML = Array.from(Array.from(Array(width * height).keys()), (item) => `<div id='${item}' class='cell'></div>`).join().replace(/,/g, "")
};

createBoard(39,30)

console.log(board)
