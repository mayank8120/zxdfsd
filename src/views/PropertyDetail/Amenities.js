import React, { useState } from 'react'

const Amenities = ({ propamenities }) => {

    const [loadmore, setloadmore] = useState(false);
    const handleclick = () => {
        setloadmore(!loadmore)
    }

    let abc;
    const unit = propamenities.unit_amenities;
    const prop = propamenities.property_amenities;
    const sixunit = unit.slice(0, 6);
    const sixprop = prop.slice(0, 6);
    

    let imagestring = (imagename) => {
        return (imagename).replace(/\\|\//g, '');
    }
    
    return (

        <>
            <div className="amenitiesListing respo nsive15">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                        <div className="">
                            <h3 className="font-weight700 colorBlue">Unit Amenities</h3>
                            <ul className="noMarginPad listStyleNone detailListing">
                                {
                                    loadmore == false ?
                                        (sixunit.map((data) => (

                                            (data.hasOwnProperty('other_unit_amenities') ?
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img
                                                            src={require(`../../assets/img/homeamenity.svg`).default}
                                                            alt="ALternate image" />
                                                    </span>
                                                    <p className="mb-0">{data.other_unit_amenities}</p>
                                                </li>
                                                :
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img src={require(`../../assets/img/${imagestring(data[0].name)}.png`).default} />
                                                    </span>
                                                    <p className="mb-0">{data[0].name}</p>
                                                </li>

                                            )
                                        )))
                                        :
                                        (unit.map((data) => (

                                            (data.hasOwnProperty('other_unit_amenities') ?
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img src={require(`../../assets/img/homeamenity.svg`).default}
                                                            alt="ALternate image" />
                                                    </span>
                                                    <p className="mb-0">{data.other_unit_amenities}</p>
                                                </li>
                                                :
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img src={require(`../../assets/img/${imagestring(data[0].name)}.png`).default} />
                                                    </span>
                                                    <p className="mb-0">{data[0].name}</p>
                                                </li>

                                            )
                                        )))
                                }
                            </ul>
                        </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 responsiveMargintopAmen">
                        <div>
                            <h3 className="font-weight700 colorBlue">Property Amenities</h3>
                            <ul className="noMarginPad listStyleNone detailListing">
                                {loadmore == false ?
                                    (sixprop.map((data) => (
                                        (

                                            data.propertyAmenities == [] || data.propertyAmenities == null || data.propertyAmenities == ''
                                                ?
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img
                                                            // src="https://www.rentalhousingdeals.com/images/amenity_icons/default.png" 
                                                            src={require(`../../assets/img/homeamenity.svg`).default}
                                                            alt="ALternate image" />
                                                    </span>
                                                    <p className="mb-0">{data.other}</p>
                                                </li>
                                                :
                                                <li className="d-flex align-items-center" >
                                                    <span className="brdrRadius4">
                                                        <img src={require(`../../assets/img/${imagestring(data.propertyAmenities[0].name)}.png`).default} />
                                                    </span>
                                                    <p className="mb-0">{data.propertyAmenities[0].name}</p>
                                                </li>
                                        )

                                    )))
                                    :
                                    (prop.map((data) => (
                                        (

                                            data.propertyAmenities == [] || data.propertyAmenities == null || data.propertyAmenities == ''
                                                ?
                                                <li className="d-flex align-items-center">
                                                    <span className="brdrRadius4">
                                                        <img
                                                            // src="https://www.rentalhousingdeals.com/images/amenity_icons/default.png"
                                                            src={require(`../../assets/img/homeamenity.svg`).default}
                                                            alt="ALternate image"
                                                        />
                                                    </span>
                                                    <p className="mb-0">{data.other}</p>
                                                </li>
                                                :
                                                <li className="d-flex align-items-center" >
                                                    <span className="brdrRadius4">
                                                        <img src={require(`../../assets/img/${imagestring(data.propertyAmenities[0].name)}.png`).default} />
                                                    </span>
                                                    <p className="mb-0">{data.propertyAmenities[0].name}</p>
                                                </li>
                                        )
                                    )))
                                }
                            </ul>
                        </div>
                    </div>



                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 itemMobile">
                        <div className="responsive15">
                            <h3 className="font-weight700 colorBlue">Amenities</h3>
                            <ul className="noMarginPad listStyleNone detailListing">
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/amenities1.png').default} />
                                    </span>
                                    <p className="mb-0">Air Conditioning</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/amenities2.png').default} />
                                    </span>
                                    <p className="mb-0">Carpet</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/amenities3.png').default} />
                                    </span>
                                    <p className="mb-0">Cable Ready</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/amenities4.png').default} />
                                    </span>
                                    <p className="mb-0">Refrigerator/Stove</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/property2.png').default} />
                                    </span>
                                    <p className="mb-0">3 Laundry Rooms</p>
                                </li>
                                <li className="d-flex align-items-center">
                                    <span className="brdrRadius4">
                                        <img src={require('../../assets/img/property3.png').default} />
                                    </span>
                                    <p className="mb-0">Courtyard</p>
                                </li>
                            </ul>
                        </div>
                    </div> */}



                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="pupleLineBtn responsive15">

                            {
                                unit.length < 7 && prop.length < 7 ? null :
                                    <button href="" className="w-100 transition font-weight500" onClick={handleclick}>

                                        {loadmore == false ? 'Show all ' : 'Show less '}

                                        {loadmore == false ? unit.length + prop.length : null} amenities
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Amenities