import React, { memo } from 'react'
import { SearchDownSectionWrapper } from './style'

const SearchDownSection = memo((props) => {
  const { searchInfos = [] } = props
  return (
    <SearchDownSectionWrapper>
      <div className='infos-list'>
        {searchInfos.map((item,index) =>
          <div className='infos-item' key={item.title}>
            <div className="item-info">
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
           {index!==searchInfos.length-1 &&  <div className='divider'></div>}
          </div>
        )}
      </div>
    </SearchDownSectionWrapper>
  )
})

export default SearchDownSection