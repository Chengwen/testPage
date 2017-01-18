// Notice that we do not have a controller since this component does not
// have any specialized logic.

export default {
  name : 'menuList',
  config : {
    bindings         : {  links: '<', selected : '<', showDetails : '&onSelected' },
    templateUrl      : 'src/myapp/components/list/MenuList.html'
  }
};
