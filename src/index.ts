import Game from './Game';
import SceneBoot from './scenes/SceneBoot';

window.onload = () => {
  const game = Game.getInstance();
  game.sceneLoader.change(new SceneBoot());
};
