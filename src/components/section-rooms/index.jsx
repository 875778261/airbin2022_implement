import React, { memo } from 'react'
import { SectionRoomsWrapper } from './style'
import RoomItem from '../room-item'


const SectionRooms = memo((props) => {
    const { list=[],$infowidth } = props
    return (
        <SectionRoomsWrapper>
            {
                list && list.slice(0,8).map((item) => (
                    <RoomItem item={item} key={item.id} $infowidth={$infowidth}/>
                ))
            }
        </SectionRoomsWrapper>
    )
})

export default SectionRooms