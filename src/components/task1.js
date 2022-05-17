import { Component } from 'react';


export default class Task1 extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
        }
    }

    reset = ()=>{
        this.setState({input:""})
    }

    render() {
        return (
            <div align="center" >
                <input
                    className='input1'
                    type="text"
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({ input: e.target.value })
                    }}
                />
                <br />
                {this.state.input}
                <br />
                <div>
                <input
                    className='btn1'
                    type="button"
                    value="Reset"
                    onClick={this.reset}
                /></div>
            </div>
        )
    }
}