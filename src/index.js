
import Clip from "./components/Clip.js";
import Component from "./components/Component.js";
import KeyboardEventManager from "./components/KeyboardEventManager.js";
import MoveClip from "./components/MoveClip.js";
import Scene from "./components/Scene.js";
import StepsScene from "./components/StepsScene.js";
import Timer from "./components/Timer.js";
import RoxyListener from "./components/RoxyListener.js";
import Roxy from "./components/Roxy.js";
import Static from './static';
import AnimationFrame from "./components/AnimationFrame";

const Animate = {
    Clip,
    Component,
    KeyboardEventManager,
    MoveClip,
    Scene,
    StepsScene,
    Timer,
    RoxyListener,
    Roxy,
    AnimationFrame,
};


Animate.Static =
    Animate.Util =
        Static;

if (window) {
    window.Animate = Animate;
}

export default Animate;
