import getWindow from "./static/getWindow";

import Clip from "./components/Clip.js";
import Component from "./components/Component.js";
import KeyboardEventManager from "./components/KeyboardEventManager.js";
import {EventCodes, EventKeys, EventCodesNames, EventKeysNames} from "./components/KeyboardEventManager.js";
import MoveClip from "./components/MoveClip.js";
import Scene from "./components/Scene.js";
import StepsScene from "./components/StepsScene.js";
import Timer from "./components/Timer.js";
import RoxyListener from "./components/RoxyListener.js";
import Roxy from "./components/Roxy.js";
import Static from './static';
import AnimationFrame from "./components/AnimationFrame";
import Loader from "./components/Loader";
import Matrix from "./components/Matrix";
import Point from "./components/Point";
import Rectangle from "./components/Rectangle";
import Transform from "./components/Transform";
import EventManager from "./components/EventManager";
import Frames from "./components/Frames";
import Router from "./components/Router";
import Paint from "./components/Paint";
import Color from "./components/Color";
import PaintTransform from "./components/PaintTransform";
import EnterFrame from "./components/EnterFrame";
import Plant from "./components/Plant";
import Graphic from "./components/Graphic";

const Animate = {
    Clip,
    Component,
    KeyboardEventManager,
    EventCodes,
    EventKeys,
    EventCodesNames,
    EventKeysNames,
    MoveClip,
    Scene,
    StepsScene,
    Timer,
    RoxyListener,
    Roxy,
    AnimationFrame,
    Loader,
    Matrix,
    Point,
    Rectangle,
    Transform,
    EventManager,
    Frames,
    Router,
    Paint,
    Color,
    PaintTransform,
    EnterFrame,
    Plant,
    Graphic,
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

if (getWindow()) getWindow()['Animate'] = Animate;

export default Animate;
