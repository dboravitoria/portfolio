export default function Button({submit, title}) {
  
  return (
    <>
        <button onSubmit={submit} className='dark:text-white text-secondaryDark dark:border-white border-secondaryDark/15 rounded-full w-1/3 block mx-auto py-1 border-2 
        hover:bg-white/90 hover:transition-all hover:scale-105 
        dark:bg-white/10 bg-secondaryDark/10
        backdrop-blur-md  dark:hover:bg-white/90 dark:hover:text-secondaryDark
        dark:border-white/15 
        shadow-custom transition 
        hover:drop-shadow-custom 
        cursor-pointer font-primary font-bold'>
            {title}
        </button>
    </>
  )
}
