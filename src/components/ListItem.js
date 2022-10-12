import React from "react"

function ListItem({ item, clickItem }) {
    return(
        <li 
            value = {item.title} 
            key = {item.id} 
            className="list-item"
            onClick={() => clickItem}
        >
            {item.title}
        </li>
    )
}

export default ListItem