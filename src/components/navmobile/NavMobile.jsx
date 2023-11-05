import React, { useState, useEffect } from 'react';
import './navmobile.css';
import { data } from '../../data/data.js';


const NavMobile = () => {
    return (
        <nav className="navigation-mobile">
            {data.navigation.map((item, index) => (
                <button className="nav-item-mobile"
                    key={index}
                    style={{
                        color: item.color,
                        background: item.background,
                    }}
                    data-slug={item.slug}
                    onClick={() => {
                        scrollToComponent(item.slug);
                    }}
                >
                    <p className="nav-text-mobile text-body-bold">{item.title}</p>
                </button>
            ))
            }
        </nav >
    );
}


export default NavMobile;