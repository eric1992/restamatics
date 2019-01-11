import React, { Component } from 'react';
//import { Route } from 'react-router';
import { Integers } from './components/Integers';
import { Evens } from './components/Evens';
import { Odds } from './components/Odds';
import { Primes } from './components/Primes';
import { Fibonacci } from './components/Fibonacci';
import { Factorial } from './components/Factorial';
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
      baseRoutes: [
        "/api/Reals",
        "/api/Functions",
      ]
    }
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
              <h1>Restamatics</h1>
            </Row>
            <Row>
              <Col>
                {this.state.baseRoutes.map(route => (
                  <SetHierarchy nodeRoute={route}
                    handleClick={this.handleClick} />
                ))}
             </Col>
              <Col>
                { this.state.selectedSet === "Integers" ? <Integers /> : null }
                { this.state.selectedSet === "Evens" ? <Evens /> : null }
                { this.state.selectedSet === "Odds" ? <Odds /> : null }
                { this.state.selectedSet === "Primes" ? <Primes /> : null }                
                { this.state.selectedSet === "Fibonacci" ? <Fibonacci /> : null }
                { this.state.selectedSet === "Factorial" ? <Factorial /> : null }
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}
