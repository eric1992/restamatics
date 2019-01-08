import React, { Component } from 'react';
import TreeView from 'react-treeview';
import axios from 'axios';

export default class SetHierarchy extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: null,
            collapsed: true,
            children: [],
        };
        axios.get(props.nodeRoute)
            .then(resp => {
                const children = resp.data.links
                    .filter(link => link.rel === "child")
                    .map(link => link.href);
                this.setState({
                    name: resp.data.name,
                    children: children,
                });
            })
            .catch(console.log);
    }

    handleClick = name => () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed,
        }), this.props.handleClick(name));
    }

    render() {
        return (<div>
            {this.state.name
                && this.state.children.length === 0
                && <ul onClick={this.handleClick(this.state.name)}>
                    <li>{this.state.name}</li>
                </ul>}
            {this.state.name 
                && this.state.children.length > 0
                && <TreeView
                nodeLabel={this.state.name}
                collapsed={this.state.collapsed}
                onClick={this.handleClick(this.state.name)}>
                {this.state.children.map((child, i) => (
                    <SetHierarchy key={i} 
                        nodeRoute={child} 
                        handleClick={this.props.handleClick}/>
                    ))}
            </TreeView>}
            
        </div>)
    }
}