import './style_menu.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./moon.jpg');

const geometry = new THREE.SphereGeometry(); 
const material = new THREE.MeshStandardMaterial({ map: texture }); 
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Aumenta la intensidad de la luz ambiente
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Aumenta la intensidad de la luz direccional
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.z += 0.02;
    sphere.rotation.x += 0.02;
    renderer.render(scene, camera);
}
animate();