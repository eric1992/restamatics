import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Integers } from './components/Integers';
import { Evens } from './components/Evens';
import { Odds } from './components/Odds';
import { Fibonacci } from './components/Fibonacci';
import 'react-treeview/react-treeview.css';
import TreeView from 'react-treeview';

export default class App extends Component {
  static displayName = App.name;
  constructor() {
    super();
    this.state = {
      realsCollapsed: true,
      integersCollapsed: true,
      selectedSet: null,
    }
  }


  handleRealsClick = () => {
    this.setState(currentState => ({
      realsCollapsed: !currentState.realsCollapsed,
      selectedSet: "REALS",
    })); 
  }

  handleIntegersClick = () => {
    this.setState(currentState => ({
      integersCollapsed: !currentState.integersCollapsed,
      selectedSet: "INTEGERS",
    }))
  }

  handleEvensClick = () => {
    this.setState({ selectedSet : "EVENS" });
  }

  handleOddsClick = () => {
    this.setState({ selectedSet : "ODDS" });
  }

  handleFibonacciClick = () => {
    this.setState({ selectedSet : "FIBONACCI" })
  }

  render () {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="path/to/react-treeview.css"/>
          <TreeView
            key="Reals|0"
            nodeLabel="Reals"
            collapsed={this.state.realsCollapsed}
            onClick={this.handleRealsClick}>
            <TreeView
              key="Integers|0"
              nodeLabel="Integers"
              collapsed={this.state.integersCollapsed}
              onClick={this.handleIntegersClick}>
              <ul>
                <li onClick={this.handleEvensClick}>
                  Evens
                </li>
                <li onClick={this.handleOddsClick}>
                  Odds
                </li>
                <li onClick={this.handleFibonacciClick}>
                  Fibonacci
                </li>
              </ul>
            </TreeView>
          </TreeView>
          { this.state.selectedSet === "INTEGERS" ? <Integers /> : null }
          { this.state.selectedSet === "EVENS" ? <Evens /> : null }
          { this.state.selectedSet === "ODDS" ? <Odds /> : null }
          { this.state.selectedSet === "FIBONACCI" ? <Fibonacci /> : null }
      </div>
    );
  }
}
