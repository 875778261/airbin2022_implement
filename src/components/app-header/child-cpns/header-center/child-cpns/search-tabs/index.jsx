import React, { memo, useState } from 'react'
import { SearchTabsWrapper } from './style'
import classNames from 'classnames'

const SearchTabs = memo((props) => {
  const { titles = [], tabClickHandle } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  function itemClickHandle(_index) {
    setCurrentIndex(_index)
    if(tabClickHandle) tabClickHandle(_index)
  }
  return (
    <SearchTabsWrapper>
      <div className="tab-list">
        {titles.map((item, index) =>
          <div
            className={classNames('tab-item',{ active: currentIndex === index })}
            key={item}
            onClick={e => itemClickHandle(index)}
          >
            <span>{item}</span>
            <span className='bottom'></span>
            
          </div>
        )}
      </div>
    </SearchTabsWrapper>
  )
})

export default SearchTabs