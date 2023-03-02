import React, { useState } from 'react'
import { RiDeleteBack2Fill } from "react-icons/ri"
import { FiEdit2 } from "react-icons/fi"
import './ListItem.css'

function ListItem({text,id,list,setList}) {
    const [edit, setEdit] = useState(true);
    const [itemValue, setItemValue] = useState(text);
    const deleteHandler = (key) => {
      const filterList = list.filter((item) => item.id !== key);
      setList(filterList);
    };
    const editHandler = () => {
      setEdit(!edit);
    };
    return (
        <li id='listItem' className='border p-1 mb-2 rounded'>
            <div className='d-flex gap-2 justify-content-between' >
                <input  value={itemValue}
        onChange={(e) => setItemValue(e.target.value)}
        
        readOnly={edit} type="text" className='px-3 input-w-80 border-0' />
                <div className='d-flex gap-2'>
                    <button onClick={editHandler} className='btn btn-dark py-1 px-2'><FiEdit2 /></button>
                    <button onClick={() => deleteHandler(id)} className='btn btn-dark py-1 px-2'><RiDeleteBack2Fill /></button>
                </div>
            </div>
        </li>
    )
}

export default ListItem