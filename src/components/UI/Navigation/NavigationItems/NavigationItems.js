import React from 'react';
import classes from './NavigationItems.module.css';
import NanigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NanigationItem link="/" active>Burger Builder</NanigationItem>
        <NanigationItem link="/">Checkout</NanigationItem>
    </ul>
);

export default navigationItems;
