import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SiStylelint, FaTools, FaInfinity } from "../utils/icons";
import perfil from "../../data/profile.json";

export default function CarrosselTecnologias({ categoria }) {
  const dadosCategoria = perfil.tecnologias[categoria]; 

  return (
    <div className="mb-16 ">
      <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-secondaryDark dark:text-white text-center font-primary italic">
        <span className="inline-flex items-center gap-2 justify-center">
          {getIcon(categoria)} {categoria.toUpperCase()}
        </span>
      </h2>

      <Swiper
        navigation
        spaceBetween={30}
        breakpoints={{
            0: {
            slidesPerView: 1, // de 0 até 767px
            },
            1560: {
            slidesPerView: 3, // a partir de 768px
            },
        }}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        >

        {dadosCategoria.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-secondaryDark  dark:bg-white  p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.nome}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-secondaryDark text-white">{item.nome}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function getIcon(name) {
  const normalized = name.toLowerCase().replace(/[-_]/g, "").replace(/\s/g, "");

  const icons = {
    front: <SiStylelint />,
    back: <FaTools />,
    devops: <FaInfinity />,
  };

  return icons[normalized];
}
