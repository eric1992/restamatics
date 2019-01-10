import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Factorial extends Component {
    constructor(){
        super();
        this.state = {
            factorial : [],
            count: 10,
            startIndex: 1,
        }
        this.getFactorial();
    }

    getFactorial  = (count = this.state.count, startIndex = this.state.startIndex) => {
        axios.get(`/api/Functions/Factorial?count=${count}&startIndex=${startIndex}`)
            .then(resp => {
                this.setState({ factorial : resp.data.values})
            })
            .catch(console.log);
    }

    countChanged = (e) => {
        this.setState({
            count: e.target.value,
            factorial: [],
        }, this.getFactorial)
    }
    
    startIndexChanged = (e) => {
        this.setState({
            startIndex: e.target.value,
            factorial: [],
        }, this.getFactorial)
    }

    render() {
        return (<div>
            <h1>Factorial</h1>
            <h2>Count</h2>
            <Input type='number' 
                value={this.state.count}
                onChange={this.countChanged}/>
            <h2>Start Index</h2>
            <Input type='number' 
                value={this.state.startIndex}
                onChange={this.startIndexChanged}/>
            <BootstrapTable
                data={this.state.factorial.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
        </div>);
    }
}