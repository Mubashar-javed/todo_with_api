import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const my_list = [
    {
        "id": 1,
        "title": "Learn HTTP",
        "body": "We are going to learn how to use HTTP"
    },
    {
        "id": 2,
        "title": "second item",
        "body": "the second item is here."
    },
    {
        "id": 3,
        "title": "3rd item",
        "body": "3rd item is here."
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {my_list};
    }

    render() {
        return (
            <div>
                {
                    this.state.my_list.map(item => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                            <p>{item.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default App;
