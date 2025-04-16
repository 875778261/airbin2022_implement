import React, { memo, useEffect, useRef } from 'react'
import { DetailWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import DetailPicture from './detail-picture'
import { changeMainIsFixed } from '@/store/modules/main'

const Detail = memo(() => {
    const { itemData,isSearch} = useSelector(state => {
        return {
            itemData: state.detail.itemData,
            isSearch:state.main.isSearch
        }
    }, shallowEqual)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(changeMainIsFixed(false))
        return ()=>{
            dispatch(changeMainIsFixed(true))
        }
    },[dispatch])
    return (
        <DetailWrapper>
            <div className="detail">
                <DetailPicture picUrls={itemData.picture_urls}></DetailPicture>
                <div>
                    {itemData.name}
                </div>
            </div>
        </DetailWrapper>
    )
})

export default Detail