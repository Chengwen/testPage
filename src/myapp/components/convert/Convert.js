import ConvertController from './ConvertController'

export default {
  name : 'convert',
  config : {
    bindings         : {  timezonelist: '<' },
    templateUrl      : 'src/myapp/components/convert/Convert.html',
    controller       : [ '$mdToast', '$mdDialog', ConvertController ]
  }
};