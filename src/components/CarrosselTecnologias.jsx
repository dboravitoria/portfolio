import { SiStylelint, FaTools, FaInfinity,IoIosArrowBack, IoIosArrowForward } from "../utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import perfil from "../data/profile.json";
import "swiper/css";
import "swiper/css/navigation";


export default function CarrosselTecnologias({ categoria }) {
  const dadosCategoria = perfil.tecnologias?.[categoria] || [];

  const tecnologiasValidas = Array.isArray(dadosCategoria)
    ? dadosCategoria.filter((item) => item?.nome && item?.logo)
    : [];

  if (tecnologiasValidas.length === 0) {
    return (
      <p className="text-center text-secondaryDark dark:text-white mt-8">
        Nenhuma tecnologia encontrada para <strong>{categoria}</strong>.
      </p>
    );
  }

  return (
    <div className="mb-6 select-none">
      <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-bold mb-6 text-secondaryDark dark:text-white text-center font-primary italic">
        <span className="inline-flex items-center gap-2 justify-center">
          {getIcon(categoria)} {categoria.toUpperCase()}
        </span>
      </h2>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          1560: { slidesPerView: 3 },
        }}
        loop={true}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper selection:none"
      >
        <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
          <IoIosArrowBack />
        </button>
        <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
          <IoIosArrowForward />
        </button>

        {tecnologiasValidas.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white/90 border-2 border-secondaryDark/10 text-secondaryDark p-6 rounded-2xl h-full flex flex-col items-center justify-center text-center backdrop-blur-sm drop-shadow-sm">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.nome}
                  className="w-full h-full object-contain selection:none"
                />
              </div>
              <h3 className="text-xl font-secondary font-bold selection:none text-secondaryDark capitalize">
                {item.nome}
              </h3>
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
    ferramentas: <FaInfinity />,
  };

  return icons[normalized];
}
