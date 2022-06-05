> [Home](../../README.md) 

# Godot

> Godot is an incredibly versatile engine for 2d and 3d games. Due to its pixel based measurement system, godot shines when it comes to 2d. The engine is lightweight and open source. [https://godotengine.org](godotengine.org)


## SlotMachine Blocker

I'm sure that given a little more experience with Godot, this error will be trivial to deal with, but as a newbie it's blocking me running the game. I have had it running at one point, but I can't remember what I did :)

![SlotMachine](./media/mixed-tabs-and-spaces.png)

## Animation

Render engine

## How to add fps counter

Create a label and attach the following script, Then put it somewhere in your scene

```python
extends Label

func _process(delta: float) -> void:
    set_text("FPS " + String(Engine.get_frames_per_second()))
```

_vs 1.1.0_
