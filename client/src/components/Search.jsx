import React from 'react'

const Search = (props) => {
  return (
   <div className='w-full  mt-6 flex justify-center'>
    <div className='flex flex-row gap-2  px-3 py-2 w-[290px] inset-0 items-center bg-gray1 border border-none rounded-xl'>
    <img src="/Search.svg" className='h-6 w-6' alt="Search Icon"></img>
    <input className='font-poppins text-[14px] leading-5 text-[#8C8C8C]' placeholder='Search...' value={props.searchText} onChange={(event)=>{
     props.setSearchText(event.target.value)  
    }}></input>
    </div>
</div>
  )
}

export default Search