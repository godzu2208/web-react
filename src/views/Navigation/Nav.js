import React from "react";

import '../../styles/nar.scss';

import { Link, NavLink } from "react-router-dom"


class Nav extends React.Component {
    render() {
        return (
            <>
                {/* <div className="topnav">
                    <Link to="/home" exact className="active">Home</Link>
                    <Link to="/todo">Todo</Link>
                    <Link to="/form">Form</Link>
                    <Link to="/about">About</Link>
                </div> */}
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todo
                    </NavLink>
                    <NavLink to="/form" activeClassName="active">
                        Form
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                    <NavLink to="/user" activeClassName="active">
                        Users
                    </NavLink>
                    <NavLink to="/youtube" activeClassName="active">
                        Youtube
                    </NavLink>
                    {/* <Link to="/">Home</Link>
                    <Link to="/todo">Todo</Link>
                    <Link to="/form">Form</Link>
                    <Link to="/about">About</Link> */}
                </div>
            </>
        )
    }
}

export default Nav;
