import React from 'react'

function Banner() {
  return (
    <div className='p-4 py-16'>
        <div className='md:flex justify-between'>
            <div className='pt-8'>
                <p className='text-4xl font-bold flex items-center justify-center'><img src="hand wave.gif" width={100} alt="" /> Hi, I am Khalid Abdullah </p>
                <p className='text-center text-2xl font-bold'>Software Developer</p>
                <p className='px-16 py-2'>Computer Science and engineering graduate having 3+ years of experience of solving problems and competing in National competitions like ICPC and IUPC</p>
                <div className='text-center my-4'>
                    <a className=' bg-red-500 px-4 py-2 rounded-btn text-white font-semibold'
                        href="https://drive.google.com/uc?export=download&id=1YVUVm7J25rVit7gPR744tloDiokBKc2L" 
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <img src="khalid abdullah.jpg" alt="Khalid Abdullah" className='md:w-1/5  md:rounded-full text-center'/>
        </div>
    </div>
  )
}

export default Banner