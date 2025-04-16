import PropTypes from 'prop-types'
import React, { memo, useCallback, useEffect, useState } from 'react'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
    const { infodata } = props
    const initialName = Object.keys(infodata.dest_list)[0]
    //数据格式化
    const tabNames = infodata.dest_address.map(item => item.name)
    const [name, setName] = useState(initialName)

    //事件处理
    const tabClcikHandle = useCallback(function (name, index) {
        //console.log(name, index);
        setName(name)
    }, [])
    //副作用
    useEffect(() => {
        console.log(name);
    }, [name])
    return (
        <HomeSectionV2Wrapper>
            <SectionHeader title={infodata.title} subtitle={infodata?.subtitle} />
            
                <SectionTabs tabNames={tabNames} tabClcikHandle={tabClcikHandle} />
            <SectionRooms list={infodata.dest_list?.[name]} $infowidth="33.333%"></SectionRooms>
            <SectionFooter name={name}></SectionFooter>
        </HomeSectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infodata: PropTypes.object
}

export default HomeSectionV2