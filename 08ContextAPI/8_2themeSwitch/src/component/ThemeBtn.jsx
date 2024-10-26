import React from 'react'
import useTheme from '../contexts/themeContext'

const ThemeBtn = () => {
    const {themeMode,lightTheme,darkTheme}=useTheme();
    const changeTheme=(e)=>{
        const mode=e.currentTarget.checked;
        if(mode){
            darkTheme()
        }
        else{
            lightTheme();
        }
    }
  return (
    <div>
      <input type="checkbox"  value=""
      checked={themeMode == "dark"}onChange={changeTheme}/>
    </div>
  )
}

export default ThemeBtn
