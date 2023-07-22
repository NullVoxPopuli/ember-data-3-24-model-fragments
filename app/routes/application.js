import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import { setup } from '../msw/mocks/browser';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    await setup();
    let results = await this.store.findAll('person');

    console.log({ results });
    return results;
  }
}
