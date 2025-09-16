import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProfileContext from "../../../context/ProfileContext"
import { IoIosArrowBack, IoIosArrowForward } from "../../../utils/icons";

export default function CarrosselProjetos({ categoria }) {
  const perfil = useContext(ProfileContext);

  const dadosProjeto = perfil.projetos[categoria];

  const mapaDeLogos = {};
  ["front", "back", "ferramentas"].forEach((categoria) => {
    perfil.tecnologias[categoria].forEach((tec) => {
      const nomeNormalizado = tec.nome.toLowerCase().replace(/\s/g, "");
      mapaDeLogos[nomeNormalizado] = tec.logo;
    });
  });


  return (
    <>
      <div className="p-4 w-full">

        <Swiper spaceBetween={30} breakpoints={{ 0: { slidesPerView: 1}, 768: {slidesPerView:2},1560: { slidesPerView: 3 } }} modules={[Navigation]} navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} className="mySwiper">

          <button className="custom-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
            <IoIosArrowBack />
          </button>

          <button className="custom-next absolute right-4 top-1/2 transform -translate-y-1/2 text-secondaryDark text-3xl z-10">
            <IoIosArrowForward />
          </button>

          {dadosProjeto.map((item, index) => (

            <SwiperSlide key={index}>
                  <div className="bg-white/90 border-2 border-secondaryDark/10 text-secondaryDark p-4 rounded-2xl h-full flex flex-col items-center justify-center text-center">

                    <div className="w-72 h-44 mb-5 px-4 flex items-center justify-center">
                      <img src={item.thumbnail} alt={item.titulo} className="rounded-xl object-cover h-full w-full shadow-custom backdrop-blur-sm drop-shadow-sm"/>
                    </div>

                    <h3 className="text-2xl font-bold font-primary italic text-secondaryDark">
                      {item.titulo}
                    </h3>

                    <p className="text-sm font-secondary mt-2 ">
                      {item.subtitulo}
                    </p>

                    <div className="flex gap-2 flex-wrap justify-center mt-4 text-xs">
                      {item.tecnologias.map((tec, idx) => {
                        const nomeNormalizado = tec.toLowerCase().replace(/\s/g, '');
                        return (
                          <span key={idx} className="shadow-md drop-shadow-md border-2 border-secondaryDark/10 bg-secondaryDark/10 p-2 rounded-md">
                            <img src={mapaDeLogos[nomeNormalizado]} alt={tec}className="w-7 h-7 object-contain"/>
                          </span>
                        );
                      })}
                    </div>

                      

                  <Link to={`/projetos/${item.id}`}>
                    <button
                      className="text-secondaryDark border-secondaryDark/15 rounded-full block mx-auto mt-8 p-2 border-2 
                                bg-primaryLight dark:bg-primaryDark/85 hover:bg-primaryDark/80 dark:hover:bg-primaryLight/80 hover:transition-all
                                hover:scale-105 hover:drop-shadow-custom backdrop-blur-md shadow-custom transition 
                                cursor-pointer font-primary font-bold text-sm md:text-md"
                    >
                      Detalhes
                    </button>
                  </Link>

                  </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
