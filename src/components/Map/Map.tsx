import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'

const googleMapLink =
  'https://www.google.com/maps/place/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B8%81%E0%B8%B8%E0%B8%A5+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/@13.6356336,100.508573,17z/data=!3m1!4b1!4m5!3m4!1s0x30e2a3b8e137383f:0xf19b07f7cbd68683!8m2!3d13.6356336!4d100.5107617?hl=en'

const MapContainer: React.FC = () => {
  const [center, setCenter] = useState({ lat: 13.635636, lng: 100.510765 })
  const [zoom, setZoom] = useState(11)

  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      zoomControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
    }
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY, language: 'th' }}
      defaultCenter={center}
      defaultZoom={zoom}
      options={getMapOptions}
      onClick={() => window.open(googleMapLink)}
    >
      <Marker lat={center.lat} lng={center.lng} name="บริษัท นทีกุล จำกัด" color="red" />
    </GoogleMapReact>
  )
}

export default MapContainer
