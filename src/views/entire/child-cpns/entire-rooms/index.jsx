import React, { memo } from 'react'
import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { useDispatch } from 'react-redux'
import { changeDetailDataAction } from '@/store/modules/detail'
import { useNavigate } from 'react-router-dom'

const EntireRooms = memo((props) => {
  const { roomList, totalCount ,isLoading } = props
  const dispatch = useDispatch()
  const navgate = useNavigate()
  //事件处理
  function itemClickHandle(itemData){
    dispatch(changeDetailDataAction(itemData))
    navgate('/detail')
  }
  return (
    <EntireRoomsWrapper>
      <div className="rooms">
        <h2 className='total-text'>共{totalCount}处住所</h2>
        <div className="room-list">
          {roomList.map(item => (
            <RoomItem key={item.id} item={item} clickhandle={()=>itemClickHandle(item)}></RoomItem>
          ))}
        </div>
      </div>
      {isLoading&&<div className="rooms-cover">
      </div>}

    </EntireRoomsWrapper>
  )
})

export default EntireRooms