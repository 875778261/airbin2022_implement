import React, { memo } from 'react'
import { LongforItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemdata } = props
  return (
    <LongforItemWrapper>
      <div className="longfor-item-inner">
        <div className="longfor-item-cover">
          <img className='cover-img' src={itemdata.picture_url} alt="" />
          
        </div>
        <div className="longfor-item-coverbg"></div>
        <div className="longfor-item-info">
          <div className='city'>{itemdata.city}</div>
          <div className='price'>{itemdata.price}</div>
        </div>
      </div>
    </LongforItemWrapper>
  )
})

export default LongforItem