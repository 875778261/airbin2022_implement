
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'

const HomeSectionV3 = memo((props) => {
    const { infodata } = props
    return (
        <HomeSectionV3Wrapper>
            <SectionHeader title={infodata.title} subtitle={infodata.subtitle}></SectionHeader>
            <div className="home-section-v3">
                <ScrollView>
                    {
                        infodata.list.map(item => (
                            <RoomItem item={item} key={item.id} />
                        ))
                    }
                </ScrollView>
            </div>
        </HomeSectionV3Wrapper>
    )
})

export default HomeSectionV3