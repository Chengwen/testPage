/**
 * Main App Controller
 * @param DataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(DataService, $mdSidenav, $state) {
    var self = this;
    this.selected = null;
    this.links = [];
    this.timezonelist = [];
    this.timeOffset = 0;
    this.selectLink = selectLink;
    this.toggleList = toggleList;

    // Load all registered myapp

    DataService
        .loadLinks()
        .then(links => {
            this.links = [].concat(links);
            this.selected = links[0];
        });

    DataService
        .loadAllTimeZoneList()
        .then(data=> {
            this.timezonelist = [].concat(data);
        });


    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectLink(link) {
        $state.go(link.link);
    }
}

export default ['DataService', '$mdSidenav','$state', AppController];
