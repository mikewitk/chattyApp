import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty <i className="fas fa-comments"></i></a>
                <div>{ this.props.usersOnline } <i className="fas fa-users"></i></div>
            </nav>
        )
    }
}


export default NavBar;;
