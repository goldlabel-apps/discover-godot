# Discover Godot with React JS

> Godot is a Free and open source 2D and 3D game engine. React is quite good too. Together can they deliver a killer Casino app? [discover-godot.web.app](https://discover-godot.web.app)

## Requirements

1. Godot Games are exported as PWAs. See  `export_presets.cfg` file
2. To be informed of poor performance in good time, we should have a configurable debugger in the game which can show us dev info like FPS. That way, when developing the game, it will be obvious if you do something which makes the framerate drop to 5fps. If that happens, there are serious problems in the code.
3. 

## Godot Slot

1. Clone repo https://github.com/CadanoX/Godot-Slot-Machine

2. Get it to compile

3. Export the project to run on a browser, host it on a local web server (nginx/apache/your favourite web server) and load the game in a browser.

4. Add an FPS counter that is visible on a mobile resolution. You can use Chrome's developer tool to bring up a browser window with an iPhone resolution. Send a screen capture of the game running under mobile resolution with the FPS counter visible.

5. Add a loading screen to the game: the loading screen just needs to be a button that when clicked loads the main game. Send me the zipped up project.

6. Clicking the "ROLL" button makes an HTTP request (it doesn't matter to what URL - it's just for testing) - sending me a screenshot of the packet containing the HTTP request.

The steps are deliberately about what is needed rather than a detailed how. The how is for you to figure out. 

None of the steps are individually difficult but if you are not familiar with the environment you will need to do some digging. If the #5 seems strange or unrelated, trust me it's not - real world experience

## Docs

The repo is split into 3 JavaScript apps. Basically frontend/backend & Games

- [Games](./docs/react-app.md) `./games`  
  - [HelloWorld](./games/HelloWorld)
  - [CandanoX](./games/CadanoX)

- [React Frontend](./docs/react-app.md) `./react-app`  
- [Node Backend](./docs/node-app.md) `./node-app`  

#### More about... 

- [Casino Slots](./docs/casino-slots.md)
- [Godot](./docs/godot.md) 
- [Pipeline](./docs/pipeline.md)
- [Graphics](./docs/graphics.md)
- [Create React App](./docs/create-react-app.md)

_vs 1.0.8_
