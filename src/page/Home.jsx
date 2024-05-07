import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Map from '../components/Map';
import RightArrow from "../assets/images/icon-arrow.svg";

import "./home.css";


const url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_FQmqbSCvW7I7FwHLINhucNJtZkI20&ipAddress=8.8.8.8";

const Home = () => {
 const [address, setAddress] = useState(null);
 const [ipAddress, setIpAddress] = useState("");
//  const [toggle, setToggle] = useState(false);

 const checkIpAddress =
 /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
const checkDomain =
 /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/


 useEffect(() => {
  try {
    const getInitialData = async() => {
      const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=192.212.174.101`);
      const data = await res.json();
      setAddress(data);
      // console.log(data);
    }
    getInitialData();

  } catch (error) {
    console.trace(error);
  }
 },[]);

 async function getIPAddress()  {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&${checkIpAddress.test(ipAddress) ? `ipAddress=${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : ""
    }`
  );
    const data = await res.json();
    setAddress(data);
 }

 const handleSubmit = (e) => {
  e.preventDefault();
  getIPAddress();
  setAddress("");
 }
 


  return (
    <main>
        <div className="ip_address-bar">
            <h1 className="main_heading">IP Address Tracker</h1>
              <form onSubmit={handleSubmit} className="form_field">
                <input type="text"
                name="ipaddress"
                placeholder="Search for any IP address or domain"
                id="ipaddress"
                value={ipAddress}
                onChange={(e)=>setIpAddress(e.target.value)}
                required
                autoComplete="off"
                />
                <button type='submit' className="btn">
                  <img src={RightArrow} alt="Call to Action image" />
                </button>
              </form>
        </div>
        <Card address={address} setAddress={setAddress} />
        <Map address={address} setAddress={setAddress}/>
    </main>
  )
}

export default Home