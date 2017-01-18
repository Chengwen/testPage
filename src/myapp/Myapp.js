// Load the custom app ES6 modules

import DataService from 'src/myapp/services/DataService';
import MenuList from 'src/myapp/components/list/MenuList';
import Convert from 'src/myapp/components/convert/Convert';
import Movie from 'src/myapp/components/movie/Movie';

// Define the Angular 'myapp' module

export default angular
    .module("myapp", ['ngMaterial'])
    .component(MenuList.name, MenuList.config)
    .component(Convert.name, Convert.config)
    .component(Movie.name, Movie.config)
    .service("DataService", DataService);
0