# Babylon Voxel Snow
Voxel snow for Babylon.js

> Let it snow in [Babylon.js](https://github.com/BabylonJS/Babylon.js).

> Best when used with [Noa-Engine](https://github.com/andyhall/noa).

## Example

```js
let snow = require('babylon-voxel-snow')({
  	// Pass it a copy of the Babylon scene
	scene: scene,

	// Texture of the snowflake
	snow_texture: 'textures/snowflake.png',

	// Capacity of snow produced
	snow_count: 20000,

	// Speed at which the snow falls
	snow_speed: 0.020,

	// Rate at which the snow is created
	snow_rate: 700,
});


// Let it snow!
snow.start();

// Let it stop!
snow.stop();

```


Later you can access the Babylon particle system directly:

```js
snow.get_particle_system();
```

## Run the Example

1. `git clone git://github.com/Nesh108/babylon-voxel-snow && cd babylon-voxel-snow`
1. `npm install`
1. `npm start`

## Install

With [npm](https://npmjs.org) do:

```
npm install --save babylon-voxel-snow
```

## Release History

* 1.0.0 - initial release

## License

Credit to: http://webglworkshop.com/12/Babylon.pdf 

Copyright (c) 2017 Nesh108<br/>

Licensed under the MIT license.