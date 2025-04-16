import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'
const Indicator = memo((props) => {
    const {slectedIndex=0} = props
    const contentRef = useRef()
    useEffect(()=>{
        const contentWidth = contentRef.current.clientWidth
        const contentScrollWidth = contentRef.current.scrollWidth
        const contentTotlaWidth = contentScrollWidth-contentWidth
        //console.log(contentWidth,contentScrollWidth,contentTotlaWidth);
        const selectedItemOffsetLeft = contentRef.current.children[slectedIndex].offsetLeft
        const selectedItemClientWidth = contentRef.current.children[slectedIndex].clientWidth
        let contentOffset = selectedItemOffsetLeft-contentWidth*0.5 +selectedItemClientWidth*0.5
        if (selectedItemOffsetLeft<contentWidth*0.5) {
            contentOffset=0
        }
        if (contentOffset>contentTotlaWidth) {
            contentOffset= contentTotlaWidth
        }
        contentRef.current.style.transform=`translate(${-contentOffset}px)`
        //console.log(selectedItemOffsetLeft);
    },[slectedIndex])
    return (
        <IndicatorWrapper>
            <div className="indicator-content" ref={contentRef}>
                {props.children.map((item,index) =>
                    item
                )}
            </div>
        </IndicatorWrapper>
    )
})

export default Indicator