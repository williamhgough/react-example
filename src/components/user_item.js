import React, { Component } from 'react';

class UserItem extends Component {
    render() {
        return (
            <div className="col s4 m4 l4key={this.props.user.id}">
                <div className="card blue-grey darken-1 white-text">
                    <div className="card-content">
                        <span className="card-title">{this.props.user.name}</span>
                        <p>{this.props.user.company.name}</p>
                        <div className="card-action">
                            <a className="waves-effect waves-light btn" href={'http://' + this.props.user.website}>Website</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserItem;
