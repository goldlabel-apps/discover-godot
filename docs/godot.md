> [Home](../README.md) 

# Godot

> Godot is an incredibly versatile engine for 2d and 3d games. Due to its pixel based measurement system, godot shines when it comes to 2d. The engine is lightweight and open source. [https://godotengine.org](godotengine.org)


## How to add fps counter

Create a label and attach the following script, Then put it somewhere in your scene

```python
extends Label

func _process(delta: float) -> void:
    set_text("FPS " + String(Engine.get_frames_per_second()))
```

_vs 1.0.8_
