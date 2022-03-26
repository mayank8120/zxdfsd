import React from 'react'
import Starratingstatic from '../../containers/Starratingstatic'

export const SavedPropertyItem = () => {
    return (
        <div className="d-flex noMobileFlex">
            <div className="leftImage posRel">
                <a href="propertyDetail"><img
                    src={require('../../assets/img/propertyBuilding2.png').default} /></a>
                <span>
                    <i className="fas fa-heart"></i>
                </span>
            </div>
            <div className="rightText flex1 favouritesPlan">
                <div className="d-flex align-items-center propertyTitle">
                    <a href="propertyDetail">
                        <h5 className="colorBlue font-weight700 mb-0">Blessed Rock
                            Apartments</h5>
                    </a>
                    <div className="topHeadSec mt-0">
                        {/* <ul className="noMarginPad listStyleNone">
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                        </ul> */}
                        <Starratingstatic />
                    </div>
                </div>
                <p className="mb-0 secondaryColor fontSize14">2882 Tyler St El Monte, CA
                    91157</p>
                <div className="priceRangeMobile">
                    <div className="d-flex align-items-center">
                        <h4 className="fontSize16 font-weight700 mb-0">$1,200</h4>
                        <span className="font-weight700 d-flex align-items-center"><img
                            src={require('../../assets/img/priceTagg.svg').default} />Good Deal</span>
                    </div>
                </div>
                <div className="d-flex align-items-center listingBlockLine">
                    <ul className="noMarginPad listStyleNone">
                        <li className="d-flex align-items-center">
                            <img src={require('../../assets/img/beds.svg').default} /><span
                                className="colorBlue">1-2</span> Beds
                        </li>
                        <li className="d-flex align-items-center ml-12">
                            <img src={require('../../assets/img/shower.svg').default} /><span
                                className="colorBlue">1-2</span> Baths
                        </li>
                    </ul>
                    <ul className="noMarginPad listStyleNone listIcon ml-40">
                        <li>
                            <a href=""><img src={require('../../assets/img/detailImage1.svg').default} /></a>
                        </li>
                        <li>
                            <a href=""><img src={require('../../assets/img/detailImage2.svg').default} /></a>
                        </li>
                        <li>
                            <a href=""><img src={require('../../assets/img/detailImage3.svg').default} /></a>
                        </li>
                        <li>
                            <a href=""><img src={require('../../assets/img/detailImage4.svg').default} /></a>
                        </li>
                    </ul>
                </div>
                <div className="itemWebsite">
                    <p
                        className="descriptionProperty mb-0 fontSize14 secondaryColor d-flex align-items-center">
                        <img className="" src={require('../../assets/img/file.svg').default} />Special Pricing for
                        Seniors - 2882 Tyler St E Special Pricing for Seniors - 2882
                        Tyler St E</p>
                </div>
                <p className="descriptionProperty mb-0 itemMobile fontSize12"><img
                    className="" src={require('../../assets/img/file.svg').default} />Special Pricing for
                    Seniors - 2882 Tyler St...<a href=""
                        className="purpleText">More</a></p>
                <p className="mb-0 fontSize14 savedPara itemWebsite">Saved on Tuesday,
                    November 10</p>
            </div>
            <div className="btnBlock itemWebsite">
                <div className="btnSectionList">
                    <div>
                        <a
                            className="checkAvailableBtn colorWhite brdrRadius4 marginBtm12 whiteColor">
                            Check Availability
                        </a>
                    </div>
                    <div>
                        <a href="" className="lineBtnCalling purpleText brdrRadius4 d-flex align-items-center justify-content-center">
                            <img src={require('../../assets/img/phoneFilled.png').default} />
                            <span>(626) 448-2699</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="itemMobile btnBlock">
                <div className="d-sm-flex align-items-center btnSectionList">
                    <a href="" className="lineBtnCalling purpleText brdrRadius4 d-flex align-items-center justify-content-center">
                        <img src={require('../../assets/img/phoneFilled.png').default} />
                        <span>(626) 448-2699</span>
                    </a>
                    <a className="checkAvailableBtn colorWhite brdrRadius4">
                        Check Availability
                    </a>
                </div>
            </div>
        </div>
    )
}
