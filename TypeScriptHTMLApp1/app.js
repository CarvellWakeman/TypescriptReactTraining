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
        // Textbox for adding new item
        _this.onInputChange = function (e) {
            var newState = __assign({}, _this.state, { newItemName: e.currentTarget.value });
            _this.setState(newState);
        };
        // Toggling checkbox items
        _this.toggleCompleted = function (e, index) {
            // Make a copy of the array
            var newItems = _this.state.items.slice();
            // Make a copy of the item at `index` in the array
            var newCheckItem = newItems[index]; //{ name: item.name, completed: item.completed, style: item.style }
            // Modify the copied item to toggle the completed state and put it in the new array at `index`
            newCheckItem.completed = e.target.checked;
            newCheckItem.style = { textDecoration: (newCheckItem.completed ? "line-through" : "none") };
            // Make a new state object with the new array on it and `setState`
            var newState = { items: newItems, newItemName: "" };
            _this.setState(newState);
        };
        // Add new item
        _this.addItem = function () {
            var newCheckItem = { name: _this.state.newItemName, completed: false, style: { textDecoration: "none" } };
            var newItems = _this.state.items.concat([newCheckItem]);
            var newState = {
                items: newItems,
                newItemName: ""
            };
            _this.setState(newState);
        };
        // Default items
        var milk = { name: "Milk", completed: false, style: { textDecoration: "none" } };
        var eggs = { name: "Eggs", completed: false, style: { textDecoration: "none" } };
        var bread = { name: "Bread", completed: false, style: { textDecoration: "none" } };
        _this.state = {
            items: [milk, eggs, bread],
            newItemName: "",
        };
        return _this;
    }
    // Render todo item
    ToDoList.prototype.render_todo = function (i) {
        var _this = this;
        return (React.createElement("li", { style: this.state.items[i].style },
            React.createElement("input", { type: "checkbox", onChange: function (e) { _this.toggleCompleted(e, i); } }),
            this.state.items[i].name));
    };
    // Render the page
    ToDoList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h3", null,
                this.props.name,
                "'s To-Do List"),
            React.createElement("ul", null, this.state.items.map(function (item, i) { return _this.render_todo(i); })),
            React.createElement("input", { value: this.state.newItemName, onChange: this.onInputChange }),
            React.createElement("button", { onClick: this.addItem }, "Add")));
    };
    return ToDoList;
}(React.Component));
//# sourceMappingURL=app.js.map