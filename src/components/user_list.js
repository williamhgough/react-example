import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserItem from './user_item';

class UserList extends Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <UserItem key={user.id} user={user} />
        );
    }

    render() {
        return (
            <div className="row">
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps, actions)(UserList);
