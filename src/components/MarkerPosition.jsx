import { useEffect, useMemo } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import MapIcon from "../assets/images/icon-location.svg";

import { Icon, divIcon } from 'leaflet';

const MarkerPosition = ({ address }) => {
const position = useMemo(() => {
    return [address.location.lat, address.location.lng]
      }, [address.location.lat, address.location.lng])
      const map = useMap()
    
    useEffect(() => {
      map.flyTo(position, 13, {
        animate: true,
      })
    }, [map, position])


    const customIcon = new Icon({
        iconUrl: MapIcon,
        iconSize: [40, 40]
    });
    
    const CreateCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`
        })
    }

  return (
    <>
        <Marker icon={customIcon} position={position} iconCreateFunction={CreateCustomClusterIcon}>
            <Popup>
                A pretty css popup
            </Popup>
        </Marker>
    </>
  )
}

export default MarkerPosition