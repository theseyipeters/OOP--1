
//Implementing the MOVIE RENTING API

function Movies (){
    //defining our object constructor
    this.movieShelf = [];
    this.unavailableMovies = []; 
    this.currentTime= new Date();
    
}

Movies.prototype = {
    //this method, when called prints out the list of movies in the movieshelf.
    viewMovies: function(){
        console.log('My movieList:')
        for(var x in this.movieShelf){
            console.log(x, this.movieShelf[x]);
        }
    },
    
    //this method when called, adds the new movie with the specified title to the movieshelf.
    movieShelf: function(title){
        this.movieShelf.push(title);
    },

    //this method, when called rents out the movie with the specified title
    rentmovie: function(title){
        let movieShelf = this.movieShelf;
        let unavailableMovies = this.unavailableMovies;
        function check (){
            var validate = false;
            if((movieShelf).includes(title)){
                validate = true;
            }
            return validate;
        }
        
        if(check()){
            unavailableMovies.push(title);
    
            for(var i in movieShelf){
                const index = movieShelf.indexOf(title)
                if(index > -1){
                  movieShelf.splice(index, 1);
                }
            }
            console.log('');
            console.log('The movie with title ' + title.toUpperCase() + ' has been lent out, on ' + this.currentTime.toString());
        
        } else{
            console.log('Sorry, we dont have a movie with the requested title');
        }
        
        console.log('-----------------------------------------------')
        console.log('The remaining movies in the Store are:');
    
        for(var x in movieShelf){
            console.log(x, movieShelf[x]);
        }
        console.log('   ');
        console.log('the unavailable movies are: ');
        for(var x in unavailableMovies){
            console.log(x, unavailableMovies[x]);
        }
        
    },
    
    //this method when called returns the movie with the specified title to the movieshelf
    returnmovie: function(title){
        let movieShelf = this.movieShelf;
        let unavailableMovies = this.unavailableMovies;
        function check (){
            var validate = false;
            if((unavailableMovies).includes(title)){
                validate = true;
            }
            return validate;
        }
        
        
        if(check()){
            movieShelf.push(title);
    
            for(var i in unavailableMovies){
                const index = unavailableMovies.indexOf(title)
                if(index > -1){
                  unavailableMovies.splice(index, 1);
                }
            }
            console.log('  ')
            console.log('The movie with title ' + title.toUpperCase() + ' has been returned to the library on ' + this.currentTime.toString());
        
        } else{
            console.log('Sorry, we have no record of the movie with the specified title in our unavailable movies list.');
        }
        console.log('-----------------------------------------------')
        console.log('The remaining movies in the Store are:');
    
        for(var x in movieShelf){
            console.log(x, movieShelf[x]);
        }
        console.log('  ');
        console.log('the unavailable movies are: ');
        for(var x of unavailableMovies){
            console.log(x, unavailableMovies[x]);
        }
        
    }
    
}

//creating a new instance of our object constructor
var MyFilms = new Movies();

//adding new movies to the movieshelf
MyFilms.movieShelf('The Alchemist');
MyFilms.movieShelf('Memories of Midnight');
MyFilms.movieShelf('White Flower');
MyFilms.movieShelf('Master of the Game');
MyFilms.movieShelf('Valerian Empire');

//viewing the available movies in the movieshelf
var msg = prompt('Hi there, what is your name?', '');
console.log('');
console.log(msg, ', Here are the available movies in the library, you can borrow some to keep yourself entertained.');
console.log('');
console.log(MyFilms.viewMovies());
console.log('----------------------------------------');

//renting movies from the movieshelf

MyFilms.rentmovie('The Alchemist');
MyFilms.rentmovie('White Flower');

//Returning the movies to the movieshelf

MyFilms.returnmovie('The Alchemist');