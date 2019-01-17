import React from 'react';
import s from './Buttons.module.css';
import './Buttons.css';



const Buttons = (props) =>  {
    
      return ( 
      <div>
      
      <button className={s.account + ' ' + s.active} id="" ></button>
      
      <input id="hide" type="radio" name="bar" value="hide"></input>
      <input id="show" type="radio" name="bar" value="show" checked="checked"></input>
      
      
      <button className={s.account} id="" ></button>

      <button className={s.account} id="" ></button>

      <button className={s.account} id="" ></button>

      <button className={s.account} id="" ></button>
      
      
      
      </div>
      

      
     
      
      )
}
  

  export default Buttons;