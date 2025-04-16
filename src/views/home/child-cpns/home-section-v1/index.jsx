import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { infodata, hasTabs = false,$infowidth } = props
    return (
        <HomeSectionV1Wrapper>
            <SectionHeader title={infodata.title} subtitle={infodata?.subtitle} />
            {hasTabs && <SectionTabs></SectionTabs>}
            <SectionRooms list={infodata.list} $infowidth={$infowidth}></SectionRooms>
            <SectionFooter></SectionFooter>
        </HomeSectionV1Wrapper>
    )
})

export default HomeSectionV1