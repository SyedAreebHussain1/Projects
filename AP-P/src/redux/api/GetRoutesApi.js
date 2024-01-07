import { API } from '../../config/apiEndPoints'
import {
    getRoutes,
    getRoutesSuccess,
    getRoutesFailure,
} from '../slices/GetRoutesSlice'
import { getError, getRequest } from '../../utils/baseApi'
import { getItem } from '../../utils/routes'
import { resetState } from '../store'
import { signinFailure } from '../slices/Auth/signinSlice'

// pages
import DashboardPage from '../../Pages/Dashboard/DashboardPage'
import DiscountCodePage from '../../Pages/DiscountCode/DiscountCodePage'
import LeadPage from '../../Pages/Lead/LeadPage'
import ReferralPage from '../../Pages/Referral/ReferralPage'
import AppUsersPage from '../../Pages/AppUsers/AppUsersPage'
import UserManagementPage from '../../Pages/Settings/UserManagementPage'
import RolePage from '../../Pages/Settings/RolePage'
import UnverifiedUserPage from '../../Pages/Support/UnverifiedUserPage'
import QueriesPage from '../../Pages/Support/QueriesPage'
import PaymentRequestPage from '../../Pages/Support/PaymentRequestPage'
import ActiveSubscriptionPage from '../../Pages/SubscriptionManagement/ActiveSubscriptionPage'
import AddonsPage from '../../Pages/SubscriptionManagement/AddonsPage'
import PackagesPage from '../../Pages/SubscriptionManagement/PackagesPage'
import ProjectCoordinatorPage from '../../Pages/ProjectCoordinator/ProjectCoordinatorPage'
import CoViewProjectPage from '../../Pages/ProjectCoordinator/CoViewProjectPage'
import LogsPage from '../../Pages/ProjectCoordinator/LogsPage'
import SurveyPage from '../../Pages/Survey/SurveyPage'
import AgencyPage from '../../Pages/Agency/AgencyPage'
import AgencyReviewPage from '../../Pages/Agency/AgencyReviewPage'


// icons 
import dashboardIcon from "../../components/assest/icon/dashboard-icon/0.6.png"
import lead from '../../components/assest/icon/dashboard-icon/0.5.png'
import refeeralsIcon from '../../components/assest/icon/dashboard-icon/refeerals.png'
import appusers from '../../components/assest/icon/dashboard-icon/appusers.png'
import UserDetailPage from '../../Pages/AppUsers/UserDetailPage'
import setting from '../../components/assest/icon/dashboard-icon/0.1.png'
import supportIcon from '../../components/assest/icon/supporticon.png'
import subscriptionIcon from '../../components/assest/icon/subs.png'
import OwnersPage from '../../Pages/SmartSellingPoint/OwnersPage'
import InvestorsPage from '../../Pages/SmartSellingPoint/InvestorsPage'


function getComponentByRoute(route) {
    const components = {
        dashboard: <DashboardPage />,
        "discount-code": <DiscountCodePage />,
        leads: <LeadPage />,
        referrals: <ReferralPage />,
        "app-users": <AppUsersPage />,
        'settings/roles': <RolePage />,
        'settings/user-management': <UserManagementPage />,
        "support/unverified-user": <UnverifiedUserPage />,
        "support/queries": <QueriesPage />,
        "support/payment-request": <PaymentRequestPage />,
        "subscription-management/packages": <PackagesPage />,
        "subscription-management/addons": <AddonsPage />,
        "subscription-management/active-subscription": <ActiveSubscriptionPage />,
        "project-coodinator": <ProjectCoordinatorPage />,
        "survay": <SurveyPage />,
        "sales-service-point/owners": <OwnersPage />,
        "sales-service-point/investors": <InvestorsPage />,
        "agency": <AgencyPage />,
    }
    return components[route]
}
function convertToKebabCase(val) {
    return val.split(' ').join('-').toLowerCase()
}

