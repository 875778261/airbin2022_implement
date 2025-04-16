import airbRequest from "..";

export function getEntireListData(offset = 0, size = 20) {
    return airbRequest.get({
        url: 'entire/list',
        params: {
            offset,
            size
        }
    })
}