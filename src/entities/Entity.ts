import {
  Container, Point, Rectangle, Sprite,
} from 'pixi.js';
import { DataEntity, SpriteShape } from '../interfaces/database';
import AssetLoader from '../core/AssetLoader';

/**
 * the super class that define how a entity is shaped
 * @extends Container
 */
export default class Entity extends Container {
  public id: string;

  public sprite: Sprite;

  public collision: Rectangle;

  constructor(data: DataEntity, coords: Point) {
    super();
    this.id = data.id;
    this.createSprite(data.sprite);

    this.x = coords.x;
    this.y = coords.y;
  }

  protected createSprite(data: SpriteShape) {
    const { texture } = AssetLoader.get(data.filename);
    this.sprite = new Sprite(texture);
    this.addChild(this.sprite);
  }

  public update() {
    for (const child of this.children as Entity[]) {
      if (child.update) {
        child.update();
      }
    }
  }
}
