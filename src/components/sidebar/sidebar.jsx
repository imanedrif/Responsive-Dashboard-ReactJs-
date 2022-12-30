import React, { useState } from "react";
import './sidebar.css';
import Logo from '../../img/logo.png';
import { SidebarData } from "../../data/data";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

function Sidebar() {

    const [Selected, setSelected] = useState(0);
    const [expanded, setExpanded] = useState(true);
    const sidebarVariants = {
        true: {
            left: '0%'
        },
        false: {
            left: '-60%'
        }
    }

    return (
        <>
            <div className="bars"
                style={expanded ? { left: "60%" } : { left: "5%" }}
                onClick={() => setExpanded(!expanded)}
            >
                <UilBars />
            </div>
            <motion.div className="Sidebars"
                variants={sidebarVariants}
                animate={window.innerWidth <= 768 ? `${expanded}` : ''}
            >
                {/* logo */}
                <div className="logo">
                    <img src={Logo} alt="" />
                    <span>
                        Sh<span>o</span>p
                    </span>
                </div>
                {/* menu */}
                <div className="menu">
                    {SidebarData.map((items, index) => {
                        return (
                            <div className={Selected === index ? 'menuItem active' : 'menuItem'}
                                key={index}
                                onClick={() => setSelected(index)}
                            >
                                <items.icon />
                                <span>{items.heading}</span>
                            </div>
                        )
                    })}
                    <div className="menuItem">
                        <UilSignOutAlt />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Sidebar