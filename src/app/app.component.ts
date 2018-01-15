// "../node_modules/tween.js/src/Tween.js",
// "../node_modules/three/build/three.js",
// "../node_modules/stats.js/build/stats.min.js",
// "../vendor/VRMLLoader.js",
// "../vendor/OrbitControls.js"

import { Component, ViewChild, HostListener, ElementRef, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  @ViewChild('rendererBox') rendererBox: ElementRef;
  public title: string = 'app';
  public renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
  public scene: THREE.Scene = null;
  public camera: THREE.PerspectiveCamera = null;
  public mesh: THREE.Mesh = null;
  public meshPicture: THREE.Mesh = null;
  public meshPictureSecond: THREE.Mesh = null;
  // public newParams = [300, 300, 300]
  public cameraParam = 1000;

  constructor() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;
    this.scene.add( new THREE.AmbientLight( 0x222222 ) );
		const light = new THREE.PointLight( 0xffffff );
		light.position.copy( this.camera.position );
		this.scene.add( light );
    // this.addFigure();

  }

  public ngOnInit() {}

  public ngOnDestroy() {}

  public ngAfterViewInit() {
    this.addShapeLeft();
    this.addNewFigure();
    this.addBox();
  }

  private animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.meshPicture.rotation.y += 0.01;
    this.meshPictureSecond.rotation.y += 0.01;
    switch (Math.floor(Math.random() * (10 - 0)) + 0) {
      case 4:
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam + 1
        this.camera.position.z = this.cameraParam;
      break;
      case 7:
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
        this.cameraParam = this.cameraParam - 1
        this.camera.position.z = this.cameraParam;
      break;
      default:;
    }
    if (this.cameraParam < 50) {
      this.cameraParam = 100
      this.camera.position.z = this.cameraParam;
    }
    this.renderer.render(this.scene, this.camera);
  }

  private addBox() {
    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(500, 500, 500);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererBox.nativeElement.appendChild(this.renderer.domElement);
    console.log(this.scene)
    console.log(this.mesh)
    this.animate()
  }

  private addShapeLeft() {
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const closedSpline: any = new THREE.CatmullRomCurve3( [
      new THREE.Vector3(-100, 150, -60), // z = 60
      new THREE.Vector3(-80, 175, -60),
      new THREE.Vector3(-65, 200, -60),
      new THREE.Vector3(-30, 175, -60),
      new THREE.Vector3(-10, 150, -60),

      new THREE.Vector3(0, 100, -60),
      new THREE.Vector3(-10, 75, -60),
      new THREE.Vector3(-35, 50, -60),
      new THREE.Vector3(-50, 0, -60),
      new THREE.Vector3(-70, -25, -60),
      new THREE.Vector3(-85, -50, -60),
      new THREE.Vector3(-80, -75, -60),
			new THREE.Vector3(-75, -100, -60),
      new THREE.Vector3(-70, -125, -60),
      new THREE.Vector3(-65, -150, -60),
      new THREE.Vector3(-50, -160, -60),
      new THREE.Vector3(-45, -170, -60),
      new THREE.Vector3(-30, -180, -60),
			new THREE.Vector3(0, -200, -60),
			new THREE.Vector3(20, -150, -60),
			new THREE.Vector3(30, -125, -60),
      new THREE.Vector3(50, -100, -60),
			new THREE.Vector3(60, -75, -60)
		] )
    closedSpline.curveType = 'catmullrom';
		closedSpline.closed = false;

    const extrudeSettings = {
			steps: 100,
			bevelEnabled: false,
			extrudePath: closedSpline
		};

    const pts = []
    const count = 100; // к-во граней
		for ( let i = 0; i < count; i ++ ) {
			let l = 30; // толщина линии
			let a = 2 * i / count * Math.PI;
			pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );
		}

    const shape = new THREE.Shape( pts );
		const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
		const material = new THREE.MeshLambertMaterial( { color: 0x00600f, wireframe: false } );
    this.meshPictureSecond = new THREE.Mesh(geometry, material)
    this.scene.add(this.meshPictureSecond);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  private addNewFigure() {
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    const closedSpline: any = new THREE.CatmullRomCurve3( [
      new THREE.Vector3(100, 150, 60),
      new THREE.Vector3(80, 175, 60),
      new THREE.Vector3(65, 200, 60),
      new THREE.Vector3(30, 175, 60),
      new THREE.Vector3(10, 150, 60),

      new THREE.Vector3(0, 100, 60),
      new THREE.Vector3(10, 75, 60),
      new THREE.Vector3(35, 50, 60),
      new THREE.Vector3(50, 0, 60),
      new THREE.Vector3(70, -25, 60),
      new THREE.Vector3(85, -50, 60),
      new THREE.Vector3(80, -75, 60),
			new THREE.Vector3(75, -100, 60),
      new THREE.Vector3(70, -125, 60),
      new THREE.Vector3(65, -150, 60),
      new THREE.Vector3(50, -160, 60),
      new THREE.Vector3(45, -170, 60),
      new THREE.Vector3(30, -180, 60),
			new THREE.Vector3(0, -200, 60),
			new THREE.Vector3(-20, -150, 60),
			new THREE.Vector3(-30, -125, 60),
      new THREE.Vector3(-50, -100, 60),
			new THREE.Vector3(-60, -75, 60)
		] )
    closedSpline.curveType = 'catmullrom';
		closedSpline.closed = false;

    const extrudeSettings = {
			steps: 100,
			bevelEnabled: false,
			extrudePath: closedSpline
		};

    const pts = []
    const count = 8; // к-во граней
		for ( let i = 0; i < count; i ++ ) {
			let l = 30; // толщина линии
			let a = 2 * i / count * Math.PI;
			pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );
		}

    const shape = new THREE.Shape( pts );
		const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
		const material = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );
    this.meshPicture = new THREE.Mesh(geometry, material)
    this.scene.add(this.meshPicture);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  @HostListener('window:resize', ['$event'])
  private onWindowResize(event) {
      this.renderer.setSize(event.target.innerWidth, event.target.innerHeight)
  }
}
