// Credit to: http://webglworkshop.com/12/Babylon.pdf
function Snow(opts) {
  if (!(this instanceof Snow)) return new Snow(opts || {});
  this.scene = opts.scene;
  this.snow_texture = opts.snow_texture;
  this.snow_count = opts.snow_count || 20000;
  this.snow_speed = opts.snow_speed || 0.020;
  this.snow_rate = opts.snow_rate || 700;

  // Snow Particle System
  var snowfall = BABYLON.Mesh.CreateBox("snowfall", 0.5, this.scene);
  this.snow_system = new BABYLON.ParticleSystem("snow_particles", this.snow_count, this.scene);

  // Texture of each particle    
  if(this.snow_texture) {
    this.snow_system.particleTexture = new BABYLON.Texture(this.snow_texture, this.scene);
  } else {
    // Default texture
    var texture_data = "data:image/png;base64,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";
    this.snow_system.particleTexture = new BABYLON.Texture('data:snow_texture', this.scene, true, true, BABYLON.Texture.BILINEAR_SAMPLINGMODE, null, null, texture_data, true);
  }

  // Where the particles come from
  this.snow_system.emitter = snowfall; // the starting object, the emitter
  this.snow_system.minEmitBox = new BABYLON.Vector3(-250, 250, 250); // Starting all from
  this.snow_system.maxEmitBox = new BABYLON.Vector3(250, 200, -250); // To...

  // Colors of all particles
  this.snow_system.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
  this.snow_system.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
  this.snow_system.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

  // Size of each particle (random between...
  this.snow_system.minSize = 0.1;
  this.snow_system.maxSize = 1;

  // Life time of each particle (random between...
  this.snow_system.minLifeTime = 6;
  this.snow_system.maxLifeTime = 12;

  // Emission rate
  this.snow_system.emitRate = this.snow_rate;

  // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
  this.snow_system.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

  // Set the gravity of all particles
  this.snow_system.gravity = new BABYLON.Vector3(0, 0, 0);

  // Direction of each particle after it has been emitted
  this.snow_system.direction1 = new BABYLON.Vector3(0, -10, 0);
  this.snow_system.direction2 = new BABYLON.Vector3(0, -20, 0);

  // Angular speed, in radians
  this.snow_system.minAngularSpeed = 0;
  this.snow_system.maxAngularSpeed = Math.PI;

  // Speed
  this.snow_system.minEmitPower = 1;
  this.snow_system.maxEmitPower = 3;
  this.snow_system.updateSpeed = this.snow_speed;
}

module.exports = Snow;

Snow.prototype.start = function() {
  this.snow_system.start();
};

Snow.prototype.stop = function() {
  this.snow_system.stop();
};

Snow.prototype.get_particle_system = function() {
  return this.snow_system;
};