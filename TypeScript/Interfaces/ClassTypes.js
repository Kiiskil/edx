var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    ;
    return Clock;
}());
var ClockM = /** @class */ (function () {
    function ClockM(h, m) {
    }
    ClockM.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return ClockM;
}());
function CreateClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("Beep Beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("Tick Tock");
    };
    return AnalogClock;
}());
var digital = CreateClock(DigitalClock, 12, 17);
var analog = CreateClock(AnalogClock, 7, 32);
//createClocks firs parameter is of type ClockConstructor so it checks that classa has correct consctuctor signature
//clockConstrucors new-signature is of type ClockInterface, so classes has to have tick()-method
