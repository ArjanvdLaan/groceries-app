import React from 'react'
import ListItem from "./ListItem"

function List(props) {

    function onItemClick(item) {
        console.log(`Clicked ${item.id}, ${item.title}`)
    }
    return(
        <div>
            <ul>
                {props.groceryItems.map(item => 
                <ListItem 
                    key={item.id} 
                    title={item.title}
                    clickItem={() => onItemClick(item)}
                />
                )}
            </ul>
        </div>
    )
}

export default List
