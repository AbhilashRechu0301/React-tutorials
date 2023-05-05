function Movies(props){

    const movies = [{
        name: "movie1",
        runTime: "120min"
      },
      {
        name: "movie2",
        runTime: "130min"
      },
      {
        name: "movie3",
        runTime: "140min"
      }]

      props.onSetMovies(movies);
    return(
       <div>
    <h1>movies component</h1>
       
    </div>
    )
}
export default Movies;