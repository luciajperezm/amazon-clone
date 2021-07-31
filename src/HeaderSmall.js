import React from 'react';
import './HeaderSmall.css';

function Header__small() {
    return (
        <div className="header__small">
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Today's Deals
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Books
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Beauty
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Sports
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Kitchen
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Toys
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Computers
                </span>
            </div>
            <div className="header__smallItem">
                <span className="header__smallItem--text">
                    Amazon's Response to COVID-19
                </span>
            </div>
        </div>
    )
}

export default Header__small
