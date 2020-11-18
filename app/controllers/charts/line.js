import Controller from '@ember/controller';

export default class ChartsLineController extends Controller {

  line = {
    options: {
      scales: {
        yAxes: [{
          ticks: {
            callback: function(value) {
              return '$' + value + 'k';
            }
          }
        }]
      }
    },
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Earned',
        data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40]
      }]
    }
  }
}
