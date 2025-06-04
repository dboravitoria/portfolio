export default function Logo() {
    return (
        <div className="
                mx-2 px-4 py-4 transition-opacity
                hover:backdrop-blur-sm hover:rounded-full
                hover:drop-shadow-custom hover:border
                hover:dark:bg-white/10 hover:dark:border-white/15
                hover:bg-secondaryDark/10 hover:border-secondaryDark/15">
            <div className="
                flex justify-center items-center
                md:justify-start md:items-end
                w-full md:w-auto
            ">
                <a href="#" className="
                    text-secondaryDark dark:text-white
                    font-nunito font-black uppercase italic
                    lg:text-6xl md:text-5xl sm:text-4xl text-4xl
                ">
                    .Débora
                </a>
            </div>
        </div>
    );
}
