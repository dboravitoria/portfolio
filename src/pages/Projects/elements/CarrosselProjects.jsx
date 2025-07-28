import "swiper/css";
import "swiper/css/navigation";
import perfil from '../../../../data/profile.json'
import { IoIosArrowBack, IoIosArrowForward } from "../../../utils/icons"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


export default function CarrosselProjetos({ categoria }) {

  const dadosProjeto = perfil.projetos[categoria]; 

  const mapaDeLogos = {};
    ["front", "back", "devops"].forEach(categoria => {
      perfil.tecnologias[categoria].forEach(tec => {
        const nomeNormalizado = tec.nome.toLowerCase().replace(/\s/g, '');
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
                  <div className="bg-white/90 border-2 border-secondaryDark/10 text-secondaryDark p-8 rounded-2xl h-full flex flex-col items-center justify-center text-center">

                    <div className="w-72 h-44 mb-5 px-2 flex items-center justify-center">
                      <img src={item.thumbnail} alt={item.titulo} className="rounded-xl object-cover h-full w-full shadow-custom backdrop-blur-sm drop-shadow-sm"/>
                    </div>

                    <h3 className="text-2xl font-bold font-primary italic text-secondaryDark">
                      {item.titulo}
                    </h3>

                    <p className="text-sm font-secondary mt-2 ">
                      {item.descricao}
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

                    <div className="mt-4 flex gap-4">
                      <button className=" text-secondaryDark  border-secondaryDark/15 rounded-full block mx-auto p-2 border-2 bg-secondaryDark/10
                      hover:bg-secondaryDark/20 hover:transition-all hover:scale-105 hover:drop-shadow-custom
                      backdrop-blur-md  shadow-custom transition  
                      cursor-pointer font-primary font-bold">
                        <a href={item.demo} target="_blank">
                          Demonstração
                        </a>
                      </button>

                      <button className=" text-secondaryDark  border-secondaryDark/15 rounded-full block mx-auto p-2 border-2 bg-secondaryDark/10
                      hover:bg-secondaryDark/20 hover:transition-all hover:scale-105 hover:drop-shadow-custom 
                      backdrop-blur-md  shadow-custom transition 
                      cursor-pointer font-primary font-bold">
                        <a href={item.github} target="_blank">
                          Github
                        </a>
                      </button>

                    </div>
                  </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
