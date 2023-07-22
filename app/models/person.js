import Model from '@ember-data/model';
import {
  fragment,
  fragmentArray,
  array,
} from 'ember-data-model-fragments/attributes';

export default class PersonModel extends Model {
  @fragment('name') name;
  @fragmentArray('address') addresses;
  @array() titles;
}
