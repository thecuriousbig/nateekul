import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import { MAP } from '@constants'

const MapContainer: React.FC = () => {
  const [center] = useState({ lat: MAP.GEO.LAT, lng: MAP.GEO.LNG })
  const [zoom] = useState(MAP.ZOOM)

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
      onClick={() => window.open(process.env.GOOGLE_MAPS_URL)}
    >
      <Marker lat={center.lat} lng={center.lng} name="" color="red" />
    </GoogleMapReact>
  )
}

export default MapContainer
