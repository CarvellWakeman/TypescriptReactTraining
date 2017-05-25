
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
}

interface State {
    items: CheckItem[];
    newItemName: string;
}

class ToDoList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        // Default items
        var milk: CheckItem = { name: "Milk", completed: false }
        var eggs: CheckItem = { name: "Eggs", completed: false }
        var bread: CheckItem = { name: "Bread", completed: false }

        this.state = {
            items: [milk, eggs, bread],
            newItemName: "",
        }
    }


    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            newItemName: e.currentTarget.value
        };
        this.setState(newState);
    };

    onCheckChange = (e: React.ChangeEvent<HTMLInputElement>, item: CheckItem) => {
        item.completed = e.target.checked;
        alert(item.completed);
    };

    addItem = () => {
        const newCheckItem = { name: this.state.newItemName, completed: false }
        const newItems = [...this.state.items, newCheckItem];
        const newState = {
            items: newItems,
            newItemName: ""
        };
        this.setState(newState);
    };


    render() {
        const itemsJSX = this.state.items.map(item => <li><input type="checkbox" onChange={this.onCheckChange.bind(this, item)} /> {item.name} </li> );

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
