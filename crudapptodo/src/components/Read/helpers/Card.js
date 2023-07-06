import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { getReadListApi } from '../../../redux/api/CrudTwo';
import CustomModal from './CustomModal/CustomModal';

function ReadCard() {
    const dispatch = useDispatch()
    const [showPopup, setShowPopup] = useState(false)
    const [dataProp, setDataProp] = useState()
    const { data, loading } = useSelector((state) => state.getReadListSlice)
    useEffect(() => {
        getReadListApi(dispatch)
    }, [])
    if (loading) {
        return <h2 className='m-auto w-[50%] p-[10px]'>Loading..</h2>
    }
    return (
        <div className='m-auto w-[50%] p-[10px]'>
            {/* <CustomModal /> */}
            {showPopup && <CustomModal data={dataProp} showPopup={showPopup} setShowPopup={setShowPopup} />}
            {data?.map((val, i) => {
                return <Card
                    bg={"Light".toLowerCase()}
                    key={i}
                    text={"Light".toLowerCase() === 'light' ? 'dark' : 'white'}
                    className="mb-2"
                >
                    <Card.Header>{i + 1}</Card.Header>
                    <Card.Body>
                        <Card.Title>{val?.firstName + ' ' + val?.lastName}</Card.Title>
                        <Card.Text>{val?.email}</Card.Text>
                        <Card.Text>{val?.phoneNo}</Card.Text>
                        <Card.Text>{val?.gender}</Card.Text>
                        <button className="card-link" onClick={() => [setDataProp(val), setShowPopup(true)]}>View</button>
                    </Card.Body>
                </Card>

            })}
        </div>
    );
}

export default ReadCard;