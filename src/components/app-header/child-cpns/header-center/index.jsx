import React, { memo, useRef, useState } from 'react'
import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SearchTabs from './child-cpns/search-tabs'
import searchData from '@/assets/data/search_titles.json'
import SearchDownSection from './child-cpns/search-down-section'
import { CSSTransition } from 'react-transition-group'
const titles = searchData.map(item => item.title)
const HeaderCenter = memo((props) => {
  const { isSearch, changeIsSearch } = props
  const [currentTabIndex, setCurrentTabIndex] = useState(0)
  const searchDefaultRef = useRef()
  const searchMoreRef = useRef()

  function tabClickHandle(_index) {
    setCurrentTabIndex(_index)
  }
  return (
    <CenterWrapper>
      <CSSTransition
        classNames='search-bar'
        in={!isSearch}
        timeout={200}
        unmountOnExit={true}
        nodeRef={searchDefaultRef}
      >
        <div ref={searchDefaultRef} className="search-box" onClick={e => changeIsSearch(true)}>
          <input type="text" />
          <div className="icon">
            <IconSearchBar></IconSearchBar>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        classNames='search-more'
        in={isSearch}
        timeout={200}
        unmountOnExit={true}
        nodeRef={searchMoreRef}
      >
        <div ref={searchMoreRef} className='search-detail' >
          <SearchTabs titles={titles} tabClickHandle={tabClickHandle}></SearchTabs>
          <div className='infos'>
            <SearchDownSection searchInfos={searchData[currentTabIndex].searchInfos}></SearchDownSection>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter