import { getHomeGoodPriceData, getHomeDiscountData, getHomeHighScoreData, getHomeHotRecommendData, getHomeLongforData, getHomePlusData } from "@/services/index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/* 单条请求，通过返回值，触发reducer extraReducers */
/* export const fetchHomeData = createAsyncThunk("fetch-home-data", async (dispatch, store) => {
    const res = await getHometHighScoreData()
    console.log(res.data);
    return res.data 
}) */

/* 多条请求 ,通过then派发dispatch即可*/
export const fetchHomeData = createAsyncThunk("fetch-home-data", (payload, { dispatch }) => {
    getHomeHighScoreData().then(res => {
        dispatch(changeHighScrollInfoAction(res.data))
    })
    getHomeGoodPriceData().then(res => {
        //console.log(res.data);
        dispatch(changeGoodPriceInfoAction(res.data))
    })
    getHomeDiscountData().then(res => {
        //console.log(res.data);
        dispatch(changeDiscountInfoAction(res.data))
    })
    getHomeHotRecommendData().then(res => {
        console.log(res.data);
        dispatch(changeHotRecommendInfoAction(res.data))
    })
    getHomeLongforData().then(res=>{
        dispatch(changeLongforInfoAction(res.data))
    })
    getHomePlusData().then(res=>{
        dispatch(changePlusInfoAction(res.data))
    })

})

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        productList: [],
        highScoreInfo: {},
        goodPriceInfo: {},
        discountInfo: {},
        hotRecommendInfo: {},
        longforInfo:{},
        plusInfo:{}
    },
    reducers: {
        /*通过导出homeSlice.actions 后才可再dispatch中使用 */
        changeHighScrollInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeGoodPriceInfoAction(state, { payload }) {
            state.goodPriceInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeHotRecommendInfoAction(state, { payload }) {
            state.hotRecommendInfo = payload
        },
        changeLongforInfoAction(state,{payload}){
            state.longforInfo=payload
        },
        changePlusInfoAction(state,{payload}){
            state.plusInfo=payload
        },
    },
    /* extraReducers: (builder) => {
        builder.addCase(fetchHomeData.fulfilled, (state, action) => {
            //console.log(action.payload);
            state.highScoreInfo = action.payload
        })
    } */
})
export const {
            changeHighScrollInfoAction,
            changeGoodPriceInfoAction,
            changeDiscountInfoAction,
            changeHotRecommendInfoAction,
            changeLongforInfoAction,
            changePlusInfoAction,
        } = homeSlice.actions
export default homeSlice.reducer