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
                        <p>Nombre: <span className='text-[#999] ml-2'>10º Concurso Regional de Literatura Caliope</span></p>
                        <p>Tema: <span className='text-[#999] ml-2'>Unidad y Diversidad</span></p>
                        <p>Formato literario: <span className='text-[#999] ml-2'>Cuentos y Poesías</span></p>
                        <p>Fecha de entrega: <span className='text-[#999] ml-2'>9 de marzo 2025 - 1 de junio 2025</span></p>
                        <p>Fecha de premiación: <span className='text-[#999] ml-2'>15 de junio 2025 19:00hrs</span></p>
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
                <ul className="flex flex-col gap-3 md:px-10 mt-5">
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
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El plazo de recepción de las obras es a contar del 9 de Marzo de 2025 hasta el 1 de junio de 2025 inclusive, posterior a eso quedarán fuera del concurso. Los trabajos deberán tener fecha de envío anterior o igual a la fecha de cierre del concurso.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La premiación se realizará en un acto público el día 15 de Junio a las 19:00 hrs en la sede de la Corporación Cultural Nueva Acrópolis Puerto Montt, ubicada en calle Anibal Pinto #297.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El jurado estará constituido por dos especialistas del ámbito, cuya identidad será revelada en el momento de la premiación. Los señores jurados podrán declarar desierto el concurso en cualquiera de los dos géneros, si lo estimaran necesario, por falencia en el cumplimiento de las bases u otro motivo justificado.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Habrá solo un premio, por cada género literario, que constará de libros donados por los patrocinadores: “Biblioteca Regional de Los Lagos” y “Libros Sotavento”, más un galardón por género literario premiado y un diploma para los ganadores y para el escritor más joven.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El autor al participar da autorización explícita a la organización quien se reserva el derecho de publicación en sus medios de difusión asociados para conocimiento público de las obras.</li>
                    </ul>
                </div>
                </Accordion.Panel>
            </Accordion>
            </div>
            <Modal overflow={false} size={"lg"} backdrop={true} keyboard={false} open={open} onClose={handleClose}>
                <Modal.Header className='mb-3'>
                    <Modal.Title>Fotos 9º Concurso Regional de Literatura Caliope</Modal.Title>
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
