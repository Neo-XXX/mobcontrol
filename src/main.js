import { ExtendedObject3D, Scene3D, THREE } from 'enable3d';
import Phaser from 'phaser';
import GameScene from './scenes/GameScene.js';

const config = {
  type: Phaser.WEBGL,
  parent: null,
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: window.innerWidth,
    height: window.innerHeight
  },
  physics: {
    default: 'arcade'
  },
  scene: [GameScene]
};

new Phaser.Game(config);
