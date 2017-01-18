import moment from 'moment-timezone';
class ConvertController  {

  /**
   * Constructor
   *
   */
  constructor($mdToast, $mdDialog) {
      this.$mdToast = $mdToast;
      this.$mdDialog = $mdDialog;
      this.date= new Date();
      this.hour = 0;
      this.min = 0;
      this.sec = 0;
      this.timezone = '';
  }

    p(s) {
        return s < 10 ? '0' + s: s;
    }

    convert() {
        if (!this.timezone) {
            this.$mdToast.show(
                this.$mdToast.simple()
                    .textContent('Please select a timezone')
                    .position('bottom right')
                    .hideDelay(3000)
            );
        }
        else {
            var date=moment(this.date).format("YYYY-MM-DD") + "T" + this.p(this.hour) + ":" + this.p(this.min) + ":" + this.p(this.sec) + this.timezone.offset;
            this.convertedDate = moment(date);
            //Check the date is valid
            if (!this.convertedDate.isValid()) {
                return this.$mdToast.show(
                    this.$mdToast.simple()
                        .textContent('Invalid date!')
                        .position('bottom right')
                        .hideDelay(3000)
                );
            }
            this.$mdDialog.show({
                controller: DialogController,
                controllerAs: 'ctrl',
                templateUrl: 'src/myapp/components/convert/Dialog.html',
                clickOutsideToClose: true,
                locals: {
                    timezone: this.timezone,
                    convertedDate: this.convertedDate
                }
            });

            function DialogController($scope, $mdDialog, convertedDate, timezone) {
                this.convertedDate = convertedDate;
                this.timezone = timezone;
                $scope.hide = function () {
                    $mdDialog.hide();
                };

                this.timestamp = convertedDate.unix();
                this.milliseconds = convertedDate.valueOf();
                this.localDate = convertedDate.toString();
                this.utcDate = convertedDate.clone().utcOffset("+00:00").toString();
                this.selectedDate = convertedDate.utcOffset(timezone.offset).toString();
            }
        }
    }
}
export default ConvertController;

