import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';
import { getReadListApi, deleteSingleDataApi } from '../../../redux/api/CrudTwo';
import ViewDetail from './ViewDetail/ViewDetail';
import Table from 'react-bootstrap/Table';


// function ReadCard() {



function ResponsiveExample() {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [viewSigleUser, setViewSigleUser] = useState()
    const [deleteUser, setDeleteUser] = useState()
    const iconStyle = {
        fontSize: '30px',
    };
    const { data, loading } = useSelector((state) => state?.getReadListSlice)
    const deleteSingleDataSlice = useSelector((state) => state?.deleteSingleDataSlice)
    const handleDelete = (id) => {
        if (id) {
            deleteSingleDataApi(dispatch, id)
        }
        setDeleteUser(id)
        // getReadListApi(dispatch)
    }
    useEffect(() => {
        getReadListApi(dispatch)
    }, [deleteUser, dispatch])
    return (
        <Table responsive>
            <thead>
                <tr>
                    {/* <th>#</th> */}
                    {data?.map((val, index) => {

                        // console.log(val)
                        return <>
                            {/* <th key={index}>{val.firstName}</th> */}
                        </>
                    }
                    )}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>2</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td>3</td>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );
}

export default ResponsiveExample;





//     if (loading) {
//         return <h2 className='m-auto w-[50%] p-[10px]'>Loading..</h2>
//     }
//     return (
//         <div className='m-auto w-[50%] p-[10px]'>
//             <ViewDetail
//                 show={modalShow}
//                 viewSigleUser={viewSigleUser}
//                 onHide={() => setModalShow(false)}
//             />
//             {data && data?.map((val, i) => {
//                 return <Card
//                     bg={"Light".toLowerCase()}
//                     key={i}
//                     text={"Light".toLowerCase() === 'light' ? 'dark' : 'white'}
//                     className="mb-2"
//                 >
//                     <Card.Body>
//                         <Card.Title>Name: {val?.firstName + ' ' + val?.lastName}</Card.Title>
//                         <Card.Text>Email: {val?.email}</Card.Text>
//                         <Card.Text>Phone no:{val?.phoneNo}</Card.Text>
//                         <Card.Text>Gender: {val?.gender}</Card.Text>
//                         <div className='flex justify-between'>
//                             <Button variant="primary" onClick={() => [setModalShow(true), setViewSigleUser(val)]}>
//                                 View Detail {val?.firstName}
//                             </Button>
//                             <div><FaUserEdit style={iconStyle} /></div>
//                             <div className='cursor-pointer' onClick={() =>   handleDelete(val?.id)}><MdDelete style={iconStyle} /></div>
//                         </div>
//                     </Card.Body>
//                 </Card>
//             })}
//         </div>
//     );
// }

// export default ReadCard;
