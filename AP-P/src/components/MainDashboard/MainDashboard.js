import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { getRoutesApi } from '../../redux/api/GetRoutesApi'
import { useDispatch, useSelector } from 'react-redux'
import NavbarPage from '../../Pages/Navbar/NavbarPage'
import SideBar from './helpers/SideBar/SideBar'

const { Content } = Layout
const MainDashboard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getRoutes = useSelector((state) => state?.getRoutes)
    const getMenuEvent = (route) => {
        for (let i = 0; i < getRoutes?.data?.routes?.length; i++) {
            if (route?.key === getRoutes?.data?.routes[i]?.key) {
                navigate(getRoutes?.data?.routes[i]?.value)
            }
        }
    }
    useEffect(() => {
        getRoutesApi(dispatch)
    }, [dispatch])
    return (
        <Layout
            style={{
                minHeight: '100vh',
                backgroundColor: '#ffffff',
            }}
        >
            <SideBar getMenuEvent={getMenuEvent} getRoutes={getRoutes} />
            <Layout
                style={{
                    background: '#ffffff',
                    border: '1px solid rgba(102, 112, 133, 0.09)',
                }}
                className="site-layout"
            >
                <div style={{ border: '1px solid rgba(102, 112, 133, 0.09)' }}>
                    <NavbarPage />
                </div>
                <Content>
                    <Routes>
                        {getRoutes?.data?.routes?.map((route, i) => (
                            <Route
                                key={`${route.value}i`}
                                path={route.value}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainDashboard