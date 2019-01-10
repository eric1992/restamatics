import React, { Component } from 'react';
import axios from 'axios';
import { Input } from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export class Primes extends Component {
    constructor(){
        super();
        this.state = {
            primes : [],
            count: 10,
        }
        this.getPrimes();
    }

    getPrimes  = (count = this.state.count) => {
        axios.get(`/api/Reals/Integers/Primes?count=${count}`)
            .then(resp => {
                this.setState({ primes : resp.data.values})
            })
            .catch(console.log);
    }

    countChanged = (e) => {
        this.setState({
            count: e.target.value,
            primes: [],
        }, this.getPrimes)
    }
    
    render() {
        return (<div>
            <h1>Primes</h1>
            <h2>Count</h2>
            <Input type='number' 
                value={this.state.count}
                onChange={this.countChanged}/>
            <BootstrapTable
                data={this.state.primes.map(i => {return {id: i}})}
                pagination>
                <TableHeaderColumn isKey dataField='id'>Value</TableHeaderColumn>
            </BootstrapTable>
        </div>);
    }
}