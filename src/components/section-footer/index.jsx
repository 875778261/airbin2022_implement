
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
    const {name} = props
    let text = '显示全部'
    let color = '#000'
    if (name) {
        text=`显示更多${name}的房源`
        color = '#00848A'
    }
    const navigate = useNavigate()
    function infoClick() {
        navigate('/entire')
    }
    return (
        <SectionFooterWrapper color={color} >
            <div className="info" onClick={infoClick}>
                <span className='text'>{text}(全部跳转到/entire)</span>
                <span><IconMoreArrow></IconMoreArrow></span>
            </div>
        </SectionFooterWrapper>
    )
})

export default SectionFooter    