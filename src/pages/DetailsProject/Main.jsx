
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useComeback } from "../../hooks/useComeback"

import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack, IoIosArrowForward } from "../../utils/icons";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import { useState } from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { AnimatePresence } from "framer-motion";
import Title from "./elements/Title"
import Button from "./elements/Button";
import Subtitle from "./elements/Subtitle";
import projetosData from "../../data/profile.json";


export default function Main() {
    const handleComeback = useComeback()
    const { id } = useParams();
    const { tecnologias, projetos } = projetosData;
    const [imagemSelecionada, setImagemSelecionada] = useState(null);
    

    const projeto = projetos.front.find((p) => p.id === Number(id));

    const todasAsTecnologias = [
    ...tecnologias.front,
    ...tecnologias.back,
    ...tecnologias.devops,
    ];

    const tecnologiasValidas = todasAsTecnologias.filter((tecObj) =>
    projeto.tecnologias.includes(tecObj.nome)
    );

  return (
    <>
       <section className=" mt-52 sm:-mt-20 md:mt-10 lg:mt-10 min-h-[150vh] ">
        
          <Title title={projeto.titulo}/>
        
            <section className='row justify-content-center'>
                <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', }} className="sm:ml-48 sm:mt-10 -mt-40 ml-12">
                    <button className="mt-12 p-2  hover:transition-all flex justify-center hover:scale-105 hover:drop-shadow-custom
                    backdrop-blur-md shadow-custom cursor-pointer font-primary font-bold text-sm md:text-md
                    ml-4 rounded-full 
                    border-2 dark:bg-white/10 dark:border-white/15
                    bg-secondaryDark/10 border-secondaryDark/15
                    transition dark:hover:bg-white/90 dark:hover:text-secondaryDark hover:bg-white/90 text-secondaryDark dark:text-white/90" onClick={handleComeback}>
                        <IoIosArrowBack/>
                    </button>
                </motion.div>

                <section className="col-12 absolute flex flex-col justify-center text-center sm:mt-72 md:mt-48 mb-20">
                
                    <section className="flex flex-col md:flex-row justify-center items-center  mt-20 mb-5">
                    
                        <div className="w-full md:w-1/2 flex justify-center -mt-16 ">
                            <img src={projeto.thumbnail} alt="Imagem do projeto" className="w-[70%] md:w-[80%] h-auto rounded-md"/>
                        </div>

                        <div className="w-full md:w-1/3 px-4 flex flex-col items-start mt-10 md:-mt-10">
                            <p className="text-md font-secondary mb-10 lg:text-xl text-secondaryDark dark:text-white/90 leading-relaxed text-start md:text-left">
                                {projeto.descricao}
                            </p>
                            <h2 className="font-bold font-primary text-xl mb-2 text-secondaryDark dark:text-white/90">Tecnologias:</h2>
                            <div className="col-12">
                                <Swiper spaceBetween={20} breakpoints={{ 0: { slidesPerView: 1}, 768: {slidesPerView:2},1560: { slidesPerView: 3 } }} modules={[Navigation]} navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} className="mySwiper">
                                    <button className="custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-secondaryDark text-2xl z-10">
                                        <IoIosArrowBack />
                                    </button>

                                    <button className="custom-next absolute right-0 top-1/2 transform -translate-y-1/2 text-secondaryDark text-2xl z-10">
                                        <IoIosArrowForward />
                                    </button>        

                                {tecnologiasValidas.map((item, index) => (
                                    <SwiperSlide key={index} className="!w-1/4">
                                        <div className="bg-white/90 dark:bg-white/90 border-2 border-secondaryDark/10 text-secondaryDark dark:text-secondaryDark p-2 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-sm drop-shadow-sm">
                                            <div className="w-10 h-10 mb-2 flex items-center justify-center">
                                                <img src={item.logo} alt={item.nome} className="w-full h-full object-contain select-none"/>
                                            </div>
                                            <h3 className="text-sm font-secondary font-medium capitalize dark:text-secondaryDark text-secondaryDark">
                                                {item.nome}
                                            </h3>
                                    </div>
                                    </SwiperSlide>
                                ))}
                                </Swiper>
                            </div>
                        </div>
                    </section>
                    <section className=" p-8">
                        {projeto.galeria && (
                            <>
                                <Subtitle title={"Galeria de fotos do projeto"}/>
                                <div className="flex justify-center gap-4">
                        
                                    {projeto.galeria && projeto.galeria.length > 0 && (
                                        <div className="relative w-full mt-10 mb-14 px-4">
                                            <button className="custom-prev-galeria absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-secondaryDark dark:text-white/90 text-2xl">
                                                <IoIosArrowBack />
                                            </button>
                                            <button className="custom-next-galeria absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-secondaryDark dark:text-white/90 text-2xl">
                                                <IoIosArrowForward />
                                            </button>

                                            <Swiper spaceBetween={10} breakpoints={{0: { slidesPerView: 1 },768: { slidesPerView: 2 },1024: { slidesPerView: 3 }}}navigation={{nextEl: ".custom-next-galeria",prevEl: ".custom-prev-galeria"}} modules={[Navigation]}className="rounded-xl overflow-hidden">
                                                {projeto.galeria.map((img, index) => (
                                                    <SwiperSlide key={index} className="rounded-xl overflow-hidden">
                                                        <img src={img} alt={`Imagem ${index + 1} do projeto`} className="w-full h-full object-cover rounded-xl shadow-md cursor-pointer" onClick={() => setImagemSelecionada(img)} />
                                                    </SwiperSlide>
                                                ))}

                                            </Swiper>
                                            <AnimatePresence>
                                                {imagemSelecionada && (
                                                    <motion.div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setImagemSelecionada(null)}>
                                                        <motion.div className="relative max-w-4xl w-full p-4" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} onClick={(e) => e.stopPropagation()}>
                                                            <button onClick={() => setImagemSelecionada(null)} className="absolute top-2 right-2 text-white text-3xl font-bold hover:scale-110 transition-transform z-50">&times;</button>
                                                            <Zoom>
                                                                <img src={imagemSelecionada} alt="Imagem ampliada" className="w-full h-auto rounded-lg shadow-lg"/>
                                                            </Zoom>
                                                    
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                        </div>
                                    )}

                                </div>
                    
                            </>
                        )}
                        
                        <div className="flex justify-center gap-4">
                            <Button href={projeto.demo} target="_blank">
                                Demonstração
                            </Button>
                            <Button href={projeto.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </Button>
                        </div> 
                    
                        
                    
                    </section>

                </section>
            
            </section>
       </section>
    </>
  )
}
