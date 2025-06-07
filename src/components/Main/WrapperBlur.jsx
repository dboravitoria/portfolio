
import Avatar from "./Avatar";
export default function WrapperBlur(){
    return(
        <>
            <div className="
            flex justify-center items-center shadow-lg  drop-shadow-custom
            rounded-full backdrop-blur-md relative
            sm:flex-1 sm:w-64 sm:mb-10 sm:mt-28
            md:w-full md:mt-0
            dark:shadow-white/20 dark:bg-white/10
            shadow-secondaryDark bg-secondaryDark/10
            ">
                <Avatar/>
            </div>
        </>
    );
}