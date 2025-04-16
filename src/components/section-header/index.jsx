import React, { memo } from 'react'
import { SectionHeaderWrapper } from './style'

const SectionHeader = memo((props) => {
    const { title, subtitle } = props
    return (
        <SectionHeaderWrapper>
            <div>
                <h2 className='title'>{title}</h2>
                {subtitle && <div className='subtitle'>{subtitle}</div>}
            </div>
        </SectionHeaderWrapper>

    )
})

export default SectionHeader