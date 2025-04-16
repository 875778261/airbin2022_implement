import React, { memo, useMemo, } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from '@mui/material'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, fetchEntireListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo((props) => {
  const dispatch = useDispatch()
  const { currentPage, totalCount, sizeOfGetEntireList, } = useSelector(state => {
    return {
      currentPage: state.entire.currentPage,
      totalCount: state.entire.totalCount,
      sizeOfGetEntireList: state.entire.sizeOfGetEntireList,
    }
  },shallowEqual)
  
  const paginationCount = useMemo(() => Math.ceil(totalCount / sizeOfGetEntireList), [totalCount, sizeOfGetEntireList])


  function changePageHandle(pageCount) {
    console.log(pageCount);
    //修改store页码
    dispatch(changeCurrentPageAction(pageCount - 1))
    //发送新的网络请求
    dispatch(fetchEntireListAction())
  }


  return (
    <EntirePaginationWrapper>
      <div className="pagination">
        <Pagination count={paginationCount} onChange={(event, value) => changePageHandle(value)}></Pagination>
        <div className="pagination-desc">当前页为第{currentPage * sizeOfGetEntireList + 1}-{(currentPage + 1) * sizeOfGetEntireList}条，共{totalCount}条数据</div>
      </div>

    </EntirePaginationWrapper>
  )
})

export default EntirePagination