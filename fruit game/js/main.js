"use strict"

const gameZone = document.querySelector(".game-zone");
const imgArray = ["image/apple.jpg", "image/armud.jpg", "image/mandarin.jpg", "image/alca.jpg", "image/banana.jfif", "image/qarpiz.jfif", "image/nar.jfif", "image/saftali.jpg"];
const dragArea = document.getElementsByClassName("drag-area")[0];
const trashHolder = document.querySelector('.trash-holder');
const dropArea = document.getElementsByClassName("drop-area")[0];
const startButton = document.querySelector(".my-btn");
const endButton = document.querySelector(".my-btn-2");
const socreBoard = document.getElementById('score');

let draggedElement;
let score = 1;  

startButton.onclick = function () {
   let animate =  setInterval(() => {


        const imgHolder = document.createElement('div');





        imgHolder.classList.add("fruits");

        let elem = imgHolder;
        let pos = 0;
        let id = setInterval(frame, 8);
        function frame() {
            if (pos == 450 ) {
                clearInterval(id);
                elem.style.display = "none"
            } else {
                pos++;
                elem.style.top = pos + 'px';
            };
        };


        imgHolder.style.left = Math.round(Math.random() * 90) + "%";


        const randomINdex = GenerateRandomImage(0, imgArray.length - 1);
        const image = imgArray[randomINdex];

        const img = document.createElement('img');
        img.setAttribute("src", image);
        img.classList.add('images');

        imgHolder.appendChild(img);
        gameZone.appendChild(imgHolder);



        imgHolder.setAttribute("draggable", true);

        imgHolder.ondragstart = function () {
            draggedElement = this;

        }


   



    }, 800);



   
    endButton.onclick = function () {
        clearInterval(animate);
        socreBoard.innerText = "score :" + (score - 1);
 }
 



}





trashHolder.ondragover = function (e) {
    e.preventDefault();
}
trashHolder.ondrop = function () {
    this.appendChild(draggedElement);
    draggedElement.style.display = "none"
    socreBoard.innerText = "your score" + " " + score;
   
    score ++;

}

function GenerateRandomImage(min, max) {
    return Math.round(min + Math.random() * (max - min));
}



