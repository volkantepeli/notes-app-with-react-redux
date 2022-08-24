
import { useSelector } from 'react-redux'
import { deleteNote } from '../redux/forms/formSlice';
import { useDispatch } from 'react-redux/es/exports';

import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function FormList() {
   

  const items = useSelector((state) => state.forms.items);
  const dispatch = useDispatch();
  const handleDestroy = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNote(id));
    }
  };
  return (
    
    <div >
        <ul>
        {
            items.map((item) => (
                <li key={item.id} className='formLi'>
                    <div  >
                        <div className={item.color}>
                        {item.note}
                        </div>
                        
                        <div className='deneme'>
                        <IconButton onClick={() => handleDestroy(item.id)} aria-label="delete">
                             <DeleteIcon />
                        </IconButton>
                        </div>
                         
                    </div>
                </li>
            ))
        }
    </ul>
    </div>
   
  )
}

export default FormList



