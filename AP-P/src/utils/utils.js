import * as XLSX from 'xlsx'
export function AddTypeToArr(oldArr, newArr) {
    // GETTING UPDATED ARRAY
    const updatedArr = []
    for (let i = 0; i < oldArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (oldArr[i].appModuleId === newArr[j].appModuleId) {
                if (
                    oldArr[i].get === newArr[j].get &&
                    oldArr[i].post === newArr[j].post &&
                    oldArr[i].put === newArr[j].put &&
                    oldArr[i].delete === newArr[j].delete
                ) {
                    continue
                } else if (
                    oldArr[i].get !== newArr[j].get ||
                    oldArr[i].post !== newArr[j].post ||
                    oldArr[i].put !== newArr[j].put ||
                    oldArr[i].delete !== newArr[j].delete
                ) {
                    updatedArr.push({ ...newArr[j], type: 'UPDATE' })
                }
            } else if (oldArr[i].appModuleId !== newArr[j].appModuleId) {
            }
        }
    }

    // GETTING DELETED ARR
    const deletedArr = []
    for (let i = 0; i < oldArr.length; i++) {
        const temp = []
        for (let j = 0; j < newArr.length; j++) {
            if (oldArr[i].appModuleId === newArr[j].appModuleId) {
                temp.push(true)
            } else {
                temp.push(false)
            }
        }
        if (temp.includes(true)) {
            continue
        } else {
            deletedArr.push({ ...oldArr[i], type: 'DELETE' })
        }
    }

    // GETTING New ARR
    const createArr = []
    for (let i = 0; i < newArr.length; i++) {
        const temp = []
        for (let j = 0; j < oldArr.length; j++) {
            if (newArr[i].appModuleId !== oldArr[j].appModuleId) {
                temp.push(true)
            } else {
                temp.push(false)
            }
        }
        if (temp.includes(false)) {
            continue
        } else {
            createArr.push({ ...newArr[i], type: 'CREATE' })
        }
    }
    return [...createArr, ...deletedArr, ...updatedArr]
}

export function findPercentage(total, value) {
    return parseInt((value * 100) / total)
}

export function getMonthName(monthNumber) {
    const date = new Date()
    date.setMonth(monthNumber - 1)
    return date.toLocaleString('en-US', {
        month: 'long',
    })
}

export function internationSystem(value, numbersAfterPoint = 1) {
    if (parseFloat(value) > 999 && parseFloat(value) < 999999) {
        return `${(parseFloat(value) / 1000).toFixed(
            (parseFloat(value) / 1000) % 1 === 0 ? 0 : numbersAfterPoint
        )} K`
    } else if (parseFloat(value) > 999999 && parseFloat(value) < 999999999) {
        return `${(parseFloat(value) / 1000000).toFixed(
            (parseFloat(value) / 1000000) % 1 === 0 ? 0 : numbersAfterPoint
        )} M`
    } else if (
        parseFloat(value) > 999999999 &&
        parseFloat(value) < 999999999999
    ) {
        return `${(parseFloat(value) / 1000000000).toFixed(
            (parseFloat(value) / 1000000000) % 1 === 0 ? 0 : numbersAfterPoint
        )} B`
    } else if (
        parseFloat(value) > 999999999999 &&
        parseFloat(value) < 999999999999999
    ) {
        return `${(parseFloat(value) / 1000000000000).toFixed(
            (parseFloat(value) / 1000000000000) % 1 === 0 ? 0 : numbersAfterPoint
        )} T`
    } else if (parseFloat(value) > 999999999999999) {
        return `${(parseFloat(value) / 1000000000000000).toFixed(
            (parseFloat(value) / 1000000000000000) % 1 === 0 ? 0 : numbersAfterPoint
        )} QT`
    } else {
        return value.toString()
    }
}

