class FilmApi{
    constructor(){
        this.apikey="9c0d9d4ced806e00db36fbb497649561";
        this.baseFilmKapakURL="https://image.tmdb.org/t/p/w1280/";
        this.popularURL=`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=tr-TR&sort_by=popularity.desc&include_adult=false&include_video=false`;
        this.searchURL=`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=`;
        this.filmler=document.querySelector(".filmler");
    }

    async getPopularFilmler(){
        const response =await fetch(this.popularURL);
        const filmler= await response.json();
        this.displayInfo(filmler);
    }

    async getFilmBul(filmAdı){
       const response=await fetch(this.searchURL+filmAdı);
        const filmler= await response.json();
        this.displayInfo(filmler);
    }

    displayInfo(filmler){
        this.filmler.innerHTML="";

        filmler.results.forEach(film =>{
            this.filmler.innerHTML+= ` 

               <div class="film">
                 <img class="filmKapak" width="230" height="345" src="${this.baseFilmKapakURL}${film.poster_path}" alt="">
                 <div class="bilgi">
                    <h4 class="filmAdı">${film.title}</h4>
                    <h5 class="puanı">${film.vote_average}</h5>
                 </div>
               </div> 

            `;
            console.log(film)
        
        })
        
    }
}