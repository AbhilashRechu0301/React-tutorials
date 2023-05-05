import React from 'react';

class Movies extends React.Component{

    movie = {
        name: "RRR",
        Runtime: 177,
        releaseDate: "12 march 2022"
    }

    render(){
        return(
            <div>
            <h1>Movies Component!</h1>
            <h1>{this.movie.name} {this.movie.Runtime} {this.movie.releaseDate}</h1>
            </div>
            
            
        )
    }
}
export default Movies;