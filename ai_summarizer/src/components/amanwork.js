const columns = {
    createPropertyWalletFeatureDto: [
        "buildInYear-text-1,2,3,4,5,14,15,16,17,18,19-Build In Years",
        "view-text-1,2,3,4,5,14,15-View",
        "parkingSpaces-text-1,2,3,4,5,14,15,16,17,18,19-Parking Spaces",
        "doubleGazedWindow-bool-1,2,3,4,5,14-Double GazedWindow",
        "centralAirConditioning-bool-1,2,3,4,5,14,15,16,18,19-Central Air Conditioning",
        "centralHeating-bool-1,2,3,4,5,14,15,16,18,19-Central Heating",
        "flooring-text,select-1,2,3,4,5,14,15,16,18,19-Flooring",
        "otherMainFeatures-text-1,2,3,4,5,14,15,16,17,18,19-Other Main Features",
        "furnished-bool-1,2,3,4,5,14-Furnished",
        "lift-bool-17,18,19-Lift",
        "elevators-text-2,14,15,18,19-Elevators",
        "floorsInBuilding-text-2,3,14,15,18,19-Floors In Building",
        "serviceElevatorsInBuilding-bool-2,14,15,18,19-Service Elevators In Building",
        "lobbyInBuilding-bool-2,14,18,19-Lobby In Building",
        "publicParking-bool-18,19-Public Parking",
        "underGroundParking-bool-18,19-Under Ground Parking",
        "numberOfUnit-text-18-Number Of Unit",
        "electricityBackup-text,select-1,2,3,4,5,14,15,16,17,18,19-Electricity Backup",
        "wasteDispsal-bool-1,2,3,4,5,14,15,16,17,18,19-Waste Dispsal",
        "floors-number-1,2,3,4,5,14,15,16,17-Floors",
    ],
    createPropertyWalletBusinessAndCommunicationDto: [
        "broadbandInternetAccess-bool-1,2,3,4,5,14,15,16,17,18,19-Broadband Internet Access",
        "satellite-bool-1,2,3,4,5,14,15,16,17,18,19-Satellite",
        "businessCenter-bool-2,14,18,19-Business Center",
        "conferenceInBuilding-bool-2,14,18,19-Conference In Building",
        "atmMachine-bool-2,14,15,18,19-Atm Machine",
        "intercom-bool-1,2,3,4,5,14,18,19-Intercom",
        "otherBusinessAndComunication-text-1,2,3,4,5,14,15,16,17,18,19-Other Business And Comunication"
    ],
    createPropertyWalletOtherFacilityDto: [
        "maintenanceStaff-bool-1,2,3,4,5,14,15,16,17,18,19-Maintenance Staff",
        "securityStaff-bool-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Security Staff",
        "laundryOrDryCleaning-bool-2,18,19-Laundry Or Dry Cleaning",
        "commmunalSharedKitchen-bool-2-Commmunal Shared Kitchen",
        "facilitiesForDisabled-bool-1,2,3,4,5,14,17,18,19-Facilities For Disabled",
        "petPolicy-text,select-2,14,18,19-Pet Policy",
        "cctvSecurity-bool-19-Cctv Security",
        "cafeteriaCanteen-19-Cafeteria Canteen",
        "other-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other"
    ],
    createPropertyWalletHealthCareRecreationalDto: [
        "sauna-bool-1,2,3,4,5-Sauna",
        "jacuzzi-bool-1,2,3,4,5-Jacuzzi",
        "lawnOrGarden-bool-1,3,4,5,14,17-Lawn Or Garden",
        "swimmingPool-bool-1,3,4,5-Swimming Pool",
        "other-text-1,2,3,4,5,14,17-Other",
    ],
    createOtherNearByLocationDto: [
        "nearbySchools-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Schools",
        "nearbyHospitals-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Hospitals",
        "nearbyShoppingMalls-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Shopping Malls",
        "nearbyRestaurants-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Restaurants",
        "distanceFromAirport-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Distance From Airport",
        "nearbyTransport-number-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Nearby Transport",
        "other-text-1,2,3,4,5,8,9,10,14,15,16,17,18,19-Other"
    ],
    createPropertyWalletRoomDto: [
        "drawingRoom-bool-1,2,3,4,5-Drawing Room",
        "diningRoom-bool-1,2,3,4,5-Dining Room",
        "studyRoom-bool-1,2,3,4,5-Study Room",
        "prayerRoom-bool-1,2,3,4,5-Prayer Room",
        "powderRoom-bool-1,2,3,4,5-Powder Room",
        "gym-bool-1,2,3,4,5-Gym",
        "steamRoom-bool-1,2,3,4,5-Steam Room",
        "loungeOrSittingRoom-bool-1,2,3,4,5-Lounge Or Sitting Room",
        "laundryRoom-bool-1,2,3,4,5-Laundry Room",
        "bedrooms-text-1,2,3,4,5-Bedrooms",
        "bathrooms-text-1,2,3,4,5-Bathrooms",
        "servantQuarters-text-1,2,3,4,5,14-Servant Quarters",
        "kitchens-text-1,2,3,4,5-Kitchens",
        "storeRoom-text-1,2,3,4,5-Store Room",
        "otherRooms-text-1,2,3,4,5,14,15,16-Other Rooms",
        "rooms-text-14,15,16-Rooms"
    ],
    createPropertyWalletPlotFeatureDto: [
        "possesion-bool-8,9,10-Possesion",
        "disputed-bool-8,9,10-Disputed",
        "electricity-bool-8,10-Electricity",
        "suiGas-bool-8,9,10-Sui Gas",
        "irrigation-bool-10-Irrigation",
        "accessibleByRoad-10-Accessible By Road",
        "tubeWells-bool-10-Tube Wells",
        "perimeterFencing-bool-10-Perimeter Fencing",
        "landFertility-bool-10-Land Fertility",
        "bounaryLines-bool-10-Bounary Lines",
        "bounaryWall-bool-8,9-Bounary Wall",
        "corner-bool-8,9-Corner",
        "parkFacing-bool-8,9-Park Facing",
        "file-bool-8,9-File",
        "balloted-bool-8,9-Balloted",
        "sewerage-bool-8,9-Sewerage",
        "waterSupply-bool-8,9-Water Supply",
        "nearByWaterResources-text-10-Near By Water Resources",
        "otherLandFeature-text-10-Other Land Feature"
    ]
};