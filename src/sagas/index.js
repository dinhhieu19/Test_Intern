import { all } from 'redux-saga/effects';
import {ItemSaga} from './ToDoListSaga'


export default function* rootSaga() {
  yield all([
    ...ItemSaga
  ]);
}