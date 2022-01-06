import React from "react"
import './menuItems.styles.scss'

const MenuItems = ({ title, imageUrl, linkUrl }) => (

  
  <div
    style={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover"
    }}
    
    className="menu-item">
      <div className="back">

      </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">{linkUrl}</span>
    </div>
  </div>
);

 
export default MenuItems;