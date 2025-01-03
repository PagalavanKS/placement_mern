import React, { useState } from 'react'
var slowfunction=(Number) => {
    for(let i=0; i<20000000000;i++) {
    return Number*2
    }
}

const UseMemo = () => {
    var[num,SetNum]=useState(0);
    var[theme,setTheme]=useState(true);
    var Theme={
        backgroundColor: (theme)?"black":"white",
        color: (theme)? "white":"black",
    }
    let DoublingNumber=()=>{
        return slowfunction(num);
    }
  return (
    <div>UseMemo
        <input type="number" value={num} onChange={(e)=>{SetNum(e.target.value)}}/>
        <button onClick={()=>{setTheme(theme=!theme)}}>Toggle</button>
        <h2 style={Theme}>{DoublingNumber()}</h2>
    </div>
  )
}
export default UseMemo