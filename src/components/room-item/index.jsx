import React, { memo, useRef, useState } from 'react'
import { RoomItmeWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import classNames from 'classnames';
import Indicator from '@/base-ui/indicator';
const RoomItem = memo((props) => {
    const { item, $infowidth = '25%',clickhandle=()=>{return} } = props
    const carouselRef = useRef()

    const [slectedIndex, setSlectedIndex] = useState(0)
    const [timerid,setTimerid] = useState(null)
    /* 事件处理 */
    function controlBtnClickHandle(isLeft,e) {
        e.stopPropagation()
        //处理点击频率快与图片切换不同步问题
        console.log('timerID',timerid);
        if (timerid!==null) return 
        //轮播图切换
        if (isLeft) {
            //上一张
            carouselRef.current.prev()
        } else {
            //下一张
            carouselRef.current.next()
        }
        //获取索引，判断边界，改变indicator索引
        let newIndex = isLeft ? slectedIndex - 1 : slectedIndex + 1
        if (newIndex < 0) newIndex = item?.picture_urls.length - 1
        if (newIndex > item?.picture_urls.length - 1) newIndex = 0
        setSlectedIndex(newIndex)

        //创建定时器
        const timer= setTimeout(()=>{
            clearTimeout(timerid)
            setTimerid(null)
        },550)
        console.log(timer);
        setTimerid(timer)
    }
    function roomItemClickHandle(){
        clickhandle()
    }

    const imgElement = (
        <div className="cover">
            <img src={item?.picture_url} alt="" />
        </div>
    )
    const swiperElement = (
        <div className="swiper">
            <Carousel ref={carouselRef} dots={false} >
                {item?.picture_urls?.map(item => (<div className='cover' key={item}><img src={item} alt="" /></div>))}
            </Carousel>
            <div className="indicator">
                <Indicator slectedIndex={slectedIndex}>
                    {item?.picture_urls?.map((item, index) => (
                        <div key={item} className="indicator-item">
                            <span
                                className={
                                    classNames("dot",
                                        {
                                            'active': slectedIndex === index,
                                            'active12':
                                                index === slectedIndex + 1 ||
                                                index === slectedIndex - 1 ||
                                                index === slectedIndex + 2 ||
                                                index === slectedIndex - 2
                                        })}>
                            </span>
                        </div>
                    ))}
                </Indicator>
            </div>
            <div className="control">
                <div
                    className="btn left"
                    onClick={(e) => controlBtnClickHandle(true,e)}>
                    <IconArrowLeft w={30} h={30} />
                </div>
                <div
                    className="btn left"
                    onClick={(e) => controlBtnClickHandle(false,e)}>
                    <IconArrowRight w={30} h={30} />
                </div>
            </div>
        </div>
    )
    return (
        <RoomItmeWrapper $infowidth={$infowidth} onClick={roomItemClickHandle}>
            <div className="inner">

                {!item.picture_urls ? imgElement : swiperElement}

                <div className="msg">
                    {item.verify_info.messages.join('·')}
                </div>
                <div className="name">{item.name}</div>
                <div className="price">￥{item.price}/晚</div>
                <div className="bottom-info">
                    <Rating
                        value={item.star_rating ?? 5}
                        precision={0.1}
                        size='small'
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                        readOnly
                    >
                    </Rating>
                    <span className="count">{item.reviews_count}</span>
                    <span className="extra">{item.bottom_info?.content}</span>
                </div>
            </div>
        </RoomItmeWrapper>
    )
})

export default RoomItem