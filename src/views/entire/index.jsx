import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './child-cpns/entire-filter'
import EntireRooms from './child-cpns/entire-rooms'
import EntirePagination from './child-cpns/entire-pagination'
import { fetchEntireListAction } from '@/store/modules/entire/actionCreators'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireListAction())
   
  }, [dispatch])
  const { currentPage, roomList, totalCount, sizeOfGetEntireList,isLoading  } = useSelector((state => {
    return {
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      sizeOfGetEntireList: state.entire.sizeOfGetEntireList,
      isLoading :state.entire.isLoading
    }
  }), shallowEqual)
  return (
    <EntireWrapper>
      <div className="filter-section">
        <EntireFilter></EntireFilter>
      </div>
      <div className="room-section">
        <EntireRooms 
        roomList={roomList} 
        totalCount={totalCount}
        isLoading={isLoading}
        />
      </div>
      <div className="pagination-section">
        <EntirePagination 
        currentPage={currentPage} 
        totalCount={totalCount} 
        sizeOfGetEntireList={sizeOfGetEntireList}
        
        />
      </div>
    </EntireWrapper>
  )
})

export default Entire