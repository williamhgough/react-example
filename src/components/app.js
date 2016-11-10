import React, { Component } from 'react';
import UserList from './user_list';

// Export the Root component.
export default class App extends Component {
    render() {
        return (
            <div>
                <UserList />
            </div>
        );
    }
}
