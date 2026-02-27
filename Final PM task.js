/********************** 
 * Final Pm Task *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.0.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'Final PM task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((-1.0000, -1.0000, -1.0000)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(ThankyouRoutineBegin());
flowScheduler.add(ThankyouRoutineEachFrame());
flowScheduler.add(ThankyouRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Book1.xlsx', 'path': 'Book1.xlsx'},
    {'name': 'FINAL word list.xlsx', 'path': 'FINAL word list.xlsx'},
    {'name': 'Instructions 1.jpg', 'path': 'Instructions 1.jpg'},
    {'name': 'Instructions 2.jpg', 'path': 'Instructions 2.jpg'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.0';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instruction1Clock;
var image;
var key_resp_2;
var instruction2Clock;
var image_2;
var key_resp_3;
var trainingblockClock;
var Targetword;
var leftword;
var rightword;
var key_resp_4;
var instructionClock;
var text_2;
var key_resp_6;
var MainTrialClock;
var target_word;
var left_word;
var right_word;
var key_resp;
var ThankyouClock;
var Thanks;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'height', 
    image : 'Instructions 1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [2, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'height', 
    image : 'Instructions 2.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.8, 1],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trainingblock"
  trainingblockClock = new util.Clock();
  Targetword = new visual.TextStim({
    win: psychoJS.window,
    name: 'Targetword',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.4], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  leftword = new visual.TextStim({
    win: psychoJS.window,
    name: 'leftword',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.3), (- 0.25)], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  rightword = new visual.TextStim({
    win: psychoJS.window,
    name: 'rightword',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.3, (- 0.25)], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Please press the spacebar to start the task!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.2941, -0.6706, -0.6706)),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MainTrial"
  MainTrialClock = new util.Clock();
  target_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_word',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.4], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  left_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'left_word',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [(- 0.3), (- 0.25)], draggable: true, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  right_word = new visual.TextStim({
    win: psychoJS.window,
    name: 'right_word',
    text: '',
    font: 'Arial',
    units: 'norm', 
    pos: [0.3, (- 0.25)], draggable: false, height: 0.15,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Thankyou"
  ThankyouClock = new util.Clock();
  Thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'Thanks',
    text: 'Thank you for participating!\n\nPlease click on the SPACE bar to exit',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color((0.7255, -0.8431, -0.5294)),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var instruction1MaxDurationReached;
var _key_resp_2_allKeys;
var instruction1MaxDuration;
var instruction1Components;
function instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction1Clock.reset();
    routineTimer.reset();
    instruction1MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instruction1.started', globalClock.getTime());
    instruction1MaxDuration = null
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(image);
    instruction1Components.push(key_resp_2);
    
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction1' ---
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction1' ---
    for (const thisComponent of instruction1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction2MaxDurationReached;
var _key_resp_3_allKeys;
var instruction2MaxDuration;
var instruction2Components;
function instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction2Clock.reset();
    routineTimer.reset();
    instruction2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('instruction2.started', globalClock.getTime());
    instruction2MaxDuration = null
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(image_2);
    instruction2Components.push(key_resp_3);
    
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction2' ---
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instruction2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction2' ---
    for (const thisComponent of instruction2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Book1.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trainingblockRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trainingblockRoutineEachFrame());
      trials_2LoopScheduler.add(trainingblockRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'FINAL word list.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(MainTrialRoutineBegin(snapshot));
      trialsLoopScheduler.add(MainTrialRoutineEachFrame());
      trialsLoopScheduler.add(MainTrialRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trainingblockMaxDurationReached;
var _key_resp_4_allKeys;
var trainingblockMaxDuration;
var trainingblockComponents;
function trainingblockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trainingblock' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trainingblockClock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    trainingblockMaxDurationReached = false;
    // update component parameters for each repeat
    Targetword.setColor(new util.Color(color));
    Targetword.setText(mainword);
    leftword.setColor(new util.Color(color));
    leftword.setText(lword);
    rightword.setColor(new util.Color(color));
    rightword.setText(rword);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('trainingblock.started', globalClock.getTime());
    trainingblockMaxDuration = null
    // keep track of which components have finished
    trainingblockComponents = [];
    trainingblockComponents.push(Targetword);
    trainingblockComponents.push(leftword);
    trainingblockComponents.push(rightword);
    trainingblockComponents.push(key_resp_4);
    
    for (const thisComponent of trainingblockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trainingblockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trainingblock' ---
    // get current time
    t = trainingblockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Targetword* updates
    if (t >= 0.0 && Targetword.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Targetword.tStart = t;  // (not accounting for frame time here)
      Targetword.frameNStart = frameN;  // exact frame index
      
      Targetword.setAutoDraw(true);
    }
    
    
    // if Targetword is active this frame...
    if (Targetword.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Targetword.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      Targetword.tStop = t;  // not accounting for scr refresh
      Targetword.frameNStop = frameN;  // exact frame index
      // update status
      Targetword.status = PsychoJS.Status.FINISHED;
      Targetword.setAutoDraw(false);
    }
    
    
    // *leftword* updates
    if (t >= 0.0 && leftword.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      leftword.tStart = t;  // (not accounting for frame time here)
      leftword.frameNStart = frameN;  // exact frame index
      
      leftword.setAutoDraw(true);
    }
    
    
    // if leftword is active this frame...
    if (leftword.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (leftword.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      leftword.tStop = t;  // not accounting for scr refresh
      leftword.frameNStop = frameN;  // exact frame index
      // update status
      leftword.status = PsychoJS.Status.FINISHED;
      leftword.setAutoDraw(false);
    }
    
    
    // *rightword* updates
    if (t >= 0.0 && rightword.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rightword.tStart = t;  // (not accounting for frame time here)
      rightword.frameNStart = frameN;  // exact frame index
      
      rightword.setAutoDraw(true);
    }
    
    
    // if rightword is active this frame...
    if (rightword.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (rightword.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      rightword.tStop = t;  // not accounting for scr refresh
      rightword.frameNStop = frameN;  // exact frame index
      // update status
      rightword.status = PsychoJS.Status.FINISHED;
      rightword.setAutoDraw(false);
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp_4.tStop = t;  // not accounting for scr refresh
      key_resp_4.frameNStop = frameN;  // exact frame index
      // update status
      key_resp_4.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp_4.tStop = t;  // not accounting for scr refresh
        key_resp_4.frameNStop = frameN;  // exact frame index
        // update status
        key_resp_4.status = PsychoJS.Status.FINISHED;
        key_resp_4.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp_4 is active this frame...
      if (key_resp_4.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_4.getKeys({
          keyList: typeof ['left','right','space'] === 'string' ? [['left','right','space']] : ['left','right','space'], 
          waitRelease: false
        });
        _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
        if (_key_resp_4_allKeys.length > 0) {
          key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
          key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
          key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
          // was this correct?
          if (key_resp_4.keys == correctAns) {
              key_resp_4.corr = 1;
          } else {
              key_resp_4.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of trainingblockComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function trainingblockRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'trainingblock' ---
      for (const thisComponent of trainingblockComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('trainingblock.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp_4.keys === undefined) {
        if (['None','none',undefined].includes(correctAns)) {
           key_resp_4.corr = 1;  // correct non-response
        } else {
           key_resp_4.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_4.corr, level);
      }
      psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
      psychoJS.experiment.addData('key_resp_4.corr', key_resp_4.corr);
      if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
          psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
          routineTimer.reset();
          }
      
      key_resp_4.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (trainingblockMaxDurationReached) {
          trainingblockClock.add(trainingblockMaxDuration);
      } else {
          trainingblockClock.add(4.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var instructionMaxDurationReached;
var _key_resp_6_allKeys;
var instructionMaxDuration;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'instruction' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      instructionClock.reset();
      routineTimer.reset();
      instructionMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_6.keys = undefined;
      key_resp_6.rt = undefined;
      _key_resp_6_allKeys = [];
      psychoJS.experiment.addData('instruction.started', globalClock.getTime());
      instructionMaxDuration = null
      // keep track of which components have finished
      instructionComponents = [];
      instructionComponents.push(text_2);
      instructionComponents.push(key_resp_6);
      
      for (const thisComponent of instructionComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function instructionRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'instruction' ---
      // get current time
      t = instructionClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *text_2* updates
      if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        text_2.tStart = t;  // (not accounting for frame time here)
        text_2.frameNStart = frameN;  // exact frame index
        
        text_2.setAutoDraw(true);
      }
      
      
      // if text_2 is active this frame...
      if (text_2.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_6* updates
      if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_6.tStart = t;  // (not accounting for frame time here)
        key_resp_6.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
      }
      
      // if key_resp_6 is active this frame...
      if (key_resp_6.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_6.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
        if (_key_resp_6_allKeys.length > 0) {
          key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
          key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
          key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of instructionComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function instructionRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'instruction' ---
      for (const thisComponent of instructionComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('instruction.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_6.corr, level);
      }
      psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
      if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
          psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
          routineTimer.reset();
          }
      
      key_resp_6.stop();
      // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var MainTrialMaxDurationReached;
var _key_resp_allKeys;
var MainTrialMaxDuration;
var MainTrialComponents;
function MainTrialRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'MainTrial' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      MainTrialClock.reset();
      routineTimer.reset();
      MainTrialMaxDurationReached = false;
      // update component parameters for each repeat
      target_word.setColor(new util.Color(color));
      target_word.setText(mainword);
      left_word.setColor(new util.Color(color));
      left_word.setText(lword);
      right_word.setColor(new util.Color(color));
      right_word.setText(rword);
      key_resp.keys = undefined;
      key_resp.rt = undefined;
      _key_resp_allKeys = [];
      psychoJS.experiment.addData('MainTrial.started', globalClock.getTime());
      MainTrialMaxDuration = null
      // keep track of which components have finished
      MainTrialComponents = [];
      MainTrialComponents.push(target_word);
      MainTrialComponents.push(left_word);
      MainTrialComponents.push(right_word);
      MainTrialComponents.push(key_resp);
      
      for (const thisComponent of MainTrialComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function MainTrialRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'MainTrial' ---
      // get current time
      t = MainTrialClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *target_word* updates
      if (t >= 0.0 && target_word.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        target_word.tStart = t;  // (not accounting for frame time here)
        target_word.frameNStart = frameN;  // exact frame index
        
        target_word.setAutoDraw(true);
      }
      
      
      // if target_word is active this frame...
      if (target_word.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (target_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        target_word.tStop = t;  // not accounting for scr refresh
        target_word.frameNStop = frameN;  // exact frame index
        // update status
        target_word.status = PsychoJS.Status.FINISHED;
        target_word.setAutoDraw(false);
      }
      
      
      // *left_word* updates
      if (t >= 0.0 && left_word.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        left_word.tStart = t;  // (not accounting for frame time here)
        left_word.frameNStart = frameN;  // exact frame index
        
        left_word.setAutoDraw(true);
      }
      
      
      // if left_word is active this frame...
      if (left_word.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (left_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        left_word.tStop = t;  // not accounting for scr refresh
        left_word.frameNStop = frameN;  // exact frame index
        // update status
        left_word.status = PsychoJS.Status.FINISHED;
        left_word.setAutoDraw(false);
      }
      
      
      // *right_word* updates
      if (t >= 0.0 && right_word.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        right_word.tStart = t;  // (not accounting for frame time here)
        right_word.frameNStart = frameN;  // exact frame index
        
        right_word.setAutoDraw(true);
      }
      
      
      // if right_word is active this frame...
      if (right_word.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (right_word.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        right_word.tStop = t;  // not accounting for scr refresh
        right_word.frameNStop = frameN;  // exact frame index
        // update status
        right_word.status = PsychoJS.Status.FINISHED;
        right_word.setAutoDraw(false);
      }
      
      
      // *key_resp* updates
      if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp.tStart = t;  // (not accounting for frame time here)
        key_resp.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({
          keyList: typeof ['left','right','space'] === 'string' ? [['left','right','space']] : ['left','right','space'], 
          waitRelease: false
        });
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
          // was this correct?
          if (key_resp.keys == corrAns) {
              key_resp.corr = 1;
          } else {
              key_resp.corr = 0;
          }
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of MainTrialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function MainTrialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'MainTrial' ---
      for (const thisComponent of MainTrialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('MainTrial.stopped', globalClock.getTime());
      // was no response the correct answer?!
      if (key_resp.keys === undefined) {
        if (['None','none',undefined].includes(corrAns)) {
           key_resp.corr = 1;  // correct non-response
        } else {
           key_resp.corr = 0;  // failed to respond (incorrectly)
        }
      }
      // store data for current loop
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          routineTimer.reset();
          }
      
      key_resp.stop();
      // the Routine "MainTrial" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var ThankyouMaxDurationReached;
var _key_resp_5_allKeys;
var ThankyouMaxDuration;
var ThankyouComponents;
function ThankyouRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'Thankyou' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      ThankyouClock.reset();
      routineTimer.reset();
      ThankyouMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_5.keys = undefined;
      key_resp_5.rt = undefined;
      _key_resp_5_allKeys = [];
      // Disable downloading results to browser
      psychoJS._saveResults = 0;
      
      // Generate filename for results
      let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
      
      // Extract data object from experiment
      let dataObj = psychoJS._experiment._trialsData;
      
      // Convert data object to CSV
      let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
          return Object.values(it).toString()
      }).join('\n')
      
      // Send data to OSF via DataPipe
      console.log('Saving data...');
      fetch('https://pipe.jspsych.org/api/data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
          },
          body: JSON.stringify({
              experimentID: 'kuCr7lDHufWL', // ★ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ★
              filename: filename,
              data: data,
          }),
      }).then(response => response.json()).then(data => {
          // Log response and force experiment end
          console.log(data);
          quitPsychoJS();
      })
      psychoJS.experiment.addData('Thankyou.started', globalClock.getTime());
      ThankyouMaxDuration = null
      // keep track of which components have finished
      ThankyouComponents = [];
      ThankyouComponents.push(Thanks);
      ThankyouComponents.push(key_resp_5);
      
      for (const thisComponent of ThankyouComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function ThankyouRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'Thankyou' ---
      // get current time
      t = ThankyouClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *Thanks* updates
      if (t >= 0.0 && Thanks.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        Thanks.tStart = t;  // (not accounting for frame time here)
        Thanks.frameNStart = frameN;  // exact frame index
        
        Thanks.setAutoDraw(true);
      }
      
      
      // if Thanks is active this frame...
      if (Thanks.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_5* updates
      if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_5.tStart = t;  // (not accounting for frame time here)
        key_resp_5.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
      }
      
      // if key_resp_5 is active this frame...
      if (key_resp_5.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_5.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
        if (_key_resp_5_allKeys.length > 0) {
          key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
          key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
          key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of ThankyouComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function ThankyouRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'Thankyou' ---
      for (const thisComponent of ThankyouComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('Thankyou.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_5.corr, level);
      }
      psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
      if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
          psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
          routineTimer.reset();
          }
      
      key_resp_5.stop();
      // the Routine "Thankyou" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
