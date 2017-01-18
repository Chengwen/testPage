class MovieController  {

  /**
   * Constructor
   */
  constructor($state, $stateParams, DataService) {
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.DataService = DataService;

      // get the data from API when open this URL directly
      if(this.movieid && !this.moviedata){
          this.DataService
              .getMovieByID(this.movieid)
              .then(data => {
                  this.moviedata = data;
              });
      }
  }

    search() {
        this.DataService
            .getMovieByTitle(this.title, this.year)
            .then(data => {
                //pass data between states
                this.$state.go('movieDetail', {movieid: data.imdbID, moviedata: data});
            });
    }
}
export default MovieController;

