export const API = {
    auth: {
        signin: 'admin-user-auth/signin',
    },
    roles: {
        getRoutes: 'admin-roles/get-route',
        withUserByRoleId: 'admin-roles/withUserByRoleId',
    },
    dashboard: {
        getPropertiesOverview: "dashboard/propertiesOverview",
        getUsersInfoMonthly: "dashboard/getUsersInfoMonthly"
    },
    discount: {
        getAllDiscount: "discount/getAllDiscount",
        deleteDiscountDataById: 'discount/deleteDiscountDataById',
        addDiscount: "discount",
        discountUpdate: 'discount/discountUpdate',
        uploadAdvertisementDiscount: "promotion/uploadAdvertisement"
    },
    promotion: {
        uploadAdvertisement: "promotion/uploadAdvertisement"
    },
    leads: {
        getAllLeadsForAdmin: "lead/getAllLeadsForAdmin"
    },
    referral: {
        getReferral: "app-user/getReferral"
    },
    appUsers: {
        getAllAuthUser: "app-user/getAllAuthUser",
        getAuthUser: 'app-user/getAuthUser',
        getAllAuthUserNoPagination: 'app-user/getAllAuthUser-NoPagination',
    },
    userMangement: {
        getUserManagementList: 'app-user/getUserManagementList',
        editAdminUsersRole: 'app-user/editAdminUsersRole',
    },
    queries: {
        getSupportForm: "support-form/getSupportForm"
    },
    unverified: {
        getUnverifiedUsers: 'admin-user-auth/get/unverified/users/list',
    },
    paymentRequest: {
        getPWPAdminPaymentAssistanceRequest:
            'pwp-admin-payment-assistance-request/getPWPAdminPaymentAssistanceRequest',
        getPWIAdminPaymentAssistanceRequest:
            'pwi-admin-payment-assistance-request/getPWIAdminPaymentAssistanceRequest',
        getAllSupportPaymentRequests:
            'token-lock-inventory/getAllSupportPaymentRequests',
    },
    subscriptionManagement: {
        getAllSubsForAdmin: "pwpackages/getAll/SubsForAdmin",
        getPwPackages: "pwpackages",
        createPwPackages: "pwpackages",
        getAllAddOns: "pwpackages/getAll/AddOns",
        deleteAddOn: "pwpackages/deleteAddOn",
        createAddOn: "pwpackages/createAddOn",
        updateAddOn: "pwpackages/updateAddOn",
    },
    generateImgUrl: {
        uploadAdvertisement: "promotion/uploadAdvertisement"
    },
    projectCoordinator: {
        getAllCoordinator: "pro-coo-auth/getAllCoordinator",
        getProjects: "pro-coo-assign-project/getProjects",
        getLogsByProjectIdForAdmin: "pro-coo-visit-logs/getLogsByProjectIdForAdmin",
        suspendCoordinator: "pro-coo-auth/suspendCoordinator",
        getProjectsForAssign: "pro-coo-assign-project/getProjectsForAssign",
        proCooAssignProject: "pro-coo-assign-project/proCooAssign/Project",
        getProCooRoleList: "pro-coo-auth/getProCooRoleList",
        pcSignUp: "pro-coo-auth/PcSignUp",
    }
}