export function validatingAuthFields(fields, setError) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    const isValidEmail = emailRegex.test(fields.email)
    const isValidPassword = passwordRegex.test(fields.password)

    if (fields.email === '' || !isValidEmail) {
        if (fields.email === '') {
            setError((prev) => ({
                ...prev,
                email: 'Email is required',
            }))
        } else if (!isValidEmail) {
            setError((prev) => ({
                ...prev,
                email: 'Invalid email address',
            }))
        }
        return true
    }
    setError((prev) => ({
        ...prev,
        email: '',
    }))
    if (fields.password === '' || !isValidPassword) {
        if (fields.password === '') {
            setError((prev) => ({
                ...prev,
                password: 'Password is required',
            }))
        } else if (!isValidPassword) {
            setError((prev) => ({
                ...prev,
                password:
                    'Password must contain upper case letter & lower case letters & numbers and longer then 8 characters',
            }))
        }

        return true
    }
    setError((prev) => ({
        ...prev,
        password: '',
    }))
    return false
}
export function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    })
}
export function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

export function getSubCategoryByName(subCategoryName) {
    const subCategory = {
        House: 1,
        Flat: 2,
        'Upper Portion': 3,
        'Lower Portion': 4,
        'Farm House': 5,
        Room: 6,
        'Pent House': 7,
        'Residential Plot': 8,
        'Commercial Plot': 9,
        'Agricultual Land': 10,
        'Industial Land': 11,
        'Plot File': 12,
        'Plot Form': 13,
        Office: 14,
        Shop: 15,
        Warehouse: 16,
        Factory: 17,
        Building: 18,
        Other: 19,
    }
    for (const key in subCategory) {
        if (key === subCategoryName) {
            return subCategory[key]
        }
    }
}

