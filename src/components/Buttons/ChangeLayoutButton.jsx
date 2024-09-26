import IconButton from "./IconButton";
import { useState } from "react";

export default function ChangeLayoutButton(props){
    const [layout, set] = useState("bi bi-grid")

    const handle = () =>{
        let el = document.getElementById("layout");
        if(el==undefined)
        {
            el=document.getElementById("layout1");
        }


        if(el.classList.contains('list')){
            el.classList.remove('list')
            el.classList.add('grid') 
            set("bi bi-grid")
        }
        else{
            el.classList.add('list')
            el.classList.remove('grid') 
            set("bi bi-list")
        }
    }

    return(
        <IconButton icon={layout} onClick={ handle }/>
    )
}