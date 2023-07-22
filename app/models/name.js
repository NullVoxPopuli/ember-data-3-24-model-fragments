import Fragment from 'ember-data-model-fragments/fragment';
import { attr } from '@ember-data/model';

export default class NameFragment extends Fragment {
  @attr('string') first;
  @attr('string') last;
}
