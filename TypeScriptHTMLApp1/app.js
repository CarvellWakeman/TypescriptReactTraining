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
window.onload = function () {
    var content = document.getElementById('content');
    var jsx = React.createElement(ToDoList, { name: "CASS Student" });
    ReactDOM.render(jsx, content);
};
var ToDoList = (function (_super) {
    __extends(ToDoList, _super);
    function ToDoList(props) {
        var _this = _super.call(this, props) || this;
        _this.onInputChange = function (e) {
            var newState = __assign({}, _this.state, { newItemName: e.currentTarget.value });
            _this.setState(newState);
        };
        _this.onCheckChange = function (e, item) {
            item.completed = e.target.checked;
            alert(item.completed);
        };
        _this.addItem = function () {
            var newCheckItem = { name: _this.state.newItemName, completed: false };
            var newItems = _this.state.items.concat([newCheckItem]);
            var newState = {
                items: newItems,
                newItemName: ""
            };
            _this.setState(newState);
        };
        // Default items
        var milk = { name: "Milk", completed: false };
        var eggs = { name: "Eggs", completed: false };
        var bread = { name: "Bread", completed: false };
        _this.state = {
            items: [milk, eggs, bread],
            newItemName: "",
        };
        return _this;
    }
    ToDoList.prototype.render = function () {
        var _this = this;
        var itemsJSX = this.state.items.map(function (item) { return React.createElement("li", null,
            React.createElement("input", { type: "checkbox", onChange: _this.onCheckChange.bind(_this, item) }),
            " ",
            item.name,
            " "); });
        return (React.createElement("div", null,
            React.createElement("h3", null,
                this.props.name,
                "'s To-Do List"),
            React.createElement("ul", null, itemsJSX),
            React.createElement("input", { value: this.state.newItemName, onChange: this.onInputChange }),
            React.createElement("button", { onClick: this.addItem }, "Add")));
    };
    return ToDoList;
}(React.Component));
//# sourceMappingURL=app.js.map