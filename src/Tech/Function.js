/* export default function LiShowSldie() { */
/* const BuildingLi = document.querySelector(".BuildingLi");
    BuildingLi.classList.toggle("activeLi");
    const InteriorЕ = document.querySelector(".InteriorЕ");
    console.log(InteriorЕ);
    const AllLi = document.querySelector(".AllLi");
    if (InteriorЕ.classList.contains("test")) {
        console.log("Первый слайд имеет класс тест");
    } else {
        console.log("Первый слайд не имеет класс тест");
    } */
/* document.addEventListener("click", function (e) {
        console.log(e.target);
        if (e.target.classList.contains("AllLi")) {
            console.log("Да");
        } else {
            console.log("Нет");
        }
    }); */
/* const array = [AllLi, BuildingLi, InteriorЕ]; */
/* } */

export default function selectDate() {
    /* const BuildingLi = document.querySelector(".BuildingLi");
    const InteriorLi = document.querySelector(".InteriorLi"); */
    console.log("Да");
    const AllLi = document.querySelector(".AllLi");
    if (AllLi.classList.contains("active")) {
        AllLi.classList.remove("active");
        console.log("Да");
    } else {
        AllLi.classList.add("active");
    }
}
