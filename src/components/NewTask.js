import React, {useState, useEffect} from 'react';

const NewTask = (props) => {
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [piority, setPiority] = useState('2')
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const {idProps, titleProps, desProps, piorityProps, dateProps} = props

    useEffect(()=>{
        titleProps !== undefined ? setTitle(titleProps) : setTitle('')
        desProps !== undefined ? setDes(desProps) : setDes('')
        dateProps !== undefined ? setDate(dateProps) : setDate(new Date().toISOString().slice(0, 10))
        piorityProps !== undefined ? setPiority(piorityProps) : setPiority('2')
    }, [titleProps, desProps, piorityProps, dateProps])

    
    return (
        <div>
            <div>
                <div>
                    <input
                        id='input_title'
                        className='input_field'
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        placeholder='Add new task...'
                        value={title}
                    />
                </div>
                <div>
                    <div>
                        <label className='name_task_item'>Description</label>
                    </div>
                    <textarea 
                        className='input_area'
                        onChange={(e) => {
                            setDes(e.target.value)
                        }}
                        value={des}
                    />
                </div>
                <div className='flex'>
                    <div className='flex__item'>
                        <div>
                            <label className='name_task_item'>Due Date</label>
                        </div>
                        <input 
                            className='item__input'
                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                            type='date'
                            value={date}
                            min={new Date().toISOString().slice(0, 10)}
                        />
                    </div>
                    <div className='flex__item'>
                        <div>
                            <label className='name_task_item'>Piority</label>
                        </div>
                        <select 
                            className='item__input'
                            onChange={(e)=>{
                                setPiority(e.target.value)
                            }}
                            value={piority}
                        >
                            <option value='1'>Low</option>
                            <option value='2'>Normal</option>
                            <option value='3'>High</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button 
                        className='button_action'
                        onClick={()=> {
                            const random = Math.floor(Math.random() * 100000000)

                            if(props.type === 'Add'){
                                if(title === ''){
                                    window.alert('Please enter a title')

                                    document.getElementById('input_title').focus()
                                }else{
                                    props.postItem({
                                        id: random,
                                        title,
                                        des,
                                        date,
                                        piority
                                    })
                                    if(document.querySelector('.show')){
                                        document.querySelector('.show').classList.remove('show')
                                    }
                                    setTitle('')
                                    setDes('')
                                    setPiority('2')
                                    setDate(new Date().toISOString().slice(0, 10))
                                }
                            }else{
                                if(title === ''){
                                    window.alert('Please enter a title')

                                    document.getElementById('input_title').focus()
                                }else{
                                    props.putItem({
                                        id: idProps,
                                        title,
                                        des,
                                        date,
                                        piority
                                    })
    
                                    if(document.querySelector('.show')){
                                        document.querySelector('.show').classList.remove('show')
                                    }
                                }
                                
                            }
                    }} >
                        {props.type}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewTask;