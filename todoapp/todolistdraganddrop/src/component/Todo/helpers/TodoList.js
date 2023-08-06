import React, { useRef, useState } from 'react'
import EditModal from './EditModal';

const TodoList = ({ setData, data }) => {
  const [show, setShow] = useState(false);
  const [updatedData, setUpdatedData] = useState();
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)
  const handleSort = () => {
    let _dataItems = [...data]
    const draggedItemContent = _dataItems.splice(dragItem.current, 1)[0]
    _dataItems.splice(dragOverItem.current, 0, draggedItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setData(_dataItems)
  }

  function handleDelete(e, id, index) {
    e.preventDefault()
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data.splice(index, 1)
        handleSort()
      }
    }
  }
  const handleShow = (val, index) => {
    setUpdatedData({ item: val, key: index })
    setShow(true);
  }

  return <>
    <EditModal
      show={show}
      setShow={setShow}
      data={data}
      updatedData={updatedData}
    />
    <div className='list-container'>
      {data?.map((val, i) => {
        if (val?.detail?.title) {
          return <div key={i} className='list-item' draggable
            onDragStart={(e) => (dragItem.current = i)}
            onDragEnter={(e) => (dragOverItem.current = i)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <i className='fa-solid fa-bars'></i>
            <div className='flex justify-between'>
              <div>
                <h3 >{val?.detail?.title}</h3>
                <h3 >{val?.detail?.description}</h3>
                <h3 >{val?.detail?.time}</h3>
              </div>
              <div className='gap-2'>
                <span className='cursor-pointer' onClick={(e) => handleDelete(e, val?.id, i)}>Delete</span>&nbsp;&nbsp;
                <span className='cursor-pointer' onClick={(e) => handleShow(val, i)}>Edit</span>
              </div>
            </div>
          </div>
        }
      })
      }
    </div>
  </>
}

export default TodoList