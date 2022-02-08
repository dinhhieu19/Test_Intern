import React, {useState} from 'react';
import NewTask from './NewTask'


const ToDoList = (props) => {
    // let [listOptions, setListOptions] = useState(3)
    // let arrayOptions = []
    
    // for(let i = 0; i < listOptions; i++) {
    //     arrayOptions.push(i)
    // }

    // let listInputOptions = arrayOptions.map((options, index)=>{
    //     return(
    //         <div key={index}>
    //             {options}
    //             <input/>
    //         </div>
    //     )
    // })


    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [date, setDate] = useState('')
    const [piority, setPiority] = useState('')
    const [titleSearch, setTitleSearch] = useState('')
    const [checkedList, setCheckedList] = useState([])

    // console.log(checkedList)

    let toDoList = []



    if(props.listItem){
        toDoList = props.listItem.map((item, index) =>{
            return(
                <div className="list_item" key={index}>
                    <div className="list_item__show">
                        <div className="list_item__title">
                            <input 
                                className="list_item__checkbox"
                                type="checkbox" 
                                onChange={(e)=>{
                                    if(e.target.checked){
                                        setCheckedList(prevState => {
                                            return [
                                                ...prevState,
                                                item.id
                                            ]
                                        })
                                    }
                                    else{
                                        console.log('OUT')
                                    }
                                }} 
                            />
                            <div className='title' >
                                {item.title}
                            </div>
                        </div>
                        <div className='group_button'>
                            <button 
                                className="btn btn--detail"
                                onClick={()=>{
                                    if(document.querySelector('.show')){
                                        if(document.querySelector(`#updateForm-${item.id}.show`)){
                                            document.querySelector(`#updateForm-${item.id}.show`).classList.remove('show')
                                        }else{
                                            document.querySelector('.show').classList.remove('show')
                                            document.getElementById(`updateForm-${item.id}`).classList.add('show')
                                        }
                                    }
                                    else{
                                        document.getElementById(`updateForm-${item.id}`).classList.add('show')
                                    }
                                    
                                    setId(item.id)
                                    setTitle(item.title)
                                    setDes(item.des)
                                    setDate(item.date)
                                    setPiority(item.piority)

                                }} 
                            >
                                Detail
                            </button>
                            <button 
                                className="btn btn--remove"
                                onClick={()=>{
                                    props.deleteItem(item.id)
                                    setTitleSearch('')
                                }} >
                                Remove
                            </button>
                        </div>
                    </div>
                    
                    <div 
                        className='list_item__hidden' 
                        id={`updateForm-${item.id}`} 
                        hidden
                    >
                        <NewTask
                            putItem={props.putItem}
                            idProps={id}
                            type='Update'
                            titleProps={title}
                            desProps={des}
                            dateProps={date}
                            piorityProps={piority}
                        />
                    </div>
                </div>
                
            )
        })
    }

    return (

        // <>
        //     <button onClick={()=>{
        //         setListOptions(++listOptions)
        //     }}>
        //         ADD
        //     </button>

        //     {listInputOptions}
        // </>
        <div className="App">
            <div  className='NewTask'>
            <h1 className='header'>New Task</h1>
                <div className='form_input'>
                    <NewTask 
                        postItem={props.postItem}
                        type='Add'
                    />
                </div>
            </div>
            <div className="ToDoList">
                <h1 className='header'>To Do List</h1>
                <div className="form_input">
                    <div>
                        <input 
                            className="input_field"
                            onChange={(e) => {
                                props.initLoad(e.target.value)
                                setTitleSearch(e.target.value)
                            }}
                            placeholder="Search..."
                            value={titleSearch}
                        />
                    </div>
                    <div>
                        {toDoList}
                    </div>
                </div>
                {checkedList.length > 0 ? 
                    <div className="bulk_action">
                        <div className="list_item__title">
                            <div className='title'>
                                Bulk Actions:
                            </div>
                        </div>
                        <div className="bulk_action--buttons">
                            <button 
                                className="btn btn--done"
                                onClick={() =>{
                                    setCheckedList([])
                                }}
                            >
                                Done
                            </button>
                            <button 
                                className="btn btn--remove"
                                onClick={()=>{
                                    props.deleteItem(checkedList)
                                    setCheckedList([])
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                : 
                    ''
                }
            </div>

           
        </div>
    )
}

export default ToDoList;