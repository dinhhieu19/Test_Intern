import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import ToDoList from '../components/ToDoList'
import * as actions from '../actions/index'


const Container = (props) => {
    useEffect(() =>{
        props.initLoad()
    }, [])


    return (
        <ToDoList {...props} />
    );
};

const mapStateToProps = (state) => {
    return{
        listItem: state.item.listItem,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        initLoad: (data) =>{
            dispatch(actions.getListItem(data))
        },
        postItem: (data) =>{
            dispatch(actions.postItem(data))
        },
        deleteItem: (data) =>{
            dispatch(actions.deleteItem(data))
        },
        putItem: (data) =>{
            dispatch(actions.putItem(data))
        },
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(Container);