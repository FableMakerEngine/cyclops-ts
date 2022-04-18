import { utils } from 'pixi.js';
import type Scene from './Scene';

export default class SceneLoader extends utils.EventEmitter {
  private scenes: Map<string, IScene> = new Map();

  private currentScene: Scene;

  private lastScene: Scene;

    add(scene: Scene, name?: string, ) {
      const name = name || scene.key;
      if (this.scenes.has(name)) {
        throw new Error(`Scene with key ${name} already exists`);
      }
        scene.name = name;
        this.scenes.set(name, scene);
        this.emit('sceneAdd', scene);
    }

    remove(scene: string | Scene) {
      const name = typeof scene === 'string' ? scene : scene.name;
      if (this.scenes.has(name)) {
        this.scenes.delete(scene);
      }
    }

    pop() {
      const tempLastScene = this.currentScene;
        this.currentScene = this.lastScene;
        this.lastScene = tempLastScene;
        this.emit('sceneChange', this.currentScene);
    }

    change(scene: Scene) {
        this.lastScene = this.currentScene;
        this.currentScene = scene;
        this.emit('sceneChange', scene);
    }
}