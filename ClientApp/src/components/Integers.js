import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Integers extends Component {
    constructor(){
        super();
        this.state = {
            integers: [],
            min: 0,
            max: 9,
        }
        this.getIntegers();
    }

    getIntegers = (min = this.state.min, max = this.state.max) => {
        axios.get(`/api/Reals/Integers?min=${min}&max=${max}`)
            .then(resp => {
                this.setState({ integers: resp.data})
            })
            .catch(console.log);
    }

    minChanged = (e) => {
        this.setState({
            min: e.target.value,
            integers: [],
        }, this.getIntegers)
    }

    maxChanged = (e) => {
        this.setState({
            max: e.target.value,
            integers: [],
        }, this.getIntegers)
    }

    render() {
        return (<div>
            <h1>Integers</h1>
            <h2>Min</h2>
            <Input type='number' 
                value={this.state.min}
                onChange={this.minChanged}/>
            <h2>Max</h2>
            <Input type='number' 
                value={this.state.max}
                onChange={this.maxChanged}/>
            <BootstrapTable
                data={this.state.integers.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
            
        </div>);
    }
}