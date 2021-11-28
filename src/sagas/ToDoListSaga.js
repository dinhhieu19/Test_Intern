import * as types from "../constants";
import * as actions from "../actions/index";
import { put, takeEvery } from "redux-saga/effects";

function* getListItem({ payload }) {
  try {

    let storageItem = JSON.parse(localStorage.toDoList)

    let dataSearch = ''
    if(payload) {
      dataSearch = storageItem.filter((item) =>  {
        return item.title.toLowerCase().match(payload.toLowerCase())
      })
      console.log(dataSearch)
    }

    // console.log(storageItem)
    yield put(
      actions.getListItemS({
        listItem: dataSearch === '' ? storageItem : dataSearch
      })
    );
  } catch (e) {
    yield put(
      actions.getListItemF({
        errorMessage: e.errorMessage,
      })
    );
  }
}

function* postItem({ payload }) {
  try {
    // console.log(payload)
    let storageItemExis = null

    if(localStorage.toDoList){
      storageItemExis = JSON.parse(localStorage.toDoList)

      storageItemExis.push(payload)
    }

    localStorage.setItem('toDoList', JSON.stringify(storageItemExis || [payload]))

    yield put(actions.postItemS());

      yield put(
        actions.getListItem()
      );
    
  } catch (e) {
    yield put(
      actions.postItemF({
        errorMessage: e.errorMessage,
      })
    );
  }
}

function* deleteItem({ payload }) {
  try {
    const storageItemExis = JSON.parse(localStorage.toDoList)

    if(payload.length > 0){

      for (let i in payload){

        const index = storageItemExis.findIndex(item => item.id === i)

        storageItemExis.splice(index, 1)

        localStorage.setItem('toDoList', JSON.stringify(storageItemExis))
      }
    }else{

        const index = storageItemExis.findIndex(item => item.id === payload)

        storageItemExis.splice(index, 1)

        localStorage.setItem('toDoList', JSON.stringify(storageItemExis))
    }
    
    yield put(actions.deleteItemS());

    yield put(actions.getListItem())
  } catch (e) {
    yield put(
      actions.deleteItemF({
        errorMessage: e.errorMessage,
      })
    );
  }
}

function* putItem({ payload }) {
  try {
    // console.log(payload)

    const storageItemExis = JSON.parse(localStorage.toDoList)

    const index = storageItemExis.findIndex(item => item.id === payload.id)

    storageItemExis.splice(index, 1, payload)

    localStorage.setItem('toDoList', JSON.stringify(storageItemExis))

    yield put(actions.putItemS())
  
    yield put(actions.getListItem())
  } catch (e) {
    yield put(
      actions.putItemF({
        errorMessage: e.errorMessage,
      })
    );
  }
}

export const ItemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getListItem),
  takeEvery(types.POST_ITEM_REQUEST, postItem),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteItem),
  takeEvery(types.PUT_ITEM_REQUEST, putItem),
];
