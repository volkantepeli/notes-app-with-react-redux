import { useState } from 'react'
import { addNote } from '../redux/forms/formSlice';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'

function Form() {
  const [color , setColor] = useState('bgBlack');
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addNote({ id: nanoid(), note, color}));
      setNote('');
  }
  const onClick = (e) => {
    e.preventDefault();
    setColor('bgGreen');
  }
  const onClick1 = (e) => {
    e.preventDefault();
    setColor('bgBlack');
  }
  const onClick2 = (e) => {
    e.preventDefault();
    setColor('bgYellow');
  }
 
  return (
    <form >
      <textarea 
      placeholder='add notes'
      value={note}
      onChange= {(e) => setNote(e.target.value)} />
      <button onClick={handleSubmit}>ADD</button>
      <button onClick={onClick1}>BLACK</button>
      <button onClick={onClick}>GREEN</button>
      <button onClick={onClick2}>YELLOW</button>
    </form>
  )
}

export default Form