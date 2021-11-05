import React from "react";
import Comp1 from "./Comp1";
import ReactDOM from "react-dom";
export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
        console.log('app constructor')
    }
    componentDidMount() {
        console.log('app componentDidMount')
    }

    componentWillUnmount() {
        console.log('app componentWillUnmount')
    }
    render() {
        console.log('app render')
        return (
            <div>
                <div>module.hot.accep</div>
                <div onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>{this.state.count}</div>
                some str
                <Comp1></Comp1>
            </div>
        );
    }
}

module.hot.accept("./Comp1.js", () => {
    console.log('module.hot.accept comp1');
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
});

console.log('App module', module);

