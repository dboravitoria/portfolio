export default function Input({type,name,title,placeholder}) {
  return (
    <>
      <input type={type} name={name} title={title} placeholder={placeholder} className='
      rounded-full ml-2 backdrop-blur-md flex flex-row w-3/4
      p-2 shadow-lg drop-shadow-custom mb-4 text-secondaryDark dark:text-white
      dark:shadow-white/10 dark:bg-white/5 border-2 border-secondaryDark/10
      shadow-secondaryDark bg-secondaryDark/10' />
    </>
  )
}
