import React, { Component } from 'react';

class serviceSteps extends Component {
    render() {
        return (
            <>
                <Step101 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step102 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step103 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} handleImageUpload={this.props.handleImageUpload} />
                <Step104 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step105 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step106 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step107 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step108 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step109 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step110 data={this.props.props.data} handleChange={this.props.handleChange} goNext={this.props._next} />
                <Step111 data={this.props.props.data} handleChange={this.props.handleChange} handleSubmit={this.props.handleServiceSubmit} />
            </>
        );
    }
}

export default serviceSteps;