import MovieController from './MovieController'

export default {
  name : 'movie',
  config : {
        bindings         : {  movieid: '<', moviedata: '<', year: '<', title: '<'},
        templateUrl      : 'src/myapp/components/movie/Movie.html',
        controller       : [ '$state', '$stateParams', 'DataService', MovieController ]
  }
};