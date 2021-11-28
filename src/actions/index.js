import * as types from '../constants'

export function getListItem(payload){
    return({
        type: types.GET_ITEM_REQUEST,
        payload
    })
}
export function getListItemS(payload){
    return({
        type: types.GET_ITEM_SUCCESS,
        payload
    })
}
export function getListItemF(payload){
    return({
        type: types.GET_ITEM_FAILURE,
        payload
    })
}

export function getItem(payload){
    return({
        type: types.GET_ONE_ITEM_REQUEST,
        payload
    })
}
export function getItemS(payload){
    return({
        type: types.GET_ONE_ITEM_SUCCESS,
        payload
    })
}
export function getItemF(payload){
    return({
        type: types.GET_ONE_ITEM_FAILURE,
        payload
    })
}

export function postItem(payload){
    return({
        type: types.POST_ITEM_REQUEST,
        payload
    })
}
export function postItemS(payload){
    return({
        type: types.POST_ITEM_SUCCESS,
        payload
    })
}
export function postItemF(payload){
    return({
        type: types.POST_ITEM_FAILURE,
        payload
    })
}

export function deleteItem(payload){
    return({
        type: types.DELETE_ITEM_REQUEST,
        payload
    })
}
export function deleteItemS(payload){
    return({
        type: types.DELETE_ITEM_SUCCESS,
        payload
    })
}
export function deleteItemF(payload){
    return({
        type: types.DELETE_ITEM_FAILURE,
        payload
    })
}

export function putItem(payload){
    return({
        type: types.PUT_ITEM_REQUEST,
        payload
    })
}
export function putItemS(payload){
    return({
        type: types.PUT_ITEM_SUCCESS,
        payload
    })
}
export function putItemF(payload){
    return({
        type: types.PUT_ITEM_FAILURE,
        payload
    })
}