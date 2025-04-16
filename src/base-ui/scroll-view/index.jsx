
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
    const contentRef = useRef()
    const totalWidthRef = useRef()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [showRight, setShowRight] = useState(false)
    const [showLeft, setShowLeft] = useState(false)
    useEffect(() => {
        const scrollWidth = contentRef.current.scrollWidth
        const clientWidth = contentRef.current.clientWidth
        totalWidthRef.current = scrollWidth - clientWidth
        // console.log('总宽', scrollWidth);
        // console.log('视宽', clientWidth);
        // console.log('宽差', totalWidthRef.current);
        setShowRight(totalWidthRef.current > 0)
    }, [props.children])

    /** 事件处理 */
    function clickHandle(isRight) {
        const newIndex = isRight ? currentIndex + 1 : currentIndex - 1
        const newElOffset = contentRef.current.children[newIndex].offsetLeft
        contentRef.current.style.transform = `translate(-${newElOffset}px)`
        setCurrentIndex(newIndex)
        console.log(newElOffset > 0, newElOffset > totalWidthRef.current);
        setShowLeft(newElOffset > 0)
        setShowRight(newElOffset < totalWidthRef.current)
    }
    return (
        <ScrollViewWrapper>
            {showLeft &&
                <div className='control left' onClick={e => clickHandle(false)} >
                    <IconArrowLeft></IconArrowLeft>
                </div>
            }
            {showRight &&
                <div className='control right' onClick={e => clickHandle(true)}>
                    <IconArrowRight></IconArrowRight>
                </div>
            }
            <div className="scroll">
                <div className="content" ref={contentRef}>
                    {props.children}
                </div>
            </div>

        </ScrollViewWrapper>
    )
})
export default ScrollView