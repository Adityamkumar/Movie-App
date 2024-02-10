
const moviebox=document.querySelector(".movie-box");
const apikey="37a6102d575a1c5187ecc87f873508bf"
const imagepath="https://image.tmdb.org/t/p/w500"
const inputValue=document.querySelector(".search input")
const api=async(userInput)=>{
    const request=await fetch(`https://api.themoviedb.org/3/search/movie?query=${userInput}&api_key=${apikey}`)
    const response=await request.json()
    const result=response.results;
    moviebox.innerHTML=""
    result.forEach(elem=>{
        console.log(elem);
        let div=document.createElement("div");
        div.classList.add("movie-card");
        div.innerHTML=`
        <img src="${imagepath + elem.poster_path}" alt="">
        <div class="title-box">
            <div class="top-flex">
                <p>${elem.title}</p>
                <span>${elem.vote_average}</span>
            </div>
            <p>overview:${elem.overview}</p>
        `
        moviebox.appendChild(div);
    })
}
inputValue.addEventListener('keyup',()=>{
    let userInput=inputValue.value
     if(userInput!=""){
      api(userInput)
     }else if(userInput===""){
        popularMoviesData()
     }
  })

  const popularMovies=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apikey}`
  const popularMoviesData=async()=>{
      let request= await fetch(`${popularMovies}`)
      let response=await request.json();
      console.log(response)
      const result=response.results;
    moviebox.innerHTML=""
    result.forEach(elem=>{
        console.log(elem);
        let div=document.createElement("div");
        div.classList.add("movie-card");
        div.innerHTML=`
        <img src="${imagepath + elem.poster_path}" alt="">
        <div class="title-box">
            <div class="top-flex">
                <p>${elem.title}</p>
                <span>${elem.vote_average}</span>
            </div>
            <p>overview:${elem.overview}</p>
        `
        moviebox.appendChild(div);
    })
  }
  popularMoviesData()





