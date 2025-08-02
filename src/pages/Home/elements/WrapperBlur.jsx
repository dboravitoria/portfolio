
import Avatar from "./Avatar";

export default function WrapperBlur(){
    return(
        <>
            <div
            style={{ filter: 'url(#gooey)' }}
            className="flex justify-center items-center shadow-custom drop-shadow-custom
                aspect-square border-2 rounded-full backdrop-blur-md relative
                sm:flex-1 sm:w-64 sm:mb-10 sm:mt-28 md:w-[90vw] md:mt-0 md:h-full
                dark:bg-white/10 bg-secondaryDark/10
                dark:border-white/15 border-secondaryDark/15"
            >
            <Avatar />
            </div>

        </>
    );
}

