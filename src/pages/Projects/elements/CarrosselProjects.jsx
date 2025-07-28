import { IoIosArrowBack, IoIosArrowForward } from "../../../utils/icons"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import WrapperBlur from "./WrapperBlur";
import perfil from '../../../../data/profile.json'
import "swiper/css";
import "swiper/css/navigation";


export default function CarrosselProjetos({ categoria }) {
  const dadosProjeto = perfil.projetos[categoria]; // Acessa o array certo

  return (
    <div className="p-4 w-full">

      <Swiper
        spaceBetween={30}

        breakpoints={{ 0: { slidesPerView: 1}, 768: {slidesPerView:2},1560: { slidesPerView: 3 } }}
        loop={true}
        modules={[Navigation]}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        className="mySwiper selection:none"
      >
        <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
          <IoIosArrowBack />
        </button>
        <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
          <IoIosArrowForward />
        </button>

        {dadosProjeto.map((item, index) => (
          <SwiperSlide key={index}>
            
                <div className="bg-white/90 border-2 border-secondaryDark/10 text-secondaryDark p-10 rounded-2xl h-full flex flex-col items-center justify-center text-cente r">
                  <div className="w-72 h-44 mb-5 px-2 flex items-center justify-center">
                    <img src={item.thumbnail} alt={item.titulo} className="rounded-xl object-cover h-full w-full shadow-custom backdrop-blur-sm drop-shadow-sm" />
                  </div>
                  <h3 className="text-2xl font-bold selection:none font-primary italic text-secondaryDark">{item.titulo}</h3>
                  <p className="text-sm font-secondary mt-2 ">{item.descricao}</p>
                  <div className="flex gap-2 flex-wrap justify-center mt-4 text-xs">
                    {item.tecnologias.map((tec, idx) => (
                      <span key={idx} className="bg-secondaryDark/10 dark:bg-white/10 px-2 py-1 rounded-full">
                        {tec}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <a href={item.demo} target="_blank" className="text-primary hover:underline">Demo</a>
                    <a href={item.github} target="_blank" className="text-primary hover:underline">GitHub</a>
                  </div>
                </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
