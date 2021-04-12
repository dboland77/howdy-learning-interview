import React from "react";

export default function List(props) {
  
    return (
      <ul className="list-group">
        {props.items.map((item)=> {
          return (
            <li className="list-group-item" data-category={item} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    );
}
