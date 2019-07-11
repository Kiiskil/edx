"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/* ///<reference path="stylingProp.ts" />
!!! See stylinProp.ts for explanation */
//This file contains a namespace fro styling and dieRoller as module imported in main.ts
var stylingProp;
(function (stylingProp) {
    //styling properties of dice
    var squareSizeNum = 100; //preferred styling of default values
    var squareBorderNum = 3;
    //Template strings (strings with backtick keys) can reference Number type variables from within String type variables to interpolate them with ${}.
    //we can't assign number directly to the width and heigth of element, so let's use a string representing the whole style declaration
    stylingProp.squareSize = squareSizeNum + "px";
    stylingProp.squareBorder = squareBorderNum + "px solid black";
    var Sides;
    (function (Sides) {
        Sides[Sides["One"] = 0] = "One";
        Sides[Sides["Two"] = 1] = "Two";
        Sides[Sides["Three"] = 2] = "Three";
        Sides[Sides["Four"] = 3] = "Four";
        Sides[Sides["Five"] = 4] = "Five";
        Sides[Sides["Six"] = 5] = "Six";
    })(Sides = stylingProp.Sides || (stylingProp.Sides = {}));
})(stylingProp || (stylingProp = {}));
var Die = /** @class */ (function () {
    function Die(div) {
        this.div = div;
    }
    return Die;
}());
var DieRoller = /** @class */ (function (_super) {
    __extends(DieRoller, _super);
    function DieRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = stylingProp.squareSize;
        _this.div.style.height = stylingProp.squareSize;
        _this.div.style.border = stylingProp.squareBorder;
        _this.div.style.textAlign = "center";
        _this.div.style.verticalAlign = "middle";
        return _this;
    }
    DieRoller.prototype.rollDie = function (num) {
        this.div.textContent = stylingProp.Sides[num];
        return true;
    };
    return DieRoller;
}(Die));
exports["default"] = DieRoller;
