import React, { memo } from 'react'
import { HomeSectionLongforWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeSectionLongfor = memo((props) => {
  const { infodata } = props
  return (
    <HomeSectionLongforWrapper>
      <SectionHeader title={infodata.title} subtitle={infodata.subtitle}></SectionHeader>
      <div className="longfor-list">
        <ScrollView>
          {infodata.list.map(item => (

            <LongforItem key={item.city} itemdata={item} />
          )
          )}
        </ScrollView>
      </div>



    </HomeSectionLongforWrapper>
  )
})

export default HomeSectionLongfor