import React from "react";
import {
    GoogleMap,
    Marker,
    StandaloneSearchBox,
} from '@react-google-maps/api'

import useGoogleMap from "../../../../utils/hooks/useGoogleMap"

const containerStyle = {
    width: '100%',
    height: '150px',
}
const center = {
    lat: 24.860966,
    lng: 66.990501,
}

function MapLocation({ markers, setMarkers, setSelectedPlace }) {
    const [searchBox, setSearchBox] = React.useState(null)
    const [isLoaded] = useGoogleMap()

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ])

        const geocoder = new window.google.maps.Geocoder()
        geocoder.geocode(
            { location: { lat: event.latLng.lat(), lng: event.latLng.lng() } },
            (results, status) => {
                if (status === 'OK') {
                    if (results[0]) {
                        setSelectedPlace({
                            address: results[0].formatted_address,
                            city: getCityFromGeocode(results[0]),
                        })
                    } else {
                        window.alert('No results found')
                    }
                } else {
                    window.alert('Geocoder failed due to: ' + status)
                }
            }
        )
    }, [])

    const getCityFromGeocode = (geocode) => {
        for (let component of geocode.address_components) {
            if (component.types.includes('locality')) {
                return component.long_name
            }
        }
        return ''
    }
    const onLoad = (ref) => setSearchBox(ref)
    const onPlacesChanged = () => {
        const results = searchBox.getPlaces()
        setSelectedPlace({
            address: results[0].formatted_address,
            city: getCityFromGeocode(results[0]),
        })

        setMarkers((current) => [
            {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
                time: new Date(),
            },
        ])
    }

    return isLoaded ? (
        <div style={{ width: '100%', height: '150px' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={8}
                onClick={onMapClick}
                options={{
                    fullscreenControl: true,
                    fullscreenControlOptions: {
                        position: 'TOP_RIGHT',
                        fullscreenControl: false,
                        content: 'Full Screen',
                        index: 1,
                    },
                }}
            >
                <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                    <input
                        type="text"
                        placeholder="Enter the Location..."
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: 'absolute',
                            left: '50%',
                            marginLeft: '-120px',
                        }}
                    />
                </StandaloneSearchBox>
                {markers.map((marker) => (
                    <Marker
                        key={`${marker.lat}-${marker.lng}`}
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : (
        <></>
    )
}

export default MapLocation