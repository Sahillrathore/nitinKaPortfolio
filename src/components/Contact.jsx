import React from 'react'

const Contact = () => {
    return (
        <div className='text-white my-10 border-y pb-10 py-8 flex justify-center flex-col px-20 border-gray-400'>
            <h4 className='capitalize font-medium text-5xl text-center'>Get in touch</h4>
            <div className=''>
                <div className='flex justify-between w-full'>
                    <div>
                        <label className='text-2xl font-thin' htmlFor="name">Name</label>
                        <br />
                        <input type="text" name="name" id="name" placeholder='Your Good Name' className='bg-transparent outline-none focus:outline-none min-w-80 border-b border-b-white' />
                    </div>
                    <div>
                        <label className='text-2xl font-thin' htmlFor="mail">Mail</label>
                        <br />
                        <input type="email" name="mail" id="mail" placeholder='Your Email' className='bg-transparent outline-none focus:outline-none min-w-80 border-b border-b-white' />
                    </div>
                </div>
                <div className='w-full mt-5'>
                    <label className='text-2xl font-thin' htmlFor="msg">Message</label>
                    <br />
                    <input type="text" name="msg" id="msg" placeholder='Send a Message' className='bg-transparent outline-none w-full  focus:outline-none border-b border-b-white' />
                </div>
            </div>
        </div>
    )
}

export default Contact