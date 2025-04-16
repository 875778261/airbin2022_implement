import React, { memo, useEffect, useRef, useState } from 'react'
import { PictureBrowserWrapper } from './style'
import Indicator from '../indicator'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo((props) => {
  const { closeBrowserHandle, pics } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showIndicator, setShowIndicator] = useState(true)
  const [isNext, seIsNext] = useState(true)
  const imgRef = useRef(null)
  useEffect(() => {
    //进入组件消除滚动条
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })
  function closePictureBrowser() {
    closeBrowserHandle(false)
  }
  function ctrlClickHandle(isNext = true) {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex > pics.length - 1) {
      newIndex = 0
    }
    if (newIndex < 0) {
      newIndex = pics.length - 1
    }
    setCurrentIndex(newIndex)
    seIsNext(isNext)
  }
  function showIndicatorClick() {
    setShowIndicator(!showIndicator)
  }
  function indicatorItemClcik(_index) {
    if(_index===currentIndex) return
    const _isNext = _index>currentIndex?true:false
    setCurrentIndex(_index)
    seIsNext(_isNext)
  }
  return (
    <PictureBrowserWrapper $showIndicator={showIndicator} $isNext={isNext}>
      <div className="pic-browser">
        <div className="top">
          <div className='top-close-btn' onClick={closePictureBrowser}><span>X</span></div>
        </div>
        <div className="center">
          <div className="center-pic-view">
            <SwitchTransition mode='out-in'>
              <CSSTransition
                nodeRef={imgRef}
                key={pics[currentIndex]}
                classNames="pictransition"
                timeout={200}
              >
                <img ref={imgRef} src={pics[currentIndex]} alt="" />
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className="center-ctrl">
            <div
              className="ctrl ctrl-left"
              onClick={e => ctrlClickHandle(false)}>
              <IconArrowLeft w={100} h={100}></IconArrowLeft>
            </div>
            <div
              className="ctrl ctrl-right"
              onClick={e => ctrlClickHandle(true)}>
              <IconArrowRight w={100} h={100}></IconArrowRight>
            </div>
          </div>
        </div>


        <div className="bottom">

          <div className="info">
            <div className="desc">
              <div className="count">
                <span>{currentIndex + 1}/{pics.length} </span>
                <span> room apartment </span>
              </div>
              <div onClick={showIndicatorClick} className="show-btn">
                {
                  showIndicator === true ?
                    <span>隐藏照片列表 < IconTriangleArrowBottom ></IconTriangleArrowBottom></span>
                    :
                    <span>显示照片列表 < IconTriangleArrowTop ></IconTriangleArrowTop></span>
                }
              </div>
            </div>

            <div className="bottom-indicator">
              <Indicator slectedIndex={currentIndex}>
                {pics.map((item, index) => <div
                  key={item}
                  className={classNames('indicator-item', { active: currentIndex === index })}
                  onClick={e=>indicatorItemClcik(index)}
                  >
                  <img src={item} alt="" />
                </div>)}
              </Indicator>
            </div>


          </div>

        </div>
      </div>
    </PictureBrowserWrapper >
  )
})

export default PictureBrowser