const columns = {
    createPropertyWalletFeatureDto: [
        'buildInYear_createPropertyWalletFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years',
        'view_createPropertyWalletFeatureDto-text-1,2,3,4,5,14,15-View',
        'parkingSpaces_createPropertyWalletFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces',
        'doubleGazedWindow_createPropertyWalletFeatureDto-bool-1,2,3,4,5,14-Double GazedWindow',
        'centralAirConditioning_createPropertyWalletFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning',
        'centralHeating_createPropertyWalletFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Heating',
        'flooring_createPropertyWalletFeatureDto-select-1,2,3,4,5,14,15,16,18,19-Flooring',
        'otherMainFeatures_createPropertyWalletFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features',
        'furnished_createPropertyWalletFeatureDto-bool-1,2,3,4,5,14-Furnished',
        'lift_createPropertyWalletFeatureDto-bool-17,18,19-Lift',
        'elevators_createPropertyWalletFeatureDto-text-2,14,15,18,19-Elevators',
        'floorsInBuilding_createPropertyWalletFeatureDto-text-2,3,14,15,18,19-Floors In Building',
        'serviceElevatorsInBuilding_createPropertyWalletFeatureDto-bool-2,14,15,18,19-Service Elevators In Building',
        'lobbyInBuilding_createPropertyWalletFeatureDto-bool-2,14,18,19-Lobby In Building',
        'publicParking_createPropertyWalletFeatureDto-bool-18,19-Public Parking',
        'underGroundParking_createPropertyWalletFeatureDto-bool-18,19-Under Ground Parking',
        'numberOfUnit_createPropertyWalletFeatureDto-text-18-Number Of Unit',
        'electricityBackup_createPropertyWalletFeatureDto-select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup',
        'wasteDispsal_createPropertyWalletFeatureDto-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal',
        'floors_createPropertyWalletFeatureDto-number-1,2,3,4,5,14,15,16,17-Floors',
    ],
    createPropertyWalletBusinessAndCommunicationDto: [
        'broadbandInternetAccess_createPropertyWalletBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access',
        'satellite_createPropertyWalletBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite',
        'businessCenter_createPropertyWalletBusinessAndCommunicationDto-bool-2,14,18,19-Business Center',
        'conferenceInBuilding_createPropertyWalletBusinessAndCommunicationDto-bool-2,14,18,19-Conference In Building',
        'atmMachine_createPropertyWalletBusinessAndCommunicationDto-bool-2,14,15,18,19-Atm Machine',
        'intercom_createPropertyWalletBusinessAndCommunicationDto-bool-1,2,3,4,5,14,18,19-Intercom',
        'otherBusinessAndComunication_createPropertyWalletBusinessAndCommunicationDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication',
    ],
    createPropertyWalletOtherFacilityDto: [
        'maintenanceStaff_createPropertyWalletOtherFacilityDto-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff',
        'securityStaff_createPropertyWalletOtherFacilityDto-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff',
        'LaundryOrDryCleaning_createPropertyWalletOtherFacilityDto-bool-2,18,19-Laundry Or Dry Cleaning',
        'commmunalSharedKitchen_createPropertyWalletOtherFacilityDto-bool-2-Commmunal Shared Kitchen',
        'facilitiesForDisabled_createPropertyWalletOtherFacilityDto-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled',
        'petPolicy_createPropertyWalletOtherFacilityDto-select-2,14,18,19-Pet Policy',
        'cctvSecurity_createPropertyWalletOtherFacilityDto-bool-19-Cctv Security',
        'cafeteriaCanteen_createPropertyWalletOtherFacilityDto-19-Cafeteria Canteen',
        'other_createPropertyWalletOtherFacilityDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other',
    ],
    createPropertyWalletHealthCareRecreationalDto: [
        'sauna_createPropertyWalletHealthCareRecreationalDto-bool-1,2,3,4,5-Sauna',
        'jacuzzi_createPropertyWalletHealthCareRecreationalDto-bool-1,2,3,4,5-Jacuzzi',
        'lawnOrGarden_createPropertyWalletHealthCareRecreationalDto-bool-1,3,4,5,14,17-Lawn Or Garden',
        'swimmingPool_createPropertyWalletHealthCareRecreationalDto-bool-1,3,4,5-Swimming Pool',
        'other_createPropertyWalletHealthCareRecreationalDto-text-1,2,3,4,5,14,17-Other',
    ],
    createOtherNearByLocationDto: [
        'nearbySchools_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools',
        'nearbyHospitals_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals',
        'nearbyShoppingMalls_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls',
        'nearbyRestaurants_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants',
        'distanceFromAirport_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport',
        'nearbyTransport_createOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport',
        'other_createOtherNearByLocationDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other',
    ],
    createPropertyWalletRoomDto: [
        'DrawingRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Drawing Room',
        'DiningRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Dining Room',
        'studyRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Study Room',
        'prayerRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Prayer Room',
        'powderRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Powder Room',
        'gym_createPropertyWalletRoomDto-bool-1,2,3,4,5-Gym',
        'steamRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Steam Room',
        'loungeOrSittingRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Lounge Or Sitting Room',
        'laundryRoom_createPropertyWalletRoomDto-bool-1,2,3,4,5-Laundry Room',
        'Bedrooms_createPropertyWalletRoomDto-text-1,2,3,4,5-Bedrooms',
        'Bathrooms_createPropertyWalletRoomDto-text-1,2,3,4,5-Bathrooms',
        'servantQuarters_createPropertyWalletRoomDto-text-1,2,3,4,5,14-Servant Quarters',
        'kitchens_createPropertyWalletRoomDto-text-1,2,3,4,5-Kitchens',
        'storeRoom_createPropertyWalletRoomDto-text-1,2,3,4,5-Store Room',
        'otherRooms_createPropertyWalletRoomDto-text-1,2,3,4,5,14,15,16-Other Rooms',
        'rooms-text_createPropertyWalletRoomDto-14,15,16-Rooms',
    ],
    createPropertyWalletPlotFeatureDto: [
        'possesion_createPropertyWalletPlotFeatureDto-bool-8,9,10-Possesion',
        'disputed_createPropertyWalletPlotFeatureDto-bool-8,9,10-Disputed',
        'electricity_createPropertyWalletPlotFeatureDto-bool-8,10-Electricity',
        'suiGas_createPropertyWalletPlotFeatureDto-bool-8,9,10-Sui Gas',
        'irrigation_createPropertyWalletPlotFeatureDto-bool-10-Irrigation',
        'accessibleByRoad_createPropertyWalletPlotFeatureDto-10-Accessible By Road',
        'tubeWells_createPropertyWalletPlotFeatureDto-bool-10-Tube Wells',
        'perimeterFencing_createPropertyWalletPlotFeatureDto-bool-10-Perimeter Fencing',
        'landFertility_createPropertyWalletPlotFeatureDto-bool-10-Land Fertility',
        'bounaryLines_createPropertyWalletPlotFeatureDto-bool-10-Bounary Lines',
        'bounaryWall_createPropertyWalletPlotFeatureDto-bool-8,9-Bounary Wall',
        'corner-bool_createPropertyWalletPlotFeatureDto-8,9-Corner',
        'parkFacing_createPropertyWalletPlotFeatureDto-bool-8,9-Park Facing',
        'file_createPropertyWalletPlotFeatureDto-bool-8,9-File',
        'balloted_createPropertyWalletPlotFeatureDto-bool-8,9-Balloted',
        'sewerage_createPropertyWalletPlotFeatureDto-bool-8,9-Sewerage',
        'waterSupply_createPropertyWalletPlotFeatureDto-bool-8,9-Water Supply',
        'nearByWaterResources_createPropertyWalletPlotFeatureDto-text-10-Near By Water Resources',
        'otherLandFeature_createPropertyWalletPlotFeatureDto-text-10-Other Land Feature',
    ],

    createPropertyWalletProductFeatureDto: [
        'buildInYear_createPropertyWalletProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years',
        'view_createPropertyWalletProductFeatureDto-text-1,2,3,4,5,14,15-View',
        'parkingSpaces_createPropertyWalletProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces',
        'doubleGazedWindow_createPropertyWalletProductFeatureDto-bool-1,2,3,4,5,14-Double GazedWindow',
        'centralAirConditioning_createPropertyWalletProductFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning',
        'centralHeating_createPropertyWalletProductFeatureDto-bool-1,2,3,4,5,14,15,16,18,19-Central Heating',
        'flooring_createPropertyWalletProductFeatureDto-select-1,2,3,4,5,14,15,16,18,19-Flooring',
        'otherMainFeatures_createPropertyWalletProductFeatureDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features',
        'furnished_createPropertyWalletProductFeatureDto-bool-1,2,3,4,5,14-Furnished',
        'lift_createPropertyWalletProductFeatureDto-bool-17,18,19-Lift',
        'elevators_createPropertyWalletProductFeatureDto-text-2,14,15,18,19-Elevators',
        'floorsInBuilding_createPropertyWalletProductFeatureDto-text-2,3,14,15,18,19-Floors In Building',
        'serviceElevatorsInBuilding_createPropertyWalletProductFeatureDto-bool-2,14,15,18,19-Service Elevators In Building',
        'lobbyInBuilding_createPropertyWalletProductFeatureDto-bool-2,14,18,19-Lobby In Building',
        'publicParking_createPropertyWalletProductFeatureDto-bool-18,19-Public Parking',
        'underGroundParking_createPropertyWalletProductFeatureDto-bool-18,19-Under Ground Parking',
        'numberOfUnit_createPropertyWalletProductFeatureDto-text-18-Number Of Unit',
        'electricityBackup_createPropertyWalletProductFeatureDto-select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup',
        'wasteDispsal_createPropertyWalletProductFeatureDto-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal',
        'floors_createPropertyWalletProductFeatureDto-number-1,2,3,4,5,14,15,16,17-Floors',
    ],
    createPropertyWalletProductBusinessAndCommunicationDto: [
        'broadbandInternetAccess_createPropertyWalletProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access',
        'satellite_createPropertyWalletProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite',
        'businessCenter_createPropertyWalletProductBusinessAndCommunicationDto-bool-2,14,18,19-Business Center',
        'conferenceInBuilding_createPropertyWalletProductBusinessAndCommunicationDto-bool-2,14,18,19-Conference In Building',
        'atmMachine_createPropertyWalletProductBusinessAndCommunicationDto-bool-2,14,15,18,19-Atm Machine',
        'intercom_createPropertyWalletProductBusinessAndCommunicationDto-bool-1,2,3,4,5,14,18,19-Intercom',
        'otherBusinessAndComunication_createPropertyWalletProductBusinessAndCommunicationDto-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication',
    ],
    createPropertyWalletProductOtherFacilityDto: [
        'maintenanceStaff_createPropertyWalletProductOtherFacilityDto-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff',
        'securityStaff_createPropertyWalletProductOtherFacilityDto-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff',
        'LaundryOrDryCleaning_createPropertyWalletProductOtherFacilityDto-bool-2,18,19-Laundry Or Dry Cleaning',
        'commmunalSharedKitchen_createPropertyWalletProductOtherFacilityDto-bool-2-Commmunal Shared Kitchen',
        'facilitiesForDisabled_createPropertyWalletProductOtherFacilityDto-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled',
        'petPolicy_createPropertyWalletProductOtherFacilityDto-select-2,14,18,19-Pet Policy',
        'cctvSecurity_createPropertyWalletProductOtherFacilityDto-bool-19-Cctv Security',
        'cafeteriaCanteen_createPropertyWalletProductOtherFacilityDto-19-Cafeteria Canteen',
        'other_createPropertyWalletProductOtherFacilityDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other',
    ],
    createPropertyWalletProductHealthCareRecreationalDto: [
        'sauna_createPropertyWalletProductHealthCareRecreationalDto-bool-1,2,3,4,5-Sauna',
        'jacuzzi_createPropertyWalletProductHealthCareRecreationalDto-bool-1,2,3,4,5-Jacuzzi',
        'lawnOrGarden_createPropertyWalletProductHealthCareRecreationalDto-bool-1,3,4,5,14,17-Lawn Or Garden',
        'swimmingPool_createPropertyWalletProductHealthCareRecreationalDto-bool-1,3,4,5-Swimming Pool',
        'other_createPropertyWalletProductHealthCareRecreationalDto-text-1,2,3,4,5,14,17-Other',
    ],
    createPropertyWalletProductOtherNearByLocationDto: [
        'nearbySchools_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools',
        'nearbyHospitals_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals',
        'nearbyShoppingMalls_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls',
        'nearbyRestaurants_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants',
        'distanceFromAirport_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport',
        'nearbyTransport_createPropertyWalletProductOtherNearByLocationDto-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport',
        'other_createPropertyWalletProductOtherNearByLocationDto-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other',
    ],
    createPropertyWalletProductRoomDto: [
        'DrawingRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Drawing Room',
        'DiningRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Dining Room',
        'studyRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Study Room',
        'prayerRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Prayer Room',
        'powderRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Powder Room',
        'gym_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Gym',
        'steamRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Steam Room',
        'loungeOrSittingRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Lounge Or Sitting Room',
        'laundryRoom_createPropertyWalletProductRoomDto-bool-1,2,3,4,5-Laundry Room',
        'Bedrooms_createPropertyWalletProductRoomDto-text-1,2,3,4,5-Bedrooms',
        'Bathrooms_createPropertyWalletProductRoomDto-text-1,2,3,4,5-Bathrooms',
        'servantQuarters_createPropertyWalletProductRoomDto-text-1,2,3,4,5,14-Servant Quarters',
        'kitchens_createPropertyWalletProductRoomDto-text-1,2,3,4,5-Kitchens',
        'storeRoom_createPropertyWalletProductRoomDto-text-1,2,3,4,5-Store Room',
        'otherRooms_createPropertyWalletProductRoomDto-text-1,2,3,4,5,14,15,16-Other Rooms',
        'rooms-text_createPropertyWalletProductRoomDto-14,15,16-Rooms',
    ],
    createPropertyWalletProductPlotFeatureDto: [
        'possesion_createPropertyWalletProductPlotFeatureDto-bool-8,9,10-Possesion',
        'disputed_createPropertyWalletProductPlotFeatureDto-bool-8,9,10-Disputed',
        'electricity_createPropertyWalletProductPlotFeatureDto-bool-8,10-Electricity',
        'suiGas_createPropertyWalletProductPlotFeatureDto-bool-8,9,10-Sui Gas',
        'irrigation_createPropertyWalletProductPlotFeatureDto-bool-10-Irrigation',
        'accessibleByRoad_createPropertyWalletProductPlotFeatureDto-10-Accessible By Road',
        'tubeWells_createPropertyWalletProductPlotFeatureDto-bool-10-Tube Wells',
        'perimeterFencing_createPropertyWalletProductPlotFeatureDto-bool-10-Perimeter Fencing',
        'landFertility_createPropertyWalletProductPlotFeatureDto-bool-10-Land Fertility',
        'bounaryLines_createPropertyWalletProductPlotFeatureDto-bool-10-Bounary Lines',
        'bounaryWall_createPropertyWalletProductPlotFeatureDto-bool-8,9-Bounary Wall',
        'corner-bool_createPropertyWalletProductPlotFeatureDto-8,9-Corner',
        'parkFacing_createPropertyWalletProductPlotFeatureDto-bool-8,9-Park Facing',
        'file_createPropertyWalletProductPlotFeatureDto-bool-8,9-File',
        'balloted_createPropertyWalletProductPlotFeatureDto-bool-8,9-Balloted',
        'sewerage_createPropertyWalletProductPlotFeatureDto-bool-8,9-Sewerage',
        'waterSupply_createPropertyWalletProductPlotFeatureDto-bool-8,9-Water Supply',
        'nearByWaterResources_createPropertyWalletProductPlotFeatureDto-text-10-Near By Water Resources',
        'otherLandFeature_createPropertyWalletProductPlotFeatureDto-text-10-Other Land Feature',
    ],
}

