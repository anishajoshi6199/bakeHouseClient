import React from 'react';
import Layout from '../Layout';
import './style.css'

const CartDashboard = () => {
    return (
        < Layout>
            <div className='cartDashboardHero py-14 px-24'>
                <div className='cartDashboardImg'>
                    <div className='flex flex-col justify-center items-center h-[85%]'>
                        <img src="/images/cartDashboard/cartDashboardThree.png" alt="" className='w-[85%] md:w-[40%] lg:w-[30%] xl:w-[23%]' />
                        <h1 className='text-white text-[30px] text-center'>Get Your Food AnyWhere And AnyTime...</h1>
                    </div>
                </div>
            </div>


            <div className='bg-[#e58f00] py-16'>
                <div className='flex justify-between px-32'>
                    <div>
                        <h1 className='text-[15px] italic'>About Us</h1><br />
                        <h1 className='textShadow'>Welcome</h1><br />
                        <p className='font-normal text-[18px] w-[50%]'>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.<br /><br />

                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by injected
                            humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <img src="/images/cartDashboard/cartDashboardFive.png" alt="" className='' />
                </div>
            </div>



        </Layout>
    )
}

export default CartDashboard;