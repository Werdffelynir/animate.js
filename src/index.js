import getWindow from "./static/getWindow";

import Clip from "./components/Clip.js";
import Component, {ComponentClass} from "./components/Component.js";
import KeyboardEventManager from "./components/KeyboardEventManager.js";
import MoveClip, {MoveClipClass} from "./components/MoveClip.js";
import Scene, {SceneClass} from "./components/Scene.js";
import StepsScene from "./components/StepsScene.js";
import Timer from "./components/Timer.js";
import RoxyListener from "./components/RoxyListener.js";
import Roxy from "./components/Roxy.js";
import Static from './static';
import AnimationFrame from "./components/AnimationFrame";

const Animate = {
    Clip,
    Component,
    ComponentClass,
    KeyboardEventManager,
    MoveClip,
    MoveClipClass,
    Scene,
    SceneClass,
    StepsScene,
    Timer,
    RoxyListener,
    Roxy,
    AnimationFrame,
};

Animate.Static =
    Animate.Util =
        Static;

if (getWindow()) {
    getWindow().Animate = Animate;
}

export default Animate;
