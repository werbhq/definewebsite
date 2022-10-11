import { Define } from './define/define';
import Hash from './hash/hash';
import React, { useState, createContext } from 'react';

const BackgroundContext = createContext();
const NavbarContext = createContext();

var isDefine = false;

function App() {
    const [background, setBackground] = useState('blackBG');
    const [active, setActive] = useState(false);
    return <div className="App">{isDefine ? <Define></Define> : <Hash></Hash>}</div>;
}

export { App, BackgroundContext, NavbarContext };
