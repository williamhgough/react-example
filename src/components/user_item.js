import React, { Component } from 'react';

const UserItem = ({user}) => {
    return (
        <div className="col s4 m4 l4key={this.props.user.id}">
            <div className="card blue-grey darken-1 white-text">
                <div className="card-content">
                    <span className="card-title">{user.name}</span>
                    <p>{user.company.name}</p>
                    <div className="card-action">
                        <a className="waves-effect waves-light btn" href={'http://' + user.website}>Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserItem;
