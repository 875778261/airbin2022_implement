import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper } from './style'
import HeaderLeft from './child-cpns/header-left'
import HeaderRight from './child-cpns/header-right'
import HeaderCenter from './child-cpns/header-center'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const { isFixed, topAlpha } = useSelector(state => {
    return {
      isFixed: state.main.isFixed,
      topAlpha: state.main.topAlpha
    }
  }, shallowEqual)

  const [isSearch, setIsSearch] = useState(false)
  const { scrollY } = useScrollPosition()
  const beforeScrollYRef = useRef(0)
  if (!isSearch) beforeScrollYRef.current = scrollY
  if (isSearch && Math.abs(scrollY - beforeScrollYRef.current) > 50) setIsSearch(false)

  const isAlpha = topAlpha && scrollY === 0
  return (
    <ThemeProvider theme={ {isAlpha} }>
      <HeaderWrapper
        $isFixed={isFixed}
        className={classNames({ fixed:isSearch|| isFixed })}
      >
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={isAlpha||isSearch} changeIsSearch={setIsSearch}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <div className={classNames("search-empty-area", { "search-empty-area-active":!isAlpha&& isSearch })}></div>
        </div>
        {
          isSearch
          &&
          !isAlpha
          &&
          <div className="cover" onClick={e => setIsSearch(false)}></div>
        }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader