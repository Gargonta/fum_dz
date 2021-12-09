import React, {useState} from 'react'
import classes from "./navMenu.module.scss"

export default function navMenu({Nav}) {

    return (
            <nav>
              <ul>
							{Nav && Nav.length ? Nav.map((item, index) => (
               					 <li
               					 key={item.index}>
               					 <a href={item.link}>{item.name}</a>
               					 </li>
               				)) : null} 

              </ul>
            </nav>
	)
}