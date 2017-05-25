
window.onload = () => {
    const content = document.getElementById('content');
    const jsx = <ToDoList name="CASS Student" />;
    ReactDOM.render(jsx, content);
};


interface Props {
    name: string;
}

interface CheckItem {
    name: string;
    completed: boolean;
    style: {};
}

interface State {
    items: CheckItem[];
    newItemName: string;
}

class ToDoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Default items
        var milk: CheckItem = { name: "Milk", completed: false, style: { textDecoration:"none" } };
        var eggs: CheckItem = { name: "Eggs", completed: false, style: { textDecoration: "none" } };
        var bread: CheckItem = { name: "Bread", completed: false, style: { textDecoration: "none" } };

        this.state = {
            items: [milk, eggs, bread],
            newItemName: "",
        }
    }

    // Textbox for adding new item
    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            newItemName: e.currentTarget.value
        };
        this.setState(newState);
    };

    // Toggling checkbox items
    toggleCompleted = (e: React.ChangeEvent<HTMLInputElement>, index: number ) => {
        // Make a copy of the array
        const newItems = this.state.items.slice(); 
        // Make a copy of the item at `index` in the array
        const newCheckItem = newItems[index]; //{ name: item.name, completed: item.completed, style: item.style }
        // Modify the copied item to toggle the completed state and put it in the new array at `index`
        newCheckItem.completed = e.target.checked;
        newCheckItem.style = { textDecoration: (newCheckItem.completed ? "line-through" : "none") }
        // Make a new state object with the new array on it and `setState`
        const newState = { items: newItems, newItemName: "" };
        this.setState(newState);
    }


    // Add new item
    addItem = () => {
        const newCheckItem = { name: this.state.newItemName, completed: false, style: { textDecoration:"none" } }
        const newItems = [...this.state.items, newCheckItem];
        const newState = {
            items: newItems,
            newItemName: ""
        };
        this.setState(newState);
    };

    // Render todo item
    render_todo(i: number) {
        return (
            <li style={this.state.items[i].style} >
                <input type="checkbox" onChange={(e) => { this.toggleCompleted(e, i); }} />
                {this.state.items[i].name}
            </li>
        );
    }

    // Render the page
    render() {
        return (
            <div>
                <h3>{this.props.name}'s To-Do List</h3>
                <ul>
                    { this.state.items.map((item, i) => this.render_todo(i)) }
                </ul>
                <input value={this.state.newItemName} onChange={this.onInputChange} />
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}
