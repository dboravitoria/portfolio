import avatar from '../../../../public/avatar.png'
export default function Avatar(){
    return(
        <>
            <img src={avatar} alt="" className='
            w-full h-alto object-cover rounded-full border shadow-2xl transition 
            dark:border-white/15 border-secondaryDark/15
            dark:hover:bg-white/5 hover:bg-secondaryDark/5
            dark:hover:border-primaryDark/15 hover:border-primaryLight/10
            hover:ring-1 dark:hover:ring-primaryDark
            hover:ring-primaryLight
            hover:rounded-full hover:backdrop-blur-md hover:transition-opacity
            hover:border hover:shadow-2xl
            
            ' />
        </>
    );
}