
const form= document.querySelector("#form");
const aramaCubuk= document.querySelector("#aramaCubuk");

const filmApi=new FilmApi
runEventListeners();

function runEventListeners(){
    document.addEventListener("DOMContentLoaded", filmApi.getPopularFilmler());
    form.addEventListener("submit", getFilmBul);
}

function getFilmBul(e){
    const filmAdı=aramaCubuk.value.trim();
    filmApi.getFilmBul(filmAdı);
    e.preventDefault();
}