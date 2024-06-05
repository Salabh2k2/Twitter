import React from 'react'
import Avatar from 'react-avatar';
const CreatePost = () => {
  return (
    <div className='w-[100%]'>
      <div>
      <div className='flex items-center justify-between border-b border-gray-200'>
        <div className='cursor-pointer hover:bg-gray-200 w-full rounded-md px-4 py-3'>
         <h1 className='mx-4 font-semibold text-gray-700 text-lg'>For you</h1>
        </div>
        <div className='cursor-pointer hover:bg-gray-200 w-full rounded-md px-4 py-3'>
        <h1 className=' mx-4 font-semibold text-gray-700 text-lg'>Following</h1>
        </div>
      </div>
      </div>
        <div className='m-4'>
          <div className='flex'>
          <Avatar src  = "https://img.freepik.com/premium-photo/beautiful-picture-3d-cutest-little-krishna-holding-flute-generative-ai_849906-10145.jpg?w=900 " size="40" round={true} />
          
          <input className='w-full outline-none border-none text-lg px- ml-2' type = "text" placeholder = 'What is Happening'/>
          </div>
          <div>
            <button className='bg- px-3 border'>Post</button>
          </div>
        </div>
    </div>
  )
}

export default CreatePost