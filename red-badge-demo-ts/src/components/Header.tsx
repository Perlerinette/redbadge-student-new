import * as React from 'react';

export interface HeaderProps{}

const Header: React.SFC<HeaderProps> = () => {
    return <h1>Click to roll dice</h1>;
}

export default Header;