export function getOptionsOfSelectByName(name) {
    const options = {
        flooring_createPropertyWalletFeatureDto: [
            { label: 'Tiles', value: 'Tiles' },
            { label: 'Marble', value: 'Marble' },
            { label: 'Wooden', value: 'Wooden' },
            { label: 'Chip', value: 'Chip' },
            { label: 'Cement', value: 'Cement' },
        ],
        flooring_createPropertyWalletProductFeatureDto: [
            { label: 'Tiles', value: 'Tiles' },
            { label: 'Marble', value: 'Marble' },
            { label: 'Wooden', value: 'Wooden' },
            { label: 'Chip', value: 'Chip' },
            { label: 'Cement', value: 'Cement' },
        ],
        electricityBackup_createPropertyWalletFeatureDto: [
            { label: 'Generator', value: 'Generator' },
            { label: 'Solar', value: 'Solar' },
            { label: 'Ups', value: 'Ups' },
            { label: 'none', value: 'none' },
        ],
        electricityBackup_createPropertyWalletProductFeatureDto: [
            { label: 'Generator', value: 'Generator' },
            { label: 'Solar', value: 'Solar' },
            { label: 'Ups', value: 'Ups' },
            { label: 'none', value: 'none' },
        ],
        petPolicy_createPropertyWalletOtherFacilityDto: [
            { label: 'Allowed', value: 'Allowed' },
            { label: 'Not Allowed', value: 'Not Allowed' },
        ],
        petPolicy_createPropertyWalletProductOtherFacilityDto: [
            { label: 'Allowed', value: 'Allowed' },
            { label: 'Not Allowed', value: 'Not Allowed' },
        ],
    }

    return options[name]
}

