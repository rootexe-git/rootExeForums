import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from './../actions';

class LandingPage extends Component {
    
    componentDidMount() {
        this.props.profile_fetch();
    }

    render() {
        return (
            <div className="NotFound">
                {this.props.profile.email}
            </div>
        );
    }
}

function mapStateToProps({ profile }) {
    return { profile }
}

export default connect(mapStateToProps, actions)(LandingPage);