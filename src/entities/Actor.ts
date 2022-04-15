import { Point } from 'pixi.js';
import Entity, { EntityDefaultShape } from './Entity';

export default class Actor extends Entity {
  protected displayName: string;

  protected exp: number;

  constructor(data:EntityDefaultShape, coords: Point) {
    super(data, coords);
    this.displayName = '';
    this.exp = 0;
  }
}
