import '../../index.css'
export default function Background(){
    return(
        <>
        {/* Container que envolve todo o conteúdo para conseguir ter o bg diagonal */}
                <div className='relative'>
                    {/* Container para envolver o bg diagonal e colocar filtro de blur sem interferir no conteúdo */}
                        <div className="blur-[4px] bg-blend-overlay">
                            {/* Início do bg na diagonal */}
                            <div
                            className="
                             dark:bg-primaryDark bg-primaryLight
                              positionDiagonal
                              top-[-80vh] right-[-150%] w-[200%] h-[300vh]
                              sm:right-[-100%] sm:w-[300%]
                            "></div>
                            <div
                            className="
                             dark:bg-secondaryDark bg-secondaryLight
                             positionDiagonal
                             top-[-50vh] right-[-200%] w-[600%] h-[500vh]
                             sm:right-[-100%] sm:w-[350%]
                             "></div>
                            <div
                            className="
                            dark:bg-primaryDark bg-primaryLight
                            positionDiagonal
                            top-0 right-[90%] w-[145%] sm:right-[120%] h-[90vh]
                            sm:w-[350%] sm:h-[280vh]
                            "></div>
                            <div
                            className="
                            dark:bg-secondaryDark bg-secondaryLight
                            positionDiagonal
                            top-0 right-[-40%] h-[100vh] w-[190%]
                            sm:right-[90%] sm:w-[90%]
                            "></div>
                            <div
                            className="
                            dark:bg-primaryDark bg-primaryLight
                            positionDiagonal
                            top-0 right-[30%] w-[150%] h-[140vh]
                            sm:right-[10%] sm:w-[150%] sm:h-[140vh]
                            "></div>
                            <div
                            className="
                            dark:bg-secondaryDark bg-secondaryLight
                            positionDiagonal
                            top-0 right-[90%] w-[100%] h-[160vh]
                            sm:right-[60%] sm:w-[100%] sm:h-[110vh]"></div>
                        </div>
                </div>
        </>
    );
}