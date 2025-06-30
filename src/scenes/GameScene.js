import { Scene3D, ExtendedObject3D, THREE } from 'enable3d';
import { saveScore } from '../utils/api.js';

export default class GameScene extends Scene3D {
  constructor() {
    super('GameScene');
  }

  init() {
    this.accessThirdDimension();
  }

  create() {
    this.third.camera.position.set(0, 10, 20);
    const cube = new ExtendedObject3D();
    cube.position.set(0, 0, 0);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
    const mesh = new THREE.Mesh(geometry, material);
    cube.add(mesh);
    this.third.add.existing(cube);

    const light = this.third.lights.addDirectionalLight(0xffffff, 0.8);
    light.position.set(10, 10, 10);

    this.input.on('pointerdown', async () => {
      await saveScore({ points: 1 });
    });
  }

  update() {}
}
