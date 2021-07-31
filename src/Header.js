import React from 'react';
import './Header.css';
import AmazonLogo from './amazon_PNG6.png';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            {/*LOGO */}
            <Link to="/" >
                <img className="header__logo" src={AmazonLogo} alt="Amazon logo"/>
            </Link>
            <div className="header__nav">
            <LocationOnIcon className="header__iconLoc" />
            <div className="header__option">
                    <span className="header__optionLineOne">
                        Worldwide
                    </span>
                    <span className="header__optionLineTwo">
                        Shipping
                    </span>
                    
                </div>
            </div>
            
            {/*SEARCH */}
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            <LanguageIcon className="header__iconworld" />
            {/*CHILDREN */}
            <div className="header__nav">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello!
                    </span>
                    <span className="header__optionLineTwo">
                        Sing in
                    </span>
                </div>
                </Link>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Return
                    </span>
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header__optionBasket">
                        <ShoppingCartIcon className="header__optionBasketIcon" />
                        <span className="header__optionLineTwo header__basketCount">
                            { basket?.length }
                        </span>
                    </div>
                </Link>

            </div>
        </div>

    )
}

export default Header
