import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function usePageLimit() {
    const { search } = useLocation()
    const query = React.useMemo(() => new URLSearchParams(search), [search])
    const [pageLimit, setPageLimit] = useState({
        page: Number(query.get('page')) || 1,
        limit: Number(query.get('limit')) || 10,
    })

    useEffect(() => {
        setPageLimit({
            page: Number(query.get('page')) || 1,
            limit: Number(query.get('limit')) || 10,
        })
    }, [query])

    return [pageLimit, setPageLimit]
}

export default usePageLimit
