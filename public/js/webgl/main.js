var container, scene, camera, renderer, controls, material, spotLight, group;
var meshes = [];

function addMesh(text,y) {
  var geometry = new THREE.TextGeometry( text, {
    font: 'DejaVu Sans',
    size: 45,
    height:20
  });

  geometry.computeBoundingBox();
  var width = geometry.boundingBox.max.x - geometry.boundingBox.min.x;

  var mesh = new THREE.Mesh( geometry, material );
  mesh.position.set( -0.5 * width, y, 0 );
  return mesh;
  // scene.add(mesh);
  // meshes.push(mesh);
}

function moveMeshes(amountY){
  for (var i = 0; i < meshes.length; i++) {
    var element = meshes[i];
    element.position.y += amountY;
    if (element.position.y > 1000) {
      scene.remove(element);
      meshes.splice(i,1);
      i--;
    }
  }
}

var text;

$.ajax({
   cache: false,
   url: window.location.origin +'/api/storyline',
   type: 'GET',
   success: function (data) {
     text = data;
     init();
     animate();
   }
});
function init() {
  scene = new THREE.Scene();

  var vWidth = $(window).width();
  var vHeight = $(window).height();

  var ar = vWidth / vHeight;

  camera = new THREE.PerspectiveCamera( 65, ar, 0.1, 10000);
  scene.add(camera);
  camera.position.set(0,-700,700);
  camera.lookAt(scene.position);
  renderer = new THREE.WebGLRenderer( {antialias:true} );
  renderer.setSize(vWidth, vHeight);
  window.addEventListener('resize',function(){
    var nW = $(window).width();
    var nH = $(window).height();
    renderer.setSize(nW,nH);
    camera.aspect = nW/nH;
  });
  container = document.getElementById( 'wrapper' );
  container.appendChild( renderer.domElement );

  spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 0, 0, 1000 );
  spotLight.castShadow = true;
  spotLight.shadowMapWidth = 200;
  spotLight.shadowMapHeight = 200;
  spotLight.shadowCameraNear = 250;
  spotLight.shadowCameraFar = 1500;
  spotLight.shadowCameraFov = 45;
  scene.add( spotLight );


  material = new THREE.MeshPhongMaterial({
     color: 0xcccccc
  });
  group = new THREE.Object3D();
  var startingPoint = -1000;
  for (var i = 0; i < text.length; i++) {
    group.add(addMesh(text[i],startingPoint));
    startingPoint -= 100;
  }
  scene.add(group);
}

function render() {
    renderer.render( scene, camera );
}

function animate() {
  window.requestAnimationFrame( animate );
  group.translateY(1.5);
  render();
}