export async function getRoutesApi(dispatch) {
    dispatch(getRoutes())
    try {
        const routes = {
            items: [],
            items2: [],
            routes: [
                {
                    key: 'url1',
                    value: 'dashboard/app-user/:id',
                    component: <UserDetailPage />,
                },
                {
                    key: 'url2',
                    value: 'project-coodinator/project-detail/:id',
                    component: <CoViewProjectPage />,
                },
                {
                    key: 'url3',
                    value: 'project-coodinator/project-detail/:id/logs/:logId',
                    component: <LogsPage />,
                },
                {
                    key: 'url4',
                    value: 'agency/:id',
                    component: <AgencyReviewPage />,
                },
            ]
        }
        let { data } = await getRequest(API.roles.getRoutes)
        data?.data?.result?.map((module) => {
            for (let key in module) {
                // console.log(module);
                if (key === 'Dashboard') {
                    routes.items.push(
                        getItem(
                            'Dashboard',
                            'dashboard',
                            <img src={dashboardIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Discount Code") {
                    routes.items.push(
                        getItem("Discount Code",
                            convertToKebabCase(key),
                            <img src={dashboardIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Agency") {
                    routes.items.push(
                        getItem("Agency",
                            convertToKebabCase(key),
                            <img src={dashboardIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Survay") {
                    routes.items.push(
                        getItem("Survay",
                            convertToKebabCase(key),
                            <img src={dashboardIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Project Coodinator") {
                    routes.items.push(
                        getItem("Project Coodinator",
                            convertToKebabCase(key),
                            <img src={dashboardIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Leads") {
                    routes.items.push(
                        getItem("Leads",
                            convertToKebabCase(key),
                            <img src={lead} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "Referrals") {
                    routes.items.push(
                        getItem("Referrals",
                            convertToKebabCase(key),
                            <img src={refeeralsIcon} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === "App Users") {
                    routes.items.push(
                        getItem("App Users",
                            convertToKebabCase(key),
                            <img src={appusers} alt="" />
                        )
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `${convertToKebabCase(mod.label)}`,
                            value: `${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === 'Sales Service Point') {
                    routes.items.push(
                        getItem('Sales Service Point', key, <img src={setting} alt="" />, [
                            ...module[key].map((mod, i) =>
                                getItem(mod.label, `sales-service-point/${convertToKebabCase(mod.label)}`)
                            ),
                        ])
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `sales-service-point/${convertToKebabCase(mod.label)}`,
                            value: `sales-service-point/${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `sales-service-point/${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }

                if (key === 'Setting') {
                    routes.items2.push(
                        getItem('Setting', 'sub4', <img src={setting} alt="" />, [
                            ...module[key].map((mod, i) =>
                                getItem(mod.label, `settings/${convertToKebabCase(mod.label)}`)
                            ),
                        ])
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `settings/${convertToKebabCase(mod.label)}`,
                            value: `settings/${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `settings/${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === 'Support') {
                    routes.items2.push(
                        getItem('Support', key, <img src={supportIcon} alt="" />, [
                            ...module[key].map((mod, i) =>
                                getItem(mod.label, `support/${convertToKebabCase(mod.label)}`)
                            ),
                        ])
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `support/${convertToKebabCase(mod.label)}`,
                            value: `support/${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `support/${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
                if (key === 'Subscription Management') {
                    routes.items.push(
                        getItem('Subscription Management', key, <img src={subscriptionIcon} alt="" />, [
                            ...module[key].map((mod, i) =>
                                getItem(mod.label, `subscription-management/${convertToKebabCase(mod.label)}`)
                            ),
                        ])
                    )
                    routes.routes.push(
                        ...module[key].map((mod) => ({
                            key: `subscription-management/${convertToKebabCase(mod.label)}`,
                            value: `subscription-management/${convertToKebabCase(mod.label)}`,
                            component: getComponentByRoute(
                                `subscription-management/${convertToKebabCase(mod.label)}`
                            ),
                        }))
                    )
                }
            }
        })
        dispatch(getRoutesSuccess(routes))
    } catch (error) {
        localStorage.clear();
        dispatch(signinFailure(null))
        resetState()
        getError(error)
        dispatch(getRoutesFailure(error?.response?.data))
    }
}