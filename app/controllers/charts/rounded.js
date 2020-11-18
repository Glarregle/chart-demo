import { computed } from "@ember/object";
import Controller from '@ember/controller';

export default class ChartsRoundedController extends Controller {

  doughnut = {
    options: {
      tooltips: {
        callbacks: {
          afterLabel: function() {
            return '%'
          }
        }
      }
    },
    data: {
      labels: ['Direct', 'Organic', 'Referral'],
      datasets: [{
        data: [60, 25, 15],
        backgroundColor: ['#2C7BE5', '#A6C5F7', '#D2DDEC']
      }]
    }
  };

  pie = {
    data: {
      labels: ["Red", "Green", "Yellow"],
      datasets: [
        {
          data: [ 300, 50, 100 ],
          backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
          hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
        }
      ]
    }
  }


}
