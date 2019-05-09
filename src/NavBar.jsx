import React, {Component} from 'react';

class NavBar extends Component {
    render() {

        const usersOnline = this.props.usersOnline;
    
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div>{usersOnline} users online</div>
            </nav>
        )
    }
}


export default NavBar;;
