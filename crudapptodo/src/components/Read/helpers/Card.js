import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { getReadListApi } from '../../../redux/api/CrudTwo';
import ViewDetail from './ViewDetail/ViewDetail';

function ReadCard() {
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [viewSigleUser, setViewSigleUser] = useState()
    const { data, loading } = useSelector((state) => state.getReadListSlice)
    useEffect(() => {
        getReadListApi(dispatch)
    }, [])
    if (loading) {
        return <h2 className='m-auto w-[50%] p-[10px]'>Loading..</h2>
    }
    return (
        <div className='m-auto w-[50%] p-[10px]'>
            <ViewDetail
                show={modalShow}
                viewSigleUser={viewSigleUser}
                onHide={() => setModalShow(false)}
            />
            {data?.map((val, i) => {
                return <Card
                    bg={"Light".toLowerCase()}
                    key={i}
                    text={"Light".toLowerCase() === 'light' ? 'dark' : 'white'}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>{val?.firstName + ' ' + val?.lastName}</Card.Title>
                        <Card.Text>{val?.email}</Card.Text>
                        <Card.Text>{val?.phoneNo}</Card.Text>
                        <Card.Text>{val?.gender}</Card.Text>
                        <Button variant="primary" onClick={() => [setModalShow(true), setViewSigleUser(val)]}>
                            View
                        </Button>
                    </Card.Body>
                </Card>

            })}
        </div>
    );
}

export default ReadCard;