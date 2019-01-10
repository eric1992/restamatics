import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Fibonacci extends Component {
    constructor(){
        super();
        this.state = {
            fibonacci: [],
            count: 10,
            seedOne: 1,
            seedTwo: 1,
        }
        this.getFibonacci();
    }

    getFibonacci = (count = this.state.count, seedOne = this.state.seedOne, seedTwo = this.state.seedTwo) => {
        axios.get(`/api/Functions/Fibonacci?count=${count}&seedOne=${seedOne}&seedTwo=${seedTwo}`)
            .then(resp => {
                this.setState({ fibonacci : resp.data.values})
            })
            .catch(console.log);
    }

    countChanged = (e) => {
        this.setState({
            count: e.target.value,
            fibonacci: [],
        }, this.getFibonacci)
    }
    
    seedOneChanged = (e) => {
        this.setState({
            seedOne: e.target.value,
            fibonacci: [],
        }, this.getFibonacci)
    }

    seedTwoChanged = (e) => {
        this.setState({
            seedTwo: e.target.value,
            fibonacci: [],
        }, this.getFibonacci)
    }

    render() {
        return (<div>
            <h1>Fibonacci</h1>
            <h2>Count</h2>
            <Input type='number' 
                value={this.state.count}
                onChange={this.countChanged}/>
            <h2>Seed One</h2>
            <Input type='number' 
                value={this.state.seedOne}
                onChange={this.seedOneChanged}/>
            <h2>Seed Two</h2>
            <Input type='number' 
                value={this.state.seedTwo}
                onChange={this.seedTwoChanged}/>
            <BootstrapTable
                data={this.state.fibonacci.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
        </div>);
    }
}