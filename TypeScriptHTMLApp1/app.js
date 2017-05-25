"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var react_1 = require("react");
var react_dom_1 = require("react-dom");
window.onload = function () {
    var el = document.getElementById('content');
    var jsx = react_1.default.createElement(ToDoList, { name: "CASS Student" });
    react_dom_1.default.render(jsx, el);
};
var ToDoList = (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            items: ["Milk", "Eggs", "Bread"],
            newItemName: "",
            butt: 42
        };
        _this.onInputChange = function (e) {
            var newState = __assign({}, _this.state, { newItemName: e.currentTarget.value });
            _this.setState(newState);
        };
        _this.addItem = function () {
            var newItems = _this.state.items.concat([_this.state.newItemName]);
            var newState = {
                items: newItems,
                newItemName: ""
            };
            _this.setState(newState);
        };
        return _this;
    }
    ToDoList.prototype.render = function () {
        var itemsJSX = this.state.items.map(function (item) { return react_1.default.createElement("li", null, item); });
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h3", null,
                this.props.name,
                "'s To-Do List"),
            react_1.default.createElement("ul", null, itemsJSX),
            react_1.default.createElement("input", { value: this.state.newItemName, onChange: this.onInputChange }),
            react_1.default.createElement("button", { onClick: this.addItem }, "Add")));
    };
    return ToDoList;
}(react_1.default.Component));
//# sourceMappingURL=app.js.map