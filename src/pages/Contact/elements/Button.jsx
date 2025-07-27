import React from 'react'

export default function Button({submit, title}) {
  return (
    <>
        <button onSubmit={submit} className='bg-primaryLight  dark:bg-primaryDark dark:text-white dark:border-white text-secondaryDark rounded-full w-1/4 block mx-auto py-1 border-2 border-secondaryDark 
        dark:hover:bg-primaryLight hover:bg-secondaryLight hover:transition-all hover:scale-105 
        dark:bg-white/10 bg-secondaryDark/10
        backdrop-blur-md  p-2 
        dark:border-white/15 border-secondaryDark/15
        shadow-sm transition 
        dark:hover:bg-white/15 hover:bg-secondaryDark/15
        hover:drop-shadow-custom 
        cursor-pointer font-primary font-bold'>
            {title}
        </button>
    </>
  )
}
