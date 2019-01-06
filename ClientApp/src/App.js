import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Integers } from './components/Integers';
import { Evens } from './components/Evens';
import { Odds } from './components/Odds';
import { Fibonacci } from './components/Fibonacci';
import { Container, Row, Col } from 'reactstrap';
import 'react-treeview/react-treeview.css';
import SetHierarchy from './components/SetHierarchy';

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

  handleClick = name => () => {
    this.setState({ selectedSet: name});
  }

  render () {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="path/to/react-treeview.css"/>
          <Container>
            <Row>
              <Col>
                <SetHierarchy nodeRoute="/api/Reals"
                  handleClick={this.handleClick} />
              </Col>
              <Col>
                { this.state.selectedSet === "Integers" ? <Integers /> : null }
                { this.state.selectedSet === "Evens" ? <Evens /> : null }
                { this.state.selectedSet === "Odds" ? <Odds /> : null }
                { this.state.selectedSet === "Fibonacci" ? <Fibonacci /> : null }
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
