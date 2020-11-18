import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

  redirect(model, transition) {
    this.transitionTo('charts.rounded');
  }

}