export function getSectionFromCategory(sectionName, subCategoryId) {
    return columns[sectionName]
        .map((item) => {
            const [name, type, categoriesIds, label] = item.split('-')
            if (
                categoriesIds
                    .split(',')
                    .map((id) => Number(id))
                    .includes(subCategoryId)
            ) {
                return {
                    label,
                    name,
                    type,
                }
            }
        })
        .filter((item) => item !== undefined)
}
export function isFunction(functionToCheck) {
    return (
        functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
    )
}
export const calculateAmount = (total, value) => {
    // if(value){
    let amount = (Number(value) / 100) * Number(total)
    if (isNaN(amount)) {
        return ''
    } else {
        return amount
    }
    // }
}
export const calculatePercentage = (total, value) => {
    let percentage = (Number(value) / Number(total)) * 100
    if (isNaN(percentage)) {
        return ''
    } else {
        return percentage
    }
}

export function areAllPropertiesNull(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== null) {
            return false
        }
    }
    return true
}

export function urltoFile(url, filename, mimeType) {
    if (url.startsWith('data:')) {
        var arr = url.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        var file = new File([u8arr], filename, { type: mime || mimeType })
        return Promise.resolve(file)
    }
    return fetch(url)
        .then((res) => res.arrayBuffer())
        .then((buf) => new File([buf], filename, { type: mimeType }))
}

export const downloadExcelFile = (data, title) => {
    const workSheet = XLSX.utils.json_to_sheet(data)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, title)
    // Generate buffer
    XLSX.write(workBook, { bookType: 'xlsx', type: 'buffer' })
    // Binary string
    XLSX.write(workBook, { bookType: 'xlsx', type: 'binary' })
    XLSX.writeFile(workBook, `${title}.xlsx`)
}
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}
