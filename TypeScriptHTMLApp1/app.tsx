
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
        var milk: CheckItem = { name: "Milk", completed: false, style: {backgroundColor:"#FFFFFF"} };
        var eggs: CheckItem = { name: "Eggs", completed: false, style: {backgroundColor:"#FFFFFF"} };
        var bread: CheckItem = { name: "Bread", completed: false, style: {backgroundColor:"#FFFFFF"} };

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
        newCheckItem.style = { backgroundColor: (newCheckItem.completed ? "#4CAF50" : "#FFFFFF") }
        // Make a new state object with the new array on it and `setState`
        const newState = { items: newItems, newItemName: "" };
        this.setState(newState);
    }


    // Add new item
    addItem = () => {
        const newCheckItem = { name: this.state.newItemName, completed: false, style: {backgroundColor:"#FFFFFF"} }
        const newItems = [...this.state.items, newCheckItem];
        const newState = {
            items: newItems,
            newItemName: ""
        };
        this.setState(newState);
    };


    // Render the page
    render() {

        var itemsJSX = this.state.items.map((item,i) =>
            <li style={item.style} >
                <input type="checkbox" onChange={(e) => { this.toggleCompleted(e, i); } } />
                {item.name}
            </li>);

        return (
            <div>
                <h3>{this.props.name}'s To-Do List</h3>
                <ul>
                    {itemsJSX}
                </ul>
                <input value={this.state.newItemName} onChange={this.onInputChange} />
                <button onClick={this.addItem}>Add</button>
            </div>
        );
    }
}
