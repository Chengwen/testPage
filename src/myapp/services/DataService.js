/**
 * DataService
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function DataService($q, $http) {
  var links = [
    {
      name: 'Convert',
      avatar: 'stopwatch',
      link: 'convert'
    },
    {
      name: 'Movie',
      avatar: 'video-player',
      link: "movie"
    }
  ];
  var timezoneList = null;
    return {
        loadLinks: () => {
            return $q.when(links);
        },
        loadAllTimeZoneList: () => {
            return $http.get("data/timezoneList.json").then(data=> {
                return timezoneList = data.data;
            });
        },
        getMovieByTitle: (title, year="") => {
            return $http.get("http://www.omdbapi.com/?t="+encodeURIComponent(title)+"&y="+encodeURIComponent(year)+"&plot=full&tomatoes=true&r=json")
                .then(data => {
                    return data.data;
            });
        },
        getMovieByID: (imdbId) => {
            return $http.get("http://www.omdbapi.com/?i="+encodeURIComponent(imdbId)+"&plot=full&tomatoes=true&r=json")
                .then(data=> {
                return data.data;
            });
        }
    };
}

export default ['$q', '$http',DataService];

