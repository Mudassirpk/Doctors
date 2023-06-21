import React from "react";

type Props = {
    thickness:number;
    space:number;
}


export default function Divider({thickness,space}:Props){
    return(
        <div className={`bg-slate-300  w-full`} style={{
    height: thickness + 'px',
    margin: `${space}px 0`}}>
    </div>
    )
}