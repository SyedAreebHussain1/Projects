import React, { useEffect, useState } from 'react'
import { useModal } from '../../../../utils/hooks/useModal'
import AddonSingle from './AddonSingle'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAddOnsApi } from '../../../../redux/api/SubscriptionManagement/Addons'
import CreateAddonModal from './CreateAddonModal'
import UpdateAddonModal from './UpdateAddonModal'

const AddonMain = ({ visible, toggle }) => {
    const [isUpdateModal, toggleUpdate] = useModal()
    const dispatch = useDispatch()
    const [editData, setEditData] = useState()

    const getAllAddOns = useSelector((state) => state?.getAllAddOns)
    const updateAddOn = useSelector((state) => state?.updateAddOn)
    const deleteAddOn = useSelector((state) => state?.deleteAddOn)
    const createAddOn = useSelector((state) => state?.createAddOn)
    const [pageLimit, setPageLimit] = useState({
        page: 1,
        limit: 1000,
    })

    function handleUpdate(data) {
        setEditData(data)
        toggleUpdate()
    }
    useEffect(() => {
        getAllAddOnsApi(dispatch, pageLimit)
    }, [deleteAddOn?.data, updateAddOn.data, createAddOn?.data])
    return (<>
        {visible && <CreateAddonModal visible={visible} toggle={toggle} />}
        {isUpdateModal && <UpdateAddonModal visible={isUpdateModal} toggle={toggleUpdate} editData={editData} />}
        <div className="h-[60vh]  bg-white">
            <Spin
                spinning={deleteAddOn?.loading || getAllAddOns.loading}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[22px] p-6 relative">
                    {getAllAddOns?.data &&
                        getAllAddOns?.data?.data?.items?.length > 0 ? (
                        getAllAddOns?.data?.data?.items?.map((item, key) => (
                            <AddonSingle data={item}
                                handleUpdate={handleUpdate}
                                key={key} />
                        ))
                    ) : (
                        <h2 className="text-[40px] font-black absolute left-[50%] translate-x-[-50%] opacity-30 cursor-default select-none">
                            No Data
                        </h2>
                    )}

                </div>
            </Spin>
        </div>
    </>
    )
}

export default AddonMain