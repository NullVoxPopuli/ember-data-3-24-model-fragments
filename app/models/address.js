import Fragment from 'ember-data-model-fragments/fragment';
import { attr } from '@ember-data/model';

export default class AddressFragment extends Fragment {
  @attr('string') street;
  @attr('string') city;
  @attr('string') region;
  @attr('string') country;
}
