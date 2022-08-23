import React from 'react'
import { useSelector } from 'react-redux'

function FormList() {
  const items = useSelector((state) => state.forms.items);
  return (
    <ul>
        {
            items.map((item) => (
                <li key={item.id}>
                    <div className={item.color}>
                        <label>{item.note}</label>
                    </div>

                </li>
            ))
        }
    </ul>
  )
}

export default FormList