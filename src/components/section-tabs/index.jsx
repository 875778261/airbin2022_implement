import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
    const { tabNames = [], tabClcikHandle } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    function tabClick(name, index) {
        tabClcikHandle(name, index)
        setCurrentIndex(index)
    }
    return (
        <SectionTabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => (
                        <div key={item} className={classNames("item", { active: index === currentIndex })} onClick={e => tabClick(item, index)}>
                            {item}
                        </div>
                    ))
                }
            </ScrollView>
        </SectionTabsWrapper>
    )
})

export default SectionTabs