import { Avatar } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Steps({ icon, styles }) {

  return (
    <div className={`${styles.itenContainer}`}>
      <NavLink 
        style={{textDecoration: 'none'}} 
        to={icon.path} 
        
        children={({isActive}) => {
          const bgColor = isActive ? '#BEE1FD':'transparent';
          const color = isActive ? 'black':'white';
          const border = isActive ? '1px solid transparent':'1px solid white';
          return (
            <>
              <Avatar sx={{backgroundColor: `${bgColor}`, border:`${border}`, color:`${color}`, fontSize: '16px'}}>{icon.id}</Avatar>
            </>
          )
        }}>
      </NavLink>
      <div className={`${styles.description}`}>
        <p>{icon.alt}</p>
        <p>{icon.local}</p>
      </div>
    </div>
  )
}
