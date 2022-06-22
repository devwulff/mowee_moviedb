import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../Sidebar.css';

export default props => {
    return (
        <Menu right {...props}>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Worst Movies
            </a>
            <a className="menu-item" href="/">
                Critics Rating
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
            <a className="menu-item" href="/">
                Best Movies
            </a>
        </Menu>
    );
};