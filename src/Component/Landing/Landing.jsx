import React from 'react';
import { Details } from '../Details/Details';
import { Header } from '../Header/Header';
import {NavbarTop} from "../Navigation/NavbarTop";
// import {NavbarTop} from "../Navigation/NavbarTop";

export const Landing = () => {
    return (
        <div>
            <NavbarTop/>
            <Header/>
            {/* <NavbarTop/> */}
            <Details/>
        </div>
    );
};

