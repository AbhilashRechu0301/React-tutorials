function Movies(props){

    return(
       <div>
    <h1>movies component</h1>
       {props.MoviesList[0].name} &nbsp;&nbsp;&nbsp;&nbsp;
       {props.MoviesList[0].runTime}<br></br><br></br>
       {props.MoviesList[1].name} &nbsp;&nbsp;&nbsp;&nbsp;
       {props.MoviesList[1].runTime}<br></br><br></br>
       {props.MoviesList[2].name} &nbsp;&nbsp;&nbsp;&nbsp;
       {props.MoviesList[2].runTime}<br></br><br></br>
    
    </div>
    )
}
export default Movies;