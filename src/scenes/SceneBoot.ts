import { LoaderResource, Sprite, utils } from 'pixi.js';
import AssetLoader from '../core/AssetLoader';
import Scene from './Scene';

export default class SceneBoot extends Scene {
  logo: Sprite;

  override preload() {
    super.preload();
    AssetLoader.add('shroom.png', 'pictures/');
  }

  override create(resources: utils.Dict<LoaderResource>) {
    super.create(resources);
    this.logo = new Sprite(resources.shroom.texture);
    this.logo.anchor.set(0.5);
    this.logo.x = this.game.width / 2;
    this.logo.y = this.game.height / 2;
    this.addChild(this.logo);
  }

  override update(dt) {
    this.logo.rotation += 0.01 * dt;
  }

  resize(width: number, height: number): void {
    this.logo.x = width / 2;
    this.logo.y = height / 2;
  }
}
