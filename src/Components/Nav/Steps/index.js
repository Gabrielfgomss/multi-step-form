import { Avatar } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'


export default function Steps({ icon, styles }) {

  let location = useLocation();

  return (
    <div className={`${styles.itenContainer}`}>
      <Avatar
        sx={{
          backgroundColor: icon.path === location.pathname ? 'hsl(206, 94%, 87%)' : 'transparent', border: icon.path === location.pathname ? '1px solid transparent' : '1px solid white',
          color: icon.path === location.pathname ? 'black' : 'white',
          fontSize: '16px',
          width: 30,
          height: 30,
          fontWeight: 800,
          purpose: 'any maskable'
        }}>
        {icon.id}
      </Avatar>
      <div className={`${styles.description}`}>
        <p>{icon.alt}</p>
        <p>{icon.local}</p>
      </div>
    </div>
  )
}
