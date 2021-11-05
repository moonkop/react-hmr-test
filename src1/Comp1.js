import React from 'react';

class Comp1 extends React.Component {
    state = {
        count: 0
    }

    render() {
        return (
            <div>
                Comp1 11 22
                <div onClick={()=>{
                    this.setState({count: this.state.count - 1})
                }}>{this.state.count}</div>
            </div>
        );
    }
}

console.log('comp1 module', module);
export {Comp1 as default};