import React,{useEffect} from 'react'
import {Home } from './Home'

export const Admin = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div>
        <Home/>
    </div>
  )
}
