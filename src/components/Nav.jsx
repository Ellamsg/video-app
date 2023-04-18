
import React, { useState } from 'react'
import { Link } from "react-router-dom";
export default function Nav(){

    let Links =[
        {name:"Home",link:""},
        {name:"category",link:"/products/:id"},
        {name:"product",link:"/products:id"},
       
      ];
      let [open,setOpen]=useState(false);
    return (
      <div>
  
  
      <div className=' sticky    top-0 left-0 md:p-0  lg:text-xl text-xl md:text-base'>
        <div className='md:flex items-center md:py-4 justify-evenly lg:gap-6 bg-black '>
          
        <div className="md:pl-0 pl-2 text-white">
        <p className='text-[44px]'>GERICHT</p>
        </div>
        
        <div onClick={()=>setOpen(!open)} className=' absolute right-2 top-2 cursor-pointer md:hidden'>
    
        <img className='w-4' name={open ? 'close':'menu'} src='image/menu-svgrepo-com.svg'/>
        <p className="text-white">.</p>
        </div>
        
        <ul  className={`md:flex md:items-center bg-black justify lg:gap-[70px] text-white  
         absolute md:static md:z-auto z-[-1] 
        left-0   transition-all duration-500 
        ease-in ${open ? 'top-0 ':'top-[-490px]'}`}>
          <div className='md:flex md:items-center  font-name'>
          {
            Links.map((link)=>(
              <div className=''>
              <li className=' px-2 '>
                <Link to={link.link} className='  duration-500'>{link.name}</Link>
              </li>
              </div>
            ))
          }
          </div>
          <div className=' flex text-white '>
          <div className="font-name  px-4  border-r-2 ">
         Log in/ Registratio
          </div>
          <div className="font-name px-4">
          Book table
          </div>
          </div>
        </ul>
        </div>
      </div>
      </div>
    )
}