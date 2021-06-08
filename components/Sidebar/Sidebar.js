import React, { useState } from 'react';
import {BsPeopleCircle} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi';
import {AiOutlineShop} from 'react-icons/ai';
import {RiMoneyDollarBoxLine} from 'react-icons/ri';


const itemStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "18vw",
    paddingLeft: "5px",
    margin: "1rem 0rem",
    cursor: "pointer"
}

const itemStyleHover = {
    backgroundColor: "tomato",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    width: "18vw",
    paddingLeft: "5px",
    margin: "1rem 0rem",
    borderRadius: "4px",
    cursor: "pointer"
}

const sideMenuStyle = {
    marginLeft: "5px",
    color: "gray",
    fontWeight: "lighter",
    cursor: "pointer"
}
const activeSideMenuStyle = {
    marginLeft: "5px",
    color: "blue",
    fontWeight: "lighter",
    textDecoration: "underline",
    cursor: "pointer"
}

const Sidebar = ({active}) => {

    const [dashboard, setDashboard] = active;
    const [hoverOver1, setHoverOver1] = useState(false)
    const [hoverOver2, setHoverOver2] = useState(false)
    const [hoverOver3, setHoverOver3] = useState(false)
    const [hoverOver4, setHoverOver4] = useState(false)

    return (
        <div>
            <div style={(hoverOver1) ? itemStyleHover : itemStyle}
                onMouseOver={() => setHoverOver1(true)} onMouseLeave={() => setHoverOver1(false)}
                onClick={() => setDashboard("account")}
            >
                <BsPeopleCircle size={30} />
                <h3 style={dashboard === "account" ? activeSideMenuStyle : sideMenuStyle} >Account</h3>
            </div>


            <div style={hoverOver2 ? itemStyleHover : itemStyle}
                onMouseOver={() => setHoverOver2(true)} onMouseLeave={() => setHoverOver2(false)}
                onClick={() => setDashboard("orders")}
            >
                <RiMoneyDollarBoxLine size={30} />
                <h3 style={dashboard === "orders" ? activeSideMenuStyle : sideMenuStyle}>Orders</h3>
            </div>


            <div style={hoverOver3 ? itemStyleHover : itemStyle}
                onMouseOver={() => setHoverOver3(true)} onMouseLeave={() => setHoverOver3(false)}
                onClick={() => setDashboard("products")}
            >
                <AiOutlineShop size={30} />
                <h3 style={dashboard === "products" ? activeSideMenuStyle : sideMenuStyle} >Products</h3>
            </div>


            <div style={hoverOver4 ? itemStyleHover : itemStyle}
                onMouseOver={() => setHoverOver4(true)} onMouseLeave={() => setHoverOver4(false)}
                onClick={() => setDashboard("setting")}
            >
                <FiSettings size={30} />
                <h3 style={dashboard === "setting" ? activeSideMenuStyle : sideMenuStyle} >Settings</h3>
            </div>


        </div>
    );
};

export default Sidebar;