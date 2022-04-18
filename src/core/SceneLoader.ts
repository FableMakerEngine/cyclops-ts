import { utils } from 'pixi.js';
import type Scene from './Scene';

export default class SceneLoader extends utils.EventEmitter {
  private scenes: Map<string, Scene> = new Map();

  private currentScene: Scene;

  private lastScene: Scene;

  public has(scene: string | Scene) {
    const name = typeof scene === 'string' ? scene : scene.name;
    return this.scenes.has(name);
  }

  public get(name: string) {
    return this.scenes.get(name);
  }

  public add(scene: Scene, name?: string) {
    const key = name || scene.key;
    if (this.scenes.has(key)) {
      throw new Error(`Scene with key ${key} already exists`);
    }
    scene.setName(key);
    this.scenes.set(key, scene);
    this.emit('sceneAdd', scene);
  }

  public remove(scene: string | Scene) {
    const name = typeof scene === 'string' ? scene : scene.name;
    if (this.scenes.has(name)) {
      this.scenes.delete(scene);
    }
  }

  public pop() {
    const tempLastScene = this.currentScene;
    this.currentScene = this.lastScene;
    this.lastScene = tempLastScene;
    this.emit('sceneChange', this.currentScene);
  }

  public change(scene: Scene) {
    this.lastScene = this.currentScene;
    this.currentScene = scene;
    this.emit('sceneChange', scene);
  }
}
