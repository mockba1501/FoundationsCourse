const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector(".btn1")
const colorPanel = document.querySelector("#colorPanel")
const body = document.querySelector("body")
const colorCode = document.querySelector("#colorCode")

btn.addEventListener('click', ChangeColor)

function ChangeColor(){
    console.log("Hay you clicked me")
    let index = Math.floor(colors.length * Math.random())
    console.log(index, colors[index])
    colorPanel.style.backgroundColor = colors[index]
    colorCode.innerHTML = colors[index];
}


//Function 2 generate random RGB values
//similar to the following: rgba(133,122,200) each color code is between 0 and 255

//Function 3 generate random Hex color values
//similar to the following: #f15025 each color digit is between 0 and 255

