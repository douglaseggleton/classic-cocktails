import { Measure } from './measure';

export interface Recipe {
  id: string;
  name: string;
  ingredients: Measure[]
}