import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/plots'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersInfoMonthlyApi } from '../../../redux/api/Dashboard'
import { getMonthName } from '../../../utils/utils'
const Chart = ({ yearCustomerAppCount }) => {
    const dispatch = useDispatch()
    let verified = true
    const getUsersInfoMonthly = useSelector((state) => state?.getUsersInfoMonthly)
    const [tempState, setTempState] = useState([])
    useEffect(() => {
        getUsersInfoMonthlyApi(dispatch)
    }, [dispatch])
    useEffect(() => {
        let tempArr = []
        let i = 0;
        let yearCheck;
        let monthCheck;
        let arr = [
            {
                year: yearCustomerAppCount,
                monthName: "Jan",
                value: 0,
                count: 0,
                type: "Verified",
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Feb',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Mar',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Apr',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'May',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Jun',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Jul',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Aug',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Sept',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Oct',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Nov',
                value: 0,
                count: 0,
                type: "Verified"
            },
            {
                year: yearCustomerAppCount,
                monthName: 'Dec',
                value: 0,
                count: 0,
                type: "Verified"
            },
        ]

        for (; i < getUsersInfoMonthly?.data?.arr?.length; i++) {
            yearCheck = getUsersInfoMonthly?.data?.arr[i]?.m1.split('-')[0]
            monthCheck = getUsersInfoMonthly?.data?.arr[i]?.m1.split('-')[1]
            if (yearCheck == yearCustomerAppCount) {
                arr.splice(monthCheck - 1, 1,
                    {
                        year: yearCheck.toString(),
                        monthName: getMonthName(+monthCheck),
                        value: +getUsersInfoMonthly?.data?.arr[i]?.verified,
                        count: +getUsersInfoMonthly?.data?.arr[i]?.verified,
                        type: "Verified"
                    },
                    {
                        year: yearCheck.toString(),
                        monthName: getMonthName(+monthCheck),
                        value: +getUsersInfoMonthly?.data?.arr[i]?.unVerified,
                        count: +getUsersInfoMonthly?.data?.arr[i]?.unVerified,
                        type: "UnVerified"
                    })
            }
            else {
                i++
            }
        }
        arr.map((item) => {
            tempArr.push(item)
        })
        setTempState(tempArr)
    }, [getUsersInfoMonthly?.data, yearCustomerAppCount])
    const config = {
        data: tempState,
        isStack: true,
        xField: "monthName",
        yField: "value",
        seriesField: "type",
        color: ["#27a3a373", "#27a3a3"],
        columnStyle: ({ type }) => {
            if (type === "Verified") {
                return { redius: [20, 20, 0, 0] }
            }
        },
    }

    return <Column  {...config} />
}

export default Chart