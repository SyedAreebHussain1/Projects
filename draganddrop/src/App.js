import React, { useEffect, useRef, useState } from 'react';
// import React from 'react';
import './App.css';


function App() {
  const [fruitItems, setFruitItems] = useState([])
  const [dataItem, setDataItem] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  // save referenece for dragItem and dragOverItem
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)



  // handle drag sorting
  const handleSort = () => {
    console.log('fruitItems', fruitItems)
    // duplicate items
    let _fruiteItems = [...fruitItems]
    console.log('_fruiteItems', _fruiteItems)

    // remove and save the dragged item content
    const draggedItemContent = _fruiteItems.splice(dragItem.current, 1)[0]

    console.log('draggedItemContent',draggedItemContent)

    //switch the position
    _fruiteItems.splice(dragOverItem.current, 0, draggedItemContent)

    // reset the postion ref
    dragItem.current = null
    dragOverItem.current = null


    // updated the actual array
    setFruitItems(_fruiteItems)

  }
  function handleAdd(e) {
    e.preventDefault()
    if (dataItem !== '') {
      if (dataItem.length > 0) {
        setFruitItems((prev) => [...prev, dataItem])
        setDataItem('')
        setErrorMsg('')
      } else {
        setErrorMsg('Mnini 10 digits')
      }
    }
  }
  return <div className='app'>
    <h2>Fruit List</h2>
    <div className='input-group'>
      <input type='text' name='fruitName' value={dataItem} onChange={(e) => setDataItem(e.target.value)} placeholder='e.g Banana' />
      <p>{errorMsg}</p>
      <button className='btn' onClick={handleAdd}>Add Item</button>
    </div>

    {/* List container //TODO into component */}
    <div className='list-container'>
      {fruitItems?.map((val, i) => (
        <div key={i} className='list-item' draggable
          onDragStart={(e) => (dragItem.current = i)}
          onDragEnter={(e) => (dragOverItem.current = i)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <i className='fa-solid fa-bars'></i>
          <h3 >{val}</h3>
        </div>
      ))
      }
    </div>
  </div>
}
export default App;