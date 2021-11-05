import React from "react";
import Comp1 from "./Comp1";


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
                <div>react refresh</div>
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
