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
import Loader from "./components/Loader";

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
    Loader,
};

const RADIAN = 0.017453292519943295;
const DEGREE_AS_RADIAN = 0.017453292519943295;
const DEGREE_360_AS_RADIAN = DEGREE_AS_RADIAN * 360;
const PI = 3.14159265359;
const RAD_TO_DEGREES = 3.14159265359;

Animate.RADIAN = RADIAN;
Animate.DEGREE_AS_RADIAN = DEGREE_AS_RADIAN;
Animate.DEGREE_360_AS_RADIAN = DEGREE_360_AS_RADIAN;
Animate.PI = PI;
Animate.RAD_TO_DEGREES = RAD_TO_DEGREES;

Animate.Static =
    Animate.Util =
        Static;

if (getWindow()) {
    getWindow().Animate = Animate;
}

export default Animate;
