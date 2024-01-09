"use client"
import Accounttypebank from "../../../public/picture/Account type.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import MasterImageLogo from "../../../public/picture/Mastercard.png"
import arrowtoprightlogo from "../../../public/picture/Frame 40276.png"


                  const MasterCard = () => {
                      return ( 
                          <>

                  <p className="text-xl font-normal text-[#878787]">Total Balance</p>
                    <div className="w-full rounded-md bg-white h-full py-7  shadow-[0_35px_60px_-15px_rgba(76,103,100,0.12)]">
                      <div className="w-full flex px-6 py-2 justify-between">
                        <p className="font-extrabold text-xl text-[#191919]">$240,399</p>
                        <button className="font-medium text-sm text-[#525256]">All Accounts</button>
                      </div>
                    <Swiper
                        
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                        clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper mt-6"
                    >
                        <SwiperSlide>
                        <div className="w-full flex h-[70%] justify-center items-center">
                          <div className="bg-[#FB3F6C] p-4 flex rounded-md w-[300px] h-full ">
                            <div className="w-1/2 flex flex-col gap-2">
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">Account type</p>
                              <p className="font-bold text-base text-[#FFFFFF] ">Debit Card</p>
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">**** **** **** 2598</p>

                            </div>

                            <div className="w-1/2 flex flex-col gap-1 items-end justify-between">
                              <Image src={MasterImageLogo} alt="master card"/>
                              <p className="font-bold text-base flex gap-2 text-white">$25000<Image src={arrowtoprightlogo} alt="topright"/></p>
                            </div>

                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="w-full flex h-[70%] justify-center  items-center">
                          <div className="bg-[#FB3F6C] p-4 flex rounded-md w-[300px] h-full ">
                            <div className="w-1/2 flex flex-col gap-2">
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">Account type</p>
                              <p className="font-bold text-base text-[#FFFFFF] ">Debit Card</p>
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">**** **** **** 1548</p>

                            </div>
                            
                            <div className="w-1/2 flex flex-col gap-1 items-end justify-between">
                              <Image src={MasterImageLogo} alt="master card"/>
                              <p className="font-bold text-base flex gap-2 text-white">$32000<Image src={arrowtoprightlogo} alt="topright"/></p>
                            </div>

                          </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="w-full flex h-[70%] justify-center items-center">
                          <div className="bg-[#FB3F6C] p-4 flex rounded-md w-[300px] h-full ">
                            <div className="w-1/2 flex flex-col gap-2">
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">Account type</p>
                              <p className="font-bold text-base text-[#FFFFFF] ">Debit Card</p>
                              <p className="font-medium text-sm text-[#FFFFFFB2] ">**** **** **** 7891</p>

                            </div>
                            
                            <div className="w-1/2 flex flex-col gap-1 items-end justify-between">
                              <Image src={MasterImageLogo} alt="master card"/>
                              <p className="font-bold text-base flex gap-2 text-white">$15600<Image src={arrowtoprightlogo} alt="topright"/></p>
                            </div>

                          </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>

                    </div>

        </>
     );
}
 
export default MasterCard;  