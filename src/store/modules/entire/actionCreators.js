import { getEntireListData } from "@/services";
import * as actionTypes from "./constants";

export function changeCurrentPageAction(currentPage) {
    return {
        type: actionTypes.CHANGE_CURRENT_PAGE,
        currentPage,
    }
}
export function changeRoomListAction(roomList) {
    return {
        type: actionTypes.CHANGE_ROOM_LIST,
        roomList,
    }
}
export function changeTotalCountAction(totalCount) {
    return {
        type: actionTypes.CHANGE_TOTAL_COUNT,
        totalCount,
    }
}
export function changeShowRoomsCoverAction(isLoading) {
    return {
        type:actionTypes.CHANGE_IS_LOADING,
        isLoading
    }
}
export function fetchEntireListAction() {
    return async (dispatch, getState) => {
        dispatch(changeShowRoomsCoverAction(true))
        window.scrollTo(0,0)
        const currentPage = getState().entire.currentPage
        const size = getState().entire.sizeOfGetEntireList
        const offset = currentPage*size
        const res = await getEntireListData(offset, size)
        console.log(res.data);
        const roomList = res.data.list
        const totalCount = res.data.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
        dispatch(changeShowRoomsCoverAction(false))
    }
}