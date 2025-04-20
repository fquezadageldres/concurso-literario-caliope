import "rsuite/dist/rsuite.css";

import useScrollBelowThreshold from "../../hooks/scrollYOffset.hook"
import { FaCheck, FaRegCheckCircle } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import { TfiCheckBox } from "react-icons/tfi";
import { Modal, Button, ButtonToolbar, Placeholder } from 'rsuite';
import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { LayoutHero } from "../../components/Layout";

export const Home = () => {

    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const isBelow50px = useScrollBelowThreshold(50)

    const onVerMas = () => {
        window.scrollBy({
            top: 600, 
            behavior: 'smooth' 
        })
    }

    return (
        <LayoutHero>
            <div style={{backgroundImage: 'url(./hero.jpg)', backgroundBlendMode: 'overlay', backgroundColor: '#2f302b', }} className="w-full h-screen relative bg-cover flex flex-col items-center justify-center">
                <h2 id="hero" className="text-[7em] sm:text-[11em] lg:text-[14em] text-[white] dancing-script-semibold"><b>Caliope</b></h2>
                <h1 className="z-10 py-7  leading-10 sm:py-14 lg:pt-24 lg:pb-18 text-[white] text-center poppins-light text-[25px] sm:text-[40px] lg:text-[45px]">10º Concurso Regional de Literatura</h1>
                <div className="text-[12px] sm:text-[15px] lg:text-[16px] mt-[-30px] py-2 rounded-xl">
                    <p className="px-2 w-[360px] sm:w-[500px] lg:w-[550px] text-center text-[white] poppins-light">La <span className="underline text-[#9ee382] bad-script-regular text-[14px] sm:text-[16px] lg:text-[18px]">novena edición del concurso de literatura Calíope</span> está a punto de comenzar, y queremos que formes parte de esta experiencia única.</p>
                    <p className="px-2 w-[360px] sm:w-[500px] lg:w-[550px] text-center mt-3 text-[white] poppins-light">Este año, bajo el tema de <span className="underline text-[#9ee382] bad-script-regular text-[14px] sm:text-[16px] lg:text-[18px]">"Unidad y Diversidad",</span> queremos celebrar la riqueza de perspectivas, experiencias y voces que enriquecen nuestra sociedad.</p>
                </div>
                <div onClick={handleOpen} className="mt-[15px] cursor-pointer rounded-[20px] hover:bg-[white] bg-lLightGreen w-[200px] text-[white] hover:text-lLightGreen h-[40px] inline-flex justify-center items-center">
                    <p  className="">Inscripciones</p>
                </div>
                {!isBelow50px && <div onClick={() => onVerMas()} className="cursor-pointer absolute flex flex-col items-center justify-center bottom-[20px] text-[white] text-[30px] animate-bounce">
                    <BsArrowDown />
                    <small className="hidden text-[10px]"><i>Ver mas...</i></small>
                </div>}
            </div>
            <div className="bg-[white] w-full justify-center px-10 py-20 sm:p-24 inline-flex items-align">
                <div className="w-full flex flex-col max-w-[800px]">
                    <div className="relative border-b-2 border-lLightGreen max-w-[800px] inline-flex justify-center">
                        <h2 id="about" className="absolute mt-[-25px] px-4 text-center text-lLightGreen text-[30px] w-auto bg-[white] poppins-light">Novena edición</h2>
                    </div>
                    <div className="mt-10 w-full flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full md:w-[450px] flex flex-col gap-3">
                            <p className="text-center lg:text-left">
                                ¡Celebremos la novena edición del <span className="text-lLightGreen">Concurso Regional de Literatura Calíope 2024!</span> Bajo el lema <span className="text-lLightGreen">"Unidad y Diversidad"</span>, 
                                invitamos a todos los residentes de Los Lagos a participar con sus cuentos y poesías inéditos. Este año promete 
                                emocionantes desafíos y una plataforma para expresar tu creatividad literaria. Además, habrá premios especiales para 
                                los ganadores, incluyendo libros donados por nuestros patrocinadores y galardones. No pierdas la oportunidad de ser 
                                parte de esta tradición literaria y dejar tu huella en la historia del concurso.
                            </p>
                        </div>
                        <div className="mt-10 lg:mt-0 lg:ml-10 w-[250px] md:w-[300px]">
                            <img src="./reading.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[white] w-full justify-center px-10 py-20 sm:p-24 inline-flex items-align">
                <div className="w-full flex flex-col max-w-[800px]">
                <div className="w-full lg:w-[800px] flex flex-col gap-3">
                <div className="relative border-b-2 border-lLightGreen max-w-[800px] inline-flex justify-center">
                        <h2 id="about" className="absolute mt-[-25px] px-4 text-center text-lLightGreen text-[30px] w-auto bg-[white] poppins-light">Bases</h2>
                    </div>
                    <h3 className="mt-[20px] text-lGreen text-[20px] poppins-regular text-center">Noveno Concurso Regional de Literatura Calíope 2024</h3>
                    <h3 className="mt-[-20px] text-[15px] poppins-regular text-center">“Unidad y Diversidad”</h3>
                    <h3 className="mt-[-30px] text-[15px] poppins-regular text-center">“Cuento y poesía”</h3>

                    <ul className="flex flex-col gap-3 md:px-10">
                        <div className="border-b border-[#ddd] my-2"></div>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Podrán participar personas de toda edad con residencia en la región de Los Lagos.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Deberá considerarse en las obras el o los temas siguientes: “Unidad y Diversidad”.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán elegir para expresarse, cualquiera de los siguientes géneros:</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Género narrativo, en su expresión de cuento.</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Género lírico en su expresión poesía.</li>
                        <div className="border-b border-[#ddd] my-2"></div>
                        <div className="mt-0 ml-0">
                            <li className="ml-10 mb-2">Cuento</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La extensión del cuento deberá tener un máximo de diez carillas, letra Arial N°12, tamaño carta a doble espacio.</li>
                        </div>
                        <div className="mt-5 ml-0">
                            <li className="ml-10 mb-2">Poesia</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La estructura y métrica del poema es libre.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Los caracteres deben estar en letra Arial N°12, tamaño carta doble espacio.</li>
                        </div>
                    </ul>
                    <div className="border-b border-[#ddd] my-2 "></div>
                    <ul className="flex flex-col gap-3 md:px-10">
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los trabajos deberán ser completamente inéditos y no haber participado en otros concursos, esta causal o bien plagio, será motivo de eliminación. Las obras tendrán que ser enviadas en forma digital, a través del correo electrónico de Nueva Acrópolis Puerto Montt: puertomontt@nueva-acropolis.cl en formato word o PDF, deberá incluir nombre completo del concursante, número de contacto y correo electronico personal.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los ganadores serán contactados por la misma vía, a los cuales se les solicitará, fotocopia de su cédula de identidad, por ambos lados y un comprobante de domicilio (boleta de luz, agua o certificado), con la finalidad de corroborar su residencia regional.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán participar solo con un título por género literario.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El plazo de recepción de las obras es a contar del 9 de Marzo de 2024 hasta el 1 de junio de 2024 inclusive, posterior a eso quedarán fuera del concurso. Los trabajos deberán tener fecha de envío anterior o igual a la fecha de cierre del concurso.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La premiación se realizará en un acto público el día 15 de Junio a las 19:00 hrs en la sede de la Corporación Cultural Nueva Acrópolis Puerto Montt, ubicada en calle Anibal Pinto #297.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El jurado estará constituido por dos especialistas del ámbito, cuya identidad será revelada en el momento de la premiación. Los señores jurados podrán declarar desierto el concurso en cualquiera de los dos géneros, si lo estimaran necesario, por falencia en el cumplimiento de las bases u otro motivo justificado.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Habrá solo un premio, por cada género literario, que constará de libros donados por los patrocinadores: “Biblioteca Regional de Los Lagos” y “Libros Sotavento”, más un galardón por género literario premiado y un diploma para los ganadores y para el escritor más joven.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El autor al participar da autorización explícita a la organización quien se reserva el derecho de publicación en sus medios de difusión asociados para conocimiento público de las obras.</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="bg-lGreen h-[100px] w-full">

            </div>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title className="px-0 pt-2 md:px-5 md:pt-5 !text-[30px]">Inscripción</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-0 md:px-5">
                    <p>¡Inscribirse en el Noveno Concurso Regional de Literatura Calíope 2024 es fácil!</p>
                    <p>Sigue estos cuatro pasos:</p>

                    <ol className="flex flex-col gap-3 mt-10 px-2 md:px-5">
                    <li className="inline-flex items-start gap-2"><div className="w-[20px]"><TfiCheckBox className="!text-[18px] text-lLightGreen"/></div>Prepara tu obra literaria inédita en formato Word o PDF, siguiendo las bases del concurso.</li>
                    <li className="inline-flex items-start gap-2"><div className="w-[20px]"><TfiCheckBox className="!text-[18px] text-lLightGreen"/></div>Envía tu obra adjunta por correo electrónico a: </li>
                    <li className="inline-flex items-start gap-2 ml-7 mt-[-12px]"><a className="text-lGreen poppins-regular underline" href="mailto:puertomontt@nueva-acropolis.cl?subject=Inscripción%20Concurso%20Literario%20Calíope%202024">puertomontt@nueva-acropolis.cl</a></li>
                    <li className="inline-flex items-start gap-2"><div className="w-[20px]"><TfiCheckBox className="!text-[18px] text-lLightGreen"/></div>En el correo electrónico, incluye los siguientes datos:</li>
                        <div className="px-5 flex flex-col text-lGreen ml-5">
                        <li>- Nombre completo: <span className="hidden md:inline-flex italic text-[#aaa] ml-3">ej: Juan Muñoz Ortega</span></li>
                        <li>- Número de contacto: <span className="hidden md:inline-flex italic text-[#aaa] ml-3">ej: 9 21002198</span></li>
                        <li>- Correo electrónico personal: <span className="hidden md:inline-flex italic text-[#aaa] ml-3">ej: juanmunozortega@micorreo.cl</span></li>
                        </div>
                    <li className="inline-flex items-start gap-2"><div className="w-[20px]"><TfiCheckBox className="!text-[18px] text-lLightGreen"/></div>Asegúrate de que tu obra sea enviada antes del 1 de junio de 2024, fecha de cierre del concurso.</li>
                    </ol>

                    <p className="mt-10">¡Y eso es todo! Una vez enviado tu trabajo, estarás participando en este emocionante evento literario. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos a través del correo electrónico proporcionado.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} appearance="primary" color="green">
                    Volver
                    </Button>
                </Modal.Footer>
            </Modal>

        </LayoutHero>
    )
}

export default Home
