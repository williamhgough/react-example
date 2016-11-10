import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserItem from './user_item';

class UserList extends Component {
    // On application load, dispatch action creator to fetchUsers
    componentWillMount() {
        this.props.fetchUsers();
    }

    // Render new UserItem component.
    renderUser(user) {
        return (
            <UserItem key={user.id} user={user} />
        );
    }

    render() {
        return (
            <div className="row" id="user-list">
                <h1>User List</h1>
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

// View-layer bindings
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// View-layer bindings
export default connect(mapStateToProps, actions)(UserList);
