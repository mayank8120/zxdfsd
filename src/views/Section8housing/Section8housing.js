import React, { useState, useEffect } from 'react'
import Searchboxsection8 from './Searchboxsection8'
import ResearchYourApt from '../../containers/ResearchYourApt'
import PropertiesNearby from '../Index/PropertiesNearby'
import PopularCities from '../../containers/PopularCities'
import FeaturedRentalsInCity from '../../containers/FeaturedRentalsInCity'
import ProudPartners from '../../containers/ProudPartners'
import EmailSubs from '../../containers/EmailSubs'
import AffordableHousingByRegions from '../Index/AffordableHousingByRegions'
import Footer from '../../containers/Footer'
import axios from 'axios';

const Section8housing = () => {

    { document.title = "Section8Housing - Rental Housing Deals" }
    const [latlngdata, setlatlngdata] = useState();

    let latlngurl = 'http://ip-api.com/json';

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(latlngurl)
                .then(res => {
                    setlatlngdata(res.data)
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [latlngurl]);


    let nearbypropurl;
    const [nearbypropdata, setnearbypropdata] = useState([]);
    if (latlngdata === undefined || latlngdata === [] || latlngdata === null) {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=&city=`;
    }
    else {
        nearbypropurl = `http://thomasthecat.rentalhousingdeals.com/apis/v1/api/v1/nearByproperty?state=${latlngdata.region}&city=${latlngdata.city}`;
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.post(nearbypropurl)
                .then(res => {
                    setnearbypropdata(res.data.data);
                }).catch(error => {
                    console.log('error', error);
                });
        };
        fetchData();
    }, [nearbypropurl]);

    // console.log(latlngdata);
    return (
        <>

            <Searchboxsection8 latlngdata={latlngdata}/>
            <ResearchYourApt />
            <PropertiesNearby propertynearby={nearbypropdata} />
            <PopularCities />
            <FeaturedRentalsInCity latlngdata={latlngdata} />
            {/* <FeaturedRentalsInCity /> */}
            <AffordableHousingByRegions page={3}/>
            <ProudPartners />
            <EmailSubs />
            <Footer />

        </>
    )
}
export default Section8housing