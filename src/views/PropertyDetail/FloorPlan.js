import React, { useState } from 'react'
import Modal from "react-modal";
import { decimalRoundOff } from '../../containers/functions';

const FloorPlan = ({ data }) => {


    // const [isOpenFloor, setIsOpenFloor] = useState(false);
    // function toggleModalFloor() {
    //     setIsOpenFloor(!isOpenFloor);
    // }
    const [isOpenFloor, setIsOpenFloor] = useState(false);
    function toggleModalFloor() {
        setIsOpenFloor(!isOpenFloor);
    }

    return (
        <>
            {
                data == undefined || data == null || data == [] || data == '' ?
                    null
                    :
                    <>


                        <tr className='itemWebsite'>

                            <td>

                                <div className='d-flex align-items-center'>




                                    {
                                        data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                            <>

                                                <div className="">
                                                    <img src={require('../../assets/img/floorplanGrey.svg').default} className="twentyfourbytwentyfour" />
                                                </div>

                                            </>
                                            :
                                            <>
                                                <div className="" onClick={() => {
                                                    toggleModalFloor();
                                                }
                                                } >
                                                    <img src={require('../../assets/img/floorplan.svg').default} />
                                                    {/* <span className="ml-3 purpleText fontSize14 font-weight500">Floor plan</span> */}
                                                </div>

                                                <Modal isOpen={isOpenFloor}
                                                    onRequestClose={toggleModalFloor} className="propertdetailmodal">
                                                    <div className="modal-header d-flex align-items-center">


                                                        <button type="button" className="close" onClick={toggleModalFloor} aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body rentalForm availBodyBlock">
                                                        {
                                                            data.floor_plan_photo == '' || data.floor_plan_photo == null ?
                                                                <></>
                                                                :
                                                                <img className=' w-100' src={`https://www.rentalhousingdeals.com/${data.floor_plan_photo}`} alt='alt' />
                                                        }

                                                    </div>

                                                </Modal>
                                            </>
                                    }



                                    <h4 className="font-weight500 fontSize16 colorBlue mb-0 ml-3">{data.floor_plan_name}</h4>


                                </div>

                            </td>
                            <td>

                                {
                                    data.beds == 0 || data.beds == '' ?
                                        (<span className="colorBlue">N/A Bd</span>)
                                        :

                                        <>
                                            <span className="colorBlue font-weight500">{data.beds}</span> <span className='colorblack font-weight500'> {data.beds == 'Studio' ? null : 'Bd'}</span>
                                        </>
                                }
                            </td>
                            <td>
                                {
                                    data.baths == 0 || data.baths == '' ?
                                        (<span className="colorBlue font-weight500">N/A Ba</span>)
                                        :
                                        <span className="colorBlue font-weight500">{decimalRoundOff(data.baths)}   <span className='colorblack font-weight500'> Ba</span></span>
                                }
                            </td>
                            <td>
                                {
                                    data.square_feet_to == 0 ?
                                        (<span className="colorBlue font-weight500">N/A Sq.ft</span>)
                                        :
                                        <><span className="colorBlue font-weight500">{data.square_feet_to}</span><span className='colorblack font-weight500'> Sq.ft</span>  </>
                                }
                            </td>


                            <td>
                                One Month Rent
                            </td>

                            <td>

                                {data.rent_from == 0 || data.rent_from == '' ?
                                    'N/A'
                                    :
                                    ` $${data.rent_from}`
                                }
                            </td>
                        </tr>




                        {/* <div className='itemMobile'>

                            <li className="d-flex align-items-center justify-content-between floorPlanListing">


                                <div className="imageLeft floorplanHead d-flex align-items-center">


                                    <div className="headingList">
                                        <h4 className="font-weight500 fontSize16 colorBlue mb-0">{data.floor_plan_name}</h4>
                                        <ul className="noMarginPad listStyleNone floatLeftList itemMobile">
                                            <li className="secondaryColor">
                                                {
                                                    data.beds == 0 || data.beds == '' ?
                                                        (<span className="colorBlue">N/A Bd</span>)
                                                        :

                                                        <>
                                                            <span className="colorBlue">{data.beds}</span> {data.beds == 'Studio' ? null : 'Bd'}
                                                        </>
                                                }
                                            </li>
                                            <li className="secondaryColor ml-16">
                                                {
                                                    data.baths == 0 || data.baths == '' ?
                                                        (<span className="colorBlue">N/A Ba</span>)
                                                        :
                                                        <span className="colorBlue">{data.baths} Ba</span>
                                                }
                                            </li>
                                            <li className="secondaryColor ml-24">

                                              
                                            </li>
                                        </ul>
                                    </div>

                                </div>



                            </li>


                        </div> */}

                    </>



            }

        </>
    )
}

export default FloorPlan