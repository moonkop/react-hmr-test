import React from "react";
import {hot} from "react-hot-loader/root";
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
                <div>react hot loader</div>
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

export const HotApp = hot(App);