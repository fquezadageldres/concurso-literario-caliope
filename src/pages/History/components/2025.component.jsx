import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import { Modal, ButtonToolbar, Button } from 'rsuite';
import { GoChecklist, GoImage, GoInfo } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';

import Img0 from '../img/2025/0.jpeg';

export const Version2025 = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setActiveKey(1)
    };
    const [activeKey, setActiveKey] = useState(1)

    return (
        <div className='mt-20 md:mt-28 w-full flex justify-center items-cnenter'>
            <div className='max-w-[800px] w-full px-2 md:px-5 pb-10'>

            <Accordion activeKey={activeKey} bordered onSelect={setActiveKey}>
                <Accordion.Panel header={
                    <Header
                    avatarUrl={<GoInfo className='text-[40px] text-lLightGreen'/>}
                    title="Información general"
                    subtitle="Información general del concurso, tema y otros"
                    />
                } eventKey={1}>
                    <div className='mx-12'>
                        <p>Nombre: <span className='text-[#999] ml-2'>10º Concurso Regional de Literatura Calíope</span></p>
                        <p>Tema: <span className='text-[#999] ml-2'>Mitología de los pueblos originarios Chilenos</span></p>
                        <p>Formato: <span className='text-[#999] ml-2'>Poesías y Obras plásticas</span></p>
                        <p>Fecha de entrega: <span className='text-[#999] ml-2'>01 abril 2025 - 31 de mayo 2025</span></p>
                        <p>Fecha de premiación: <span className='text-[#999] ml-2'>18 de junio 2025 19:00hrs</span></p>
                        <p>Lugar de premiación: <span className='text-[#999] ml-2'>Corporación Cultural Nueva Acrópolis Puerto Montt - Anibal Pinto #297</span></p>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel onClick={() => handleOpen()} header={
                    <Header
                    avatarUrl={<GoImage className='text-[40px] text-lLightGreen'/>}
                    title="Fotos"
                    subtitle="Registro evento de premiación"
                    />
                } eventKey={2}>
                </Accordion.Panel>
                <Accordion.Panel header={
                    <Header
                    avatarUrl={<GoChecklist className='text-[38px] text-lLightGreen'/>}
                    title="Bases"
                    subtitle="Reglamento y directrices"
                    />
                } eventKey={3}>
                <div  className='mx-12'>

                    <ul className="flex flex-col gap-3 md:px-10">
                        <div className="border-b border-[#ddd] my-2"></div>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Podrán participar personas mayores de edad con residencia en la región de Los
                            Lagos y de la región de Los Ríos.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Deberá considerarse para la realización de la obra plástica o poética el
                            siguiente tema: “Mitología de los pueblos originarios Chilenos”.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán elegir uno de los siguientes géneros artísticos para
                            desarrollar el tema:</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Poesía.</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Obra plástica.</li>
                        <div className="border-b border-[#ddd] my-2"></div>
                        <div className="mt-0 ml-0">
                            <li className="ml-10 mb-2">Poesía</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La estructura y métrica del poema es libre.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Los caracteres deben estar en letra Arial N°12, tamaño carta doble espacio.</li>
                        </div>
                        <div className="mt-5 ml-0">
                            <li className="ml-10 mb-2">Obra plástica</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Las técnicas a emplear podrán ser: Óleo, Acrílico, Acuarela, Tempera o Grabado, siempre y cuando respeten las condiciones bidimensionales y de tamaño detalladas a continuación.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Formato de entrega: Las obras no podrán exceder los 1.20 x 1.20 m. ni ser inferior a 0.90 x 0.90 m.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Formato acuarelas: 0.50 x 0.70 cm.</li>
                        </div>
                    </ul>
                    <div className="border-b border-[#ddd] my-2 "></div>
                    <ul className="flex flex-col gap-3 md:px-10">
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los trabajos deberán ser completamente inéditos y no haber participado en otros concursos, esta causal o bien el plagio de la obra de un tercero, será motivo de eliminación. La categoría poesía deberá enviar su trabajo en forma digital, a través del correo electrónico de Nueva Acrópolis Puerto Montt: puertomontt@nueva-acropolis.cl en formato word o PDF, deberá incluir nombre completo del concursante, número de contacto y correo electrónico personal. La categoría obra plástica será recepcionada en nuestra sede ubicada en Aníbal Pinto #297. El autor se hace responsable del envío y devolución de su obra. La obra no debe venir firmada ni señalada con nombre, ni título del cuadro. La identificación debe venir en sobre cerrado adjunto con nombre, dirección, teléfono, correo electrónico, cédula de identidad y nombre de la obra.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los ganadores serán contactados por la misma vía, a los cuales se les solicitará, fotocopia de su cédula de identidad, por ambos lados y un comprobante de domicilio (boleta de luz, agua o certificado), con la finalidad de corroborar su residencia regional.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán participar solo con un título por género.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El plazo de recepción de las obras es a contar de 01 abril hasta el 31 de mayo inclusive, posterior a eso quedarán fuera del concurso. Los trabajos deberán tener fecha de envío anterior o igual a la fecha de cierre del concurso.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La premiación se realizará en un acto público el día 18 de junio a las 19:00 hrs en la sede de la Corporación Cultural Nueva Acrópolis Puerto Montt, ubicada en calle Aníbal Pinto #297.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El jurado estará constituido por 2 especialistas del ámbito, más la opinión de la organización, cuya identidad será revelada en el momento de la premiación. Los señores jurados podrán declarar desierto el concurso en cualquiera de los 2 géneros, si lo estimaran necesario, por falencia en el cumplimiento de las bases u otro motivo justificado.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Habrá solo un ganador por cada género, para la categoría de poesía el premio constará de libros donados por las entidades colaborativas: “Biblioteca Regional Puerto Montt”, “Libros Sotavento”, “Biblioteca Puerto Varas” más un galardón. Y el segundo lugar recibirá una mención honrosa que consiste en un diploma reconociendo su participación. El premio para el ganador en categoría Obra Plástica será un galardón, y materiales de bellas artes donados por las entidades colaborativas “Galería compañía de artes” y “Librería Patagonia”, más un libro. El segundo lugar recibirá una mención honrosa reconociendo su participación.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El autor al participar da autorización explícita a la organización quien se reserva el derecho de publicación en sus medios de difusión asociados para conocimiento público de las obras, tanto de poesía como obra plástica. Además, se ofrece la disposición de espacio en la organización cultural Nueva Acrópolis para exponer al público en general, las obras tanto poesía como obra plástica por el periodo de un mes.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La decisión del jurado será inapelable.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La inscripción en el concurso implica la aceptación total de las bases.</li>
                    </ul>
                </div>
                </Accordion.Panel>
            </Accordion>
            </div>
            <Modal overflow={false} size={"lg"} backdrop={true} keyboard={false} open={open} onClose={handleClose}>
                <Modal.Header className='mb-3'>
                    <Modal.Title>Fotos 10º Concurso Interregional Poesía - Pintura Calíope</Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex flex-col overflow-scroll gap-5 max-h-[600px] md:max-h-[800px]'>
                        <img src={Img0} alt="" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

const Header = props => {
    const { avatarUrl, title, subtitle, ...rest } = props;
    return (
      <Stack {...rest} spacing={10} alignItems="flex-start">
        {avatarUrl}
        <Stack spacing={2} direction="column" alignItems="flex-start">
          <div>{title}</div>
          <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{subtitle}</div>
        </Stack>
      </Stack>
    );
  };

export default Version2025
