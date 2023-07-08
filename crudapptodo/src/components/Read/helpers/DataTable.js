import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { RiLayoutGridFill } from 'react-icons/ri';
import ListUserTableColums from '../../../tableColums/ListUserTableColums.json'
import { getReadListApi, deleteSingleDataApi } from '../../../redux/api/CrudTwo';
import ViewDetail from './ViewDetail/ViewDetail';
import Updated from './UpdateDetail/Updated';

function DataTable() {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [modalShowUpdate, setModalShowUpdate] = useState(false);
    const [viewSigleUser, setViewSigleUser] = useState()
    const iconStyle = {
        fontSize: '22px',
    };
    const { data, loading } = useSelector((state) => state?.getReadListSlice)
    const deleteSingleDataSlice = useSelector((state) => state?.deleteSingleDataSlice)
    const handleDelete = (id) => {
        if (id) {
            deleteSingleDataApi(dispatch, id, onSuccess)
        }
    }
    function onSuccess() {
        getReadListApi(dispatch)
    }
    useEffect(() => {
        getReadListApi(dispatch)
    }, [dispatch])

    if (loading) {
        return 'Loading...'
    }
    return (
        <div className='p-[24px]'>
            <ViewDetail
                show={modalShow}
                onHide={() => setModalShow(false)}
                data={viewSigleUser}
                
            />
            <Updated
                show={modalShowUpdate}
                onHide={() => setModalShowUpdate(false)}
                data={viewSigleUser}
            />
            <Table responsive >
                <thead>
                    <tr>
                        {ListUserTableColums.reverse().map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{rowIndex + 1}</td>
                            <td>{row?.firstName}</td>
                            <td>{row?.lastName}</td>
                            <td>{row?.phoneNo}</td>
                            <td>{row?.email}</td>
                            <td>{row?.age}</td>
                            <td>{row?.gender}</td>
                            <td className='gap-2 flex'> <span onClick={() => [setModalShowUpdate(true), setViewSigleUser(row)]}> <FaUserEdit className='cursor-pointer' style={iconStyle} /></span>  <span onClick={() => handleDelete(row.id)} className='cursor-pointer'><MdDelete style={iconStyle} /></span> <span className='cursor-pointer' onClick={() => [setModalShow(true), setViewSigleUser(row)]}><RiLayoutGridFill style={iconStyle} /></span></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
export default DataTable;

