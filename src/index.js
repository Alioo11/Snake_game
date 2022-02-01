import { getCordinants} from './helpers/dimentions'
import "./main.css"
import { variables} from './config'
const WIDTH = variables.width

const board = document.querySelector('.board')

const createBoard = (width, height) => {
    board.innerHTML = Array.from(Array.from(Array(width * height).keys()), (item) => `<div id='${item}' class='cell'></div>`).join().replace(/,/g, "")
};

board.style.gridTemplateColumns = `repeat( ${WIDTH} , 25px)`

createBoard(WIDTH,30)

document.querySelectorAll('.cell').forEach((cellItem)=>{
    cellItem.addEventListener('click',(e)=>{
        console.log(getCordinants(parseInt(e.target.id)))
    })
})