import { Component } from "react";
import React from 'react';

class ColorFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }

    setFilterValue = event => {
        this.setState({
            filter: event.target.value
        })
    };

    render() {
        return (
            <div>
                <div>
                    <input onChange={this.setFilterValue} type="text" />
                </div>
                {this.props.colors
                .filter((element) => element.color.includes(this.state.filter))
                .map(({color , value}) => <li key={value}>{color} coded as {value}</li>)}
            </div>


        );
    }

}

export default ColorFilter;