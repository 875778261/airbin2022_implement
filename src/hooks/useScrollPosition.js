import { useEffect, useState } from "react";

export default function useScrollPosition(){
    const [scrollX,setScrollX]=useState(0)
    const [scrollY,setScrollY]=useState(0)
    function changedHandle(e) {
        setScrollX(window.scrollX)
        setScrollY(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener("scroll",changedHandle)
        return ()=>{window.removeEventListener("scroll",changedHandle)}
    })
    return {scrollX,scrollY}
}