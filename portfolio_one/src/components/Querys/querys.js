import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { getDatabase, ref, get } from 'firebase/database';
import { analytics, database } from '../../config/firebase';
import './query.css'
const Querys = () => {
    const [getQuery, setGetQuery] = useState({})
    const [keys, setKeys] = useState([])
    useEffect(async () => {
        try {
            const dbRef = ref(database, '/query');
            const snapshot = await get(dbRef);
            // console.log('snapshot',snapshot)
            if (snapshot.exists()) {
                const data = snapshot.val();
                setGetQuery(data)
            } else {
                console.log('runin else')
            }
        } catch (error) {
            console.log('error', error)
        }

    }, []);
    useEffect(() => {
        for (const property in getQuery) {
            keys.push(getQuery[property])
        }
    }, [getQuery,keys])

    return (
        <table id="customers">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone no</th>
                <th>Query</th>
            </tr>
            <tbody> {keys?.map((item, i) => {
                console.log(item.data);
                return <tr key={i}>
                    <td>{item?.data?.name}</td>
                    <td>{item?.data?.email}</td>
                    <td>{item?.data?.phoneNo}</td>
                    <td>{item?.data?.message}</td>
                </tr>
            })}</tbody>


        </table>
    )
}

export default Querys