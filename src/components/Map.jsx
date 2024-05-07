import { MapContainer, TileLayer } from "react-leaflet";


import MarkerPosition from "./MarkerPosition";

import "leaflet/dist/leaflet.css";



const Map = ({ address, setAddress }) => {


  return (
    <section>
        { address && 
            <>
                <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer 
                        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        />

                        <MarkerPosition address={address}/>
                </MapContainer>
            </>
        
        }
    </section>
  )
}

export default Map