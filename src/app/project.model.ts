import { Developer } from './developer.model';
import { Contributor } from './contributor.model';

export class Project {
  constructor (
    public name: string,
    public description: string,
    public owner: Developer,
    public fundraisingGoal: number,
    public supporters: Contributor[],
    public projectlength: number
  ){ }
}
