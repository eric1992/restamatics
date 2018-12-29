import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Odds extends Component {
    constructor(){
        super();
        this.state = {
            odds: [],
            min: 1,
            max: 19,
        }
        this.getOdds();
    }

    getOdds = (min = this.state.min, max = this.state.max) => {
        axios.get(`/api/Reals/Integers/Odds?min=${min}&max=${max}`)
            .then(resp => {
                this.setState({ odds : resp.data})
            })
            .catch(console.log);
    }

    minChanged = (e) => {
        this.setState({
            min: e.target.value,
            odds: [],
        }, this.getOdds)
    }

    maxChanged = (e) => {
        this.setState({
            max: e.target.value,
            odds: [],
        }, this.getOdds)
    }

    render() {
        return (<div>
            <h1>Odds</h1>
            <h2>Min</h2>
            <Input type='number' 
                value={this.state.min}
                onChange={this.minChanged}/>
            <h2>Max</h2>
            <Input type='number' 
                value={this.state.max}
                onChange={this.maxChanged}/>
            <BootstrapTable
                data={this.state.odds.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
        </div>);
    }
}