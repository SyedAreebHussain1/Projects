import { combineReducers, configureStore } from '@reduxjs/toolkit'
import signinSlice from './slices/Auth/signinSlice'
import GetRoutesSlice from './slices/GetRoutesSlice'
import getPropertiesOverviewSlice from './slices/Dashboard/getPropertiesOverviewSlice'
import getUsersInfoMonthlySlice from './slices/Dashboard/getUsersInfoMonthlySlice'
import getAllDiscountSlice from './slices/Discount/getAllDiscountSlice'
import deleteDiscountDataByIdSlice from './slices/Discount/deleteDiscountDataByIdSlice'
import addDiscountSlice from './slices/Discount/addDiscountSlice'
import uploadAdvertisementDiscountSlice from './slices/Discount/uploadAdvertisementDiscountSlice'
import discountUpdateSlice from './slices/Discount/discountUpdateSlice'
import getAllLeadsForAdminSlice from './slices/Lead/getAllLeadsForAdminSlice'
import getReferralSlice from './slices/Referral/getReferralSlice'
import getAllAuthUserSlice from './slices/AppUsers/getAllAuthUserSlice'
import getAllAuthUserNoPaginationSlice from './slices/AppUsers/getAllAuthUserNoPaginationSlice'
import getAuthUserSlice from './slices/AppUsers/getAuthUserSlice'
import editAdminUsersRoleSlice from './slices/Settings/UserManagement/editAdminUsersRoleSlice'
import getUserManagementListSlice from './slices/Settings/UserManagement/getUserManagementListSlice'
import withUserByRoleIdSilce from './slices/Settings/Role/withUserByRoleIdSilce'
import getSupportFormSilce from './slices/Support/Queries/getSupportFormSilce'
import getUnverifiedUsersSlice from './slices/Support/UnverifiedUser/getUnverifiedUsersSlice'
import getAllSupportPaymentRequestsSlice from './slices/Support/PaymentRequest/getAllSupportPaymentRequestsSlice'
import getPWIAdminPaymentAssistanceRequestSlice from './slices/Support/PaymentRequest/getPWIAdminPaymentAssistanceRequestSlice'
import getPWPAdminPaymentAssistanceRequestSlice from './slices/Support/PaymentRequest/getPWPAdminPaymentAssistanceRequestSlice'
import getAllSubsForAdminSlice from './slices/SubscriptionManagement/ActiveSubscription/getAllSubsForAdminSlice'
import getPwPackagesSlice from './slices/SubscriptionManagement/Packages/getPwPackagesSlice'
import uploadAdvertisementPackageSlice from './slices/SubscriptionManagement/Packages/uploadAdvertisementPackageSlice'
import createPwPackagesSlice from './slices/SubscriptionManagement/Packages/createPwPackagesSlice'
import uploadAdvertisementPackageIconSlice from './slices/SubscriptionManagement/Packages/uploadAdvertisementPackageIconSlice'
import getAllAddOnsSlice from './slices/SubscriptionManagement/Addons/getAllAddOnsSlice'
import deleteAddOnSlice from './slices/SubscriptionManagement/Addons/deleteAddOnSlice'
import createAddOnSlice from './slices/SubscriptionManagement/Addons/createAddOnSlice'
import updateAddOnSlice from './slices/SubscriptionManagement/Addons/updateAddOnSlice'
import getAllCoordinatorSlice from './slices/ProjectCoordinator/getAllCoordinatorSlice'
import getProjectsSlice from './slices/ProjectCoordinator/getProjectsSlice'
import getLogsByProjectIdForAdminSlice from './slices/ProjectCoordinator/getLogsByProjectIdForAdminSlice'
import suspendCoordinatorSlice from './slices/ProjectCoordinator/suspendCoordinatorSlice'
import getProjectsForAssignSlice from './slices/ProjectCoordinator/getProjectsForAssignSlice'
import proCooAssignProjectSlice from './slices/ProjectCoordinator/proCooAssignProjectSlice'
import getProCooRoleListSlice from './slices/ProjectCoordinator/getProCooRoleListSlice'
import pcSignUpSlice from './slices/ProjectCoordinator/pcSignUpSlice'
const rootSlices = combineReducers({
    auth: signinSlice,
    getRoutes: GetRoutesSlice,
    getPropertiesOverview: getPropertiesOverviewSlice,
    getUsersInfoMonthly: getUsersInfoMonthlySlice,
    getAllDiscount: getAllDiscountSlice,
    deleteDiscountDataById: deleteDiscountDataByIdSlice,
    addDiscount: addDiscountSlice,
    uploadAdvertisementDiscount: uploadAdvertisementDiscountSlice,
    discountUpdate: discountUpdateSlice,
    getAllLeadsForAdmin: getAllLeadsForAdminSlice,
    getReferral: getReferralSlice,
    getAllAuthUser: getAllAuthUserSlice,
    getAllAuthUserNoPagination: getAllAuthUserNoPaginationSlice,
    getAuthUser: getAuthUserSlice,
    editAdminUsersRole: editAdminUsersRoleSlice,
    getUserManagementList: getUserManagementListSlice,
    withUserByRoleId: withUserByRoleIdSilce,
    getSupportForm: getSupportFormSilce,
    getUnverifiedUsers: getUnverifiedUsersSlice,
    getAllSupportPaymentRequests: getAllSupportPaymentRequestsSlice,
    getPWIAdminPaymentAssistanceRequest: getPWIAdminPaymentAssistanceRequestSlice,
    getPWPAdminPaymentAssistanceRequest: getPWPAdminPaymentAssistanceRequestSlice,
    getAllSubsForAdmin: getAllSubsForAdminSlice,
    getPwPackages: getPwPackagesSlice,
    uploadAdvertisementPackage: uploadAdvertisementPackageSlice,
    createPwPackages: createPwPackagesSlice,
    uploadAdvertisementPackageIcon: uploadAdvertisementPackageIconSlice,
    getAllAddOns: getAllAddOnsSlice,
    deleteAddOn: deleteAddOnSlice,
    createAddOn: createAddOnSlice,
    updateAddOn: updateAddOnSlice,
    getAllCoordinator: getAllCoordinatorSlice,
    getProjectsCO: getProjectsSlice,
    getLogsByProjectIdForAdmin: getLogsByProjectIdForAdminSlice,
    suspendCoordinator: suspendCoordinatorSlice,
    getProjectsForAssign: getProjectsForAssignSlice,
    proCooAssignProject: proCooAssignProjectSlice,
    getProCooRoleList: getProCooRoleListSlice,
    pcSignUp: pcSignUpSlice,
})
const store = configureStore({
    middleware: (serialData) =>
        serialData({
            serializableCheck: false,
        }),
    // non serial data issue fixed
    reducer: rootSlices,
})
export const resetState = () => {
    return rootSlices(undefined, {})
}

export default store