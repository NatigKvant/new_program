import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
        <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active} active id="">
            <div></div>
            </div>
            <div className={s.dialog} id="">
            <div></div>
            </div>
             <div className={s.dialog} id="">
             <div></div>
             </div>
              <div className={s.dialog} id="">
              <div></div>
            </div>
            </div>
            <div className={s.messages}>
              <div className={s.dialog}></div>
              <div className={s.dialog}></div>
              <div className={s.dialog}></div>
            </div>   
          </div>
         
              
        
              
  )
}



export default Dialogs;

