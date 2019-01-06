import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Evens extends Component {
    constructor(){
        super();
        this.state = {
            evens: [],
            min: 0,
            max: 18,
        }
        this.getEvens();
    }

    getEvens = (min = this.state.min, max = this.state.max) => {
        axios.get(`/api/Reals/Integers/Evens?min=${min}&max=${max}`)
            .then(resp => {
                this.setState({ evens : resp.data.values})
            })
            .catch(console.log);
    }

    minChanged = (e) => {
        this.setState({
            min: e.target.value,
            evens: [],
        }, this.getEvens)
    }

    maxChanged = (e) => {
        this.setState({
            max: e.target.value,
            evens: [],
        }, this.getEvens)
    }

    render() {
        return (<div>
            <h1>Evens</h1>
            <h2>Min</h2>
            <Input type='number' 
                value={this.state.min}
                onChange={this.minChanged}/>
            <h2>Max</h2>
            <Input type='number' 
                value={this.state.max}
                onChange={this.maxChanged}/>
            <BootstrapTable
                data={this.state.evens.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
        </div>);
    }
}