import React, { memo, useEffect, } from 'react'
import HomeBanner from './child-cpns/home-banner'
import { HomeWrapper } from './style'
import { fetchHomeData } from '@/store/modules/home'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeSectionV1 from './child-cpns/home-section-v1'
import HomeSectionV2 from './child-cpns/home-section-v2'
import { isEmptyObj } from '@/utils'
import HomeSectionLongfor from './child-cpns/home-section-longfor'
import HomeSectionV3 from './child-cpns/home-section-v3'
import { changeMainTopAlpha } from '@/store/modules/main'
const Home = memo(() => {
    //发送网络请求，存储数据
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHomeData())
        dispatch(changeMainTopAlpha(true))
        return ()=>{
            dispatch(changeMainTopAlpha(false))
        }
    }, [dispatch])

    //获取store中的数据，并通过shallowEqual判断更新
    const { highScoreInfo, goodPriceInfo, discountInfo, hotRecommendInfo, longforInfo,plusInfo } = useSelector((state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        hotRecommendInfo: state.home.hotRecommendInfo,
        longforInfo: state.home.longforInfo,
        plusInfo: state.home.plusInfo,
    }), shallowEqual)


    return (
        <HomeWrapper>
            <div className="header">
            </div>
            <HomeBanner></HomeBanner>
            <div className="content">
                {isEmptyObj(plusInfo) && <HomeSectionV3 infodata={plusInfo} />}
                {isEmptyObj(longforInfo) && <HomeSectionLongfor infodata={longforInfo} />}
                {isEmptyObj(hotRecommendInfo) && <HomeSectionV2 infodata={hotRecommendInfo} />}
                {isEmptyObj(discountInfo) && <HomeSectionV2 infodata={discountInfo} />}
                {isEmptyObj(goodPriceInfo) && <HomeSectionV1 infodata={goodPriceInfo} />}
                {isEmptyObj(highScoreInfo) && <HomeSectionV1 infodata={highScoreInfo} />}
            </div>

            <div className="footer">

            </div>
        </HomeWrapper>
    )
})

export default Home