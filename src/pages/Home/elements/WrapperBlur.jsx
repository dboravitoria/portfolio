
import Avatar from "./Avatar";
export default function WrapperBlur(){
    return(
        <>
            <div className="
            flex justify-center items-center shadow-lg  drop-shadow-custom
            aspect-square border-2
            rounded-full backdrop-blur-md relative
            sm:flex-1 sm:w-64 sm:mb-10 sm:mt-28
            md:w-[90vw] md:mt-0 md:h-full
            dark:shadow-white/20 dark:bg-white/10
            shadow-secondaryDark bg-secondaryDark/10
            dark:border-white/15 border-secondaryDark/15
            ">
                <Avatar/>
            </div>
        </>
    );
}

