import React from 'react';

import "./card.css"

const Card = ({ address, setAddress }) => {
  return (
    <div className="card">
        {
            address && 
            <div className="card_container" key={address.ip}>
                <div className="address_details">
                    <p className="address">IP address</p>
                    <h3 className="address_desc">{address.ip}</h3>
                </div>
                <div className="address_details">
                    <p className="address">Location</p>
                    <h3 className="address_desc">{address.location.city}, {address.location.region}<br />{address.location.geonameId}</h3>
                </div>
                <div className="address_details">
                    <p className="address">Timezone</p>
                    <h3 className="address_desc">UTC {address.location.timezone}</h3>
                </div>
                <div className="address_details-last">
                    <p className='address'>ISP</p>
                    <h3 className="address_desc">{address.isp}</h3>
                </div>
            </div>
        }
  </div>
  )
}

export default Card