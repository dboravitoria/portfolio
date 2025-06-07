import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

export default function Section(){
    return(
        <>
            <div className="
            grid grid-cols-2 min-h-screen w-full justify-center items-center md:flex-row
            dark:text-white text-center 
            sm:flex sm:justify-center sm:items-center sm:mt-8 sm:flex-col-reverse
            ">
                <FirstSection />
                <SecondSection />
            </div>

        </>
    );
}