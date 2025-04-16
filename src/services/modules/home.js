import airbRequest from "..";

export function getHomeGoodPriceData() {
    return airbRequest.get({ url: "/home/goodprice" })
}
export function getHomeHighScoreData() {
    return airbRequest.get({ url: "/home/highscore" })
} 
export function getHomeDiscountData() {
    return airbRequest.get({ url: "/home/discount" })
} 
export function getHomeHotRecommendData() {
    return airbRequest.get({url: "/home/hotrecommenddest"})
}
export function getHomeLongforData() {
    return airbRequest.get({url: "/home/longfor"})
}
export function getHomePlusData() {
    return airbRequest.get({url: "/home/plus"})
}