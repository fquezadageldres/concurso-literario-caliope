import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import { Modal, ButtonToolbar, Button } from 'rsuite';
import { GoChecklist, GoImage, GoInfo } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';

import Img0 from '../img/2024/0.jpeg';
import Img1 from '../img/2024/1.jpeg';
import Img2 from '../img/2024/2.jpeg';
import Img3 from '../img/2024/3.jpeg';
import Img4 from '../img/2024/4.jpeg';
import {PiMedalLight} from "react-icons/pi";

export const Version2024 = () => {

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
                        <p>Nombre: <span className='text-[#999] ml-2'>9º Concurso Regional de Literatura Calíope</span></p>
                        <p>Tema: <span className='text-[#999] ml-2'>Unidad y Diversidad</span></p>
                        <p>Formato literario: <span className='text-[#999] ml-2'>Cuentos y Poesías</span></p>
                        <p>Fecha de entrega: <span className='text-[#999] ml-2'>9 de marzo 2024 - 1 de junio 2024</span></p>
                        <p>Fecha de premiación: <span className='text-[#999] ml-2'>15 de junio 2023 19:00hrs</span></p>
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
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El plazo de recepción de las obras es a contar del 9 de Marzo de 2024 hasta el 1 de junio de 2024 inclusive, posterior a eso quedarán fuera del concurso. Los trabajos deberán tener fecha de envío anterior o igual a la fecha de cierre del concurso.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La premiación se realizará en un acto público el día 15 de Junio a las 19:00 hrs en la sede de la Corporación Cultural Nueva Acrópolis Puerto Montt, ubicada en calle Anibal Pinto #297.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El jurado estará constituido por dos especialistas del ámbito, cuya identidad será revelada en el momento de la premiación. Los señores jurados podrán declarar desierto el concurso en cualquiera de los dos géneros, si lo estimaran necesario, por falencia en el cumplimiento de las bases u otro motivo justificado.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Habrá solo un premio, por cada género literario, que constará de libros donados por los patrocinadores: “Biblioteca Regional de Los Lagos” y “Libros Sotavento”, más un galardón por género literario premiado y un diploma para los ganadores y para el escritor más joven.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El autor al participar da autorización explícita a la organización quien se reserva el derecho de publicación en sus medios de difusión asociados para conocimiento público de las obras.</li>
                    </ul>
                </div>
                </Accordion.Panel>
                <Accordion.Panel header={
                    <Header
                        avatarUrl={<PiMedalLight className='text-[38px] text-lLightGreen'/>}
                        title="Ganador categoría - Cuentos"
                        subtitle="Bradicardia - Rodrigo Alonso Estay Villalón"
                    />
                } eventKey={4}>
                    <div className='mx-12'>
                        <p className='text-[22px] text-lLightGreen'>Bradicardia</p>
                        <p className='mt-[-5px] text-[14px] text-lText'>Rodrigo Alonso Estay Villalón</p>
                        <p>
                            -La historia futurista de un señor que implosionó debido a su patológica visión
                            de la normalidad. El designio del amor-
                            <br/><br/>- Hoy, en este preciso instante:
                            <br/><br/>Mi nombre es Manuel, tengo 51 años, y llevo corriendo aproximadamente 47
                            minutos de manera ininterrumpida, estoy arrancando, con mucho miedo, más bien
                            desesperación, y no puedo detenerme, estoy pensando que muy probablemente puedo
                            morir en lo que queda del día, o quizás, transformarme en un extraño monstruo del
                            infierno, y el pavor me consume, lo digo así de claro; así de confuso. Lo más terrible
                            de mi situación, es que extrañamente no sé de qué estoy arrancando, a pesar de tener
                            la certeza de que es de vida o muerte, de que debo correr para intentar salvar mi vida,
                            o la de los que amo tanto como a mí mismo; sé exactamente lo que siento en este
                            instante, confío profundamente en ello, pero no recuerdo nada. Absolutamente nada.
                            <br/><br/>- 15 años atrás, con memoria, datos de su manuscrito:
                            <br/><br/>“Estamos en el año 2031, lo escribo porque estoy extrañamente desesperado,
                            porque sé que algo muy grande va a pasar, no sé qué pueda ser, pero tengo la certeza
                            de que todo cambiará”. Eso se leía en unas hojas manuscritas, dejadas por Manuel
                            antes de darse cuenta de su gran designio, en el piso, junto al frasco. Decía que la
                            humanidad ya no sería nunca más lo mismo; partiendo por el hecho, terrible, de que
                            ese día dejó de ver a su hija, desapareció. Era el año 2002, ciudad de Cabo Fresco en
                            el sur del país de Patagonias Unidas, día jueves 4 de junio, con un frío invernal y una humedad desatada. Caminaba Manuel esa mañana por las calles lúgubres y
                            desordenadas del sur, las que le daban mucha tranquilidad a pesar de todo, el agua
                            era vida, justamente lo que se asociaba con felicidad en esos tiempos, primeras
                            décadas del segundo milenio. Caminaba a paso medio, con una mano en el bolsillo, y
                            con la otra apretaba fuertemente una pequeña mano, la de su segunda hija, Valentina,
                            de 5 años, mientras la llevaba, estaban buscando dónde comprar un helado, les
                            encantaba comer helado mientras llovía, era como un acto de rebeldía y poder,
                            estaban, de hecho, en medio de una actividad tradicional para ellos, lo hacían casi
                            todos los fines de semana, lo hacía sentir muy feliz a Manuel, quizás el momento de
                            felicidad que él buscaba, era como decía él, sentirse “normal”, como cualquier papá
                            con su hija; Valentina tenía una discapacidad, problemas en su médula ósea que le
                            impedían caminar y mover su brazo izquierdo, además de daño cognitivo, lo que hacía
                            muy complejo comunicarse con ella. A Manuel siempre le costó mucho convivir con
                            eso, sumado a que, con su hija mayor, Renata, que en esos momentos ya tenía 19
                            años, nunca pudo tener una relación, desde que era muy pequeña chocaron y pelearon
                            hasta el hartazgo, hasta que a los 15 años ella se fue de su casa con su novia de 25;
                            que “para qué vamos a hablar de ella”, decía, y escribía, siempre Manuel.
                            <br/><br/>Manuel nunca asumió lo que sucedía con sus hijas, vivía con mucha culpa, con
                            rabia, a veces odiaba el mundo, considerando, además, que la madre de las hijas se
                            fue al nacer Valentina, se fue a viajar por el mundo con la que según Manuel era una
                            “secta mataguaguas”, una agrupación “delictual y pseudoreligiosa”; en fin, Manuel
                            intentó con mucha dignidad sacar adelante a sus hijas, con apoyo familiar y un trabajo
                            regular. Todo eso, mientras en su interior los sentimientos se engullían su cerebro, lo tenían vacío, se avergonzaba de su familia que amaba, y más aún se avergonzaba de
                            él mismo por avergonzarse; no era la familia que el soñó; no podía comunicarse con
                            ninguna de sus hijas, sin mencionar que nunca llegó el esperado primogénito que su
                            familia esperaba.
                            <br/><br/>En ese momento, en esa búsqueda matinal por las calles de la ciudad, en la
                            búsqueda de su anhelada normalidad y tranquilidad mental, en la búsqueda de ese
                            prístino instante de felicidad, vio algo muy atractivo al fondo de la calle, junto a la
                            notaría.
                            <br/><br/>- ¡Valentina! Grito espontáneamente, ¡Vale! ¡Mira! ¡Helados!
                            <br/><br/>Ella, esa fría mañana, como en una reacción instintiva, atinó a soltarle la mano
                            a Manuel, él sintió cada uno de sus dedos deslizándose a través de los suyos,
                            soltándose como en cámara lenta, sintió su vibración hasta mucho después de
                            soltarlos, mientras la veía correr, mágica y prístinamente, hacia la heladería, saliendo
                            su silla de ruedas eyectada en dirección contraria con el bravo impulso, la vio alejarse
                            tan lento y tan veloz a la vez, en una imagen tan dantesca como celestial, en unos
                            segundos eternos, en blanco y negro, brumoso, salpicado con colores flúor,
                            destellantes; fueron segundos prestados de otro mundo, que lo dejaron mudo, a medio
                            morir, como sabiendo en ese instante, que no la volvería a ver nunca más, o al menos,
                            no en esa misma realidad, puta realidad.
                            <br/><br/>Así lo escribió Manuel es día: “Así sucedió, no puedo explicarlo, solo puedo
                            contar lo que vi. ¡Corría Valentina, sí, corría! a unos 20 metros de mí, cuando de alguna
                            extraña, y aterradora manera, vi un muro completamente negro, como la noche más oscura, de un negro profundo, intenso, y muy denso, el muro se interpuso entre ella y
                            yo, cubría todo mi horizonte medio, fueron mis momentos más terribles, los segundos
                            más largos, sin saber cómo reaccionar, quedé mirando fijo, buscando señales,
                            buscando rendijas, buscando a mi hija”. Manuel ese día, hace 15 años atrás, conoció
                            el muro negro, ese fatídico muro negro, el que hizo caminar a su hija y se la llevó.
                            <br/><br/>- 30 años atrás, con memoria, datos de su manuscrito:
                            <br/><br/>Manuel le decía a Francisca, la hermosa compañera que conoció en la
                            universidad, que era ella quien le transformaría su vida, que era la llamada a unirse a
                            él, y convertirse juntos en el amor. Manuel, un romántico de novela turca, en ese tiempo
                            era un joven tradicional, proveniente de una familia típica, de situación socioeconómica
                            media, tenía a su padre, a su madre y a su hermano, con los cuales se desarrolló y
                            maduró lentamente pero firme; siempre estuvo a la espera de conocer a la mujer con
                            la que pudiera formar una familia, una familia como la que tuvo él, ojalá con sus mismos
                            gustos y costumbres; no quería sobresaltos ni pasar riesgos innecesarios, la idea de
                            una vida tranquila, hogareña y sin aspavientos, lo hacía soñar con su futuro, y con esta
                            mujer que estaba conociendo, ahora, de una manera romántica; soñaban ahora juntos
                            con sus hijos, con su familia, con, ojalá, vivir en el barrio de toda su vida; “personas
                            serias” decía él.
                            <br/><br/>- Francisca, te amo, le dijo una tarde cualquiera, mientras caminaban de la mano
                            en un parque de la ciudad, en Cabo Fresco.
                            <br/><br/>- Yo también le respondió ella con cierta somnolencia.
                            <br/><br/>Se casaron al año después, en un matrimonio austero pero significativo, con
                            toda su familia presente, y algunos amigos de Francisca, ya que no tenía mucha familia
                            por lo que dijo siempre. Ese mismo día planificaron su vida, proyectaron hijos, hogar, y
                            un pasar de tranquilidad familiar. Todo era perfecto, Manuel estaba armando su futuro,
                            de “personas serias”, sin influencias modernas ni modas alternativas de gente
                            superficial.
                            <br/><br/>- Hoy, en este preciso instante:
                            <br/><br/>Llevo 55 minutos ya corriendo, gracias a que me mantengo bien físicamente al
                            parecer, sin embargo, me quedan pocas fuerzas, ya mi ritmo bajó, y se ha transformado
                            en un suave trote, con mucho miedo, quizás solo impulsado por él; voy intentando
                            recordar cualquier cosa, intentando descifrar, cuando de un momento a otro, de manera
                            muy solapada, con una sutileza que solo puede provenir de las tinieblas, comienzo a
                            ver algo al fondo, cubriendo el horizonte, es de día, pero se comienza a ver oscuro al
                            final de mi vista, es como un muro, un muro majestuosamente negro, sin texturas,
                            opaco completamente, con bordes muy bien delimitados que contrastan con la luz del
                            día, no sé quién soy ni qué hago acá, pero no puedo detenerme, y me acerco al muro,
                            que ya empieza a cubrir todo mi campo visual, estoy divagando, no logro comprender
                            lo que sucede.
                            <br/><br/>- ¡Ayudaaaa! Grito.
                            <br/><br/>- ¡Ayudaaa! Grito más fuerte.
                            <br/><br/>- ¡Por favor! ¿Dónde estoooy? Grito con exigencia y automatismo, queriendo
                            saber dónde estoy, antes de quién soy. ¿Tendrá que ver eso justamente con
                            quién soy? Pienso incrédulo después, en medio de esta total locura.
                            <br/><br/>En ese mismo instante, como una imagen onírica, llena de surrealismo, el denso
                            muro comenzó lentamente a difuminarse, como si estuviera gasificándose, haciéndose
                            transparente, ese color negro intenso se va poniendo gris y traslúcido, todo en un
                            minuto o dos, se desvanece progresivamente; se comienzan a ver movimientos de
                            cosas, de seres, por detrás del muro. Pareciera que hay algo, piensa Manuel, o intenta
                            al menos pensar, ante su aparente locura.
                            <br/><br/>En eso estaba, cuando ve que salen personas desde el muro, caminan hacia él,
                            están a unos 15 metros de distancia; incrédulo y al borde del desmayo, Manuel se frota
                            los ojos y comienza su mente rápidamente a elaborar imágenes, de personas, a
                            construir sentimientos, emociones...¡Recuerdos! ¡Son recuerdos! Manuel comienza a
                            recordar cosas, en una extraña simbiosis con lo que sus ojos ven, es como si lo que
                            sale del muro en deformación, fueran sus propios recuerdos, salieran de su más
                            profunda consciencia. Aparece su abuelo muerto, su madre, su padre, que ¡también
                            están muertos! En eso ve que vienen algunos antiguos amigos, la señora Berta, Don
                            Camilo, ¡todos muertos! ¡Qué está pasando por Dios! Cae en la cuenta, al mismo
                            tiempo que sus recuerdos, su vida, sus amores, lo inunda todo, y empieza a ver su
                            historia de manera instantánea. Mientras, no puede dar crédito a lo que ve, surge ahora,
                            desde lo profundo del muro, una imagen pequeña, una niña que viene hacia él...
                            ¡Valentina! ¡Valentinaaa! Grita con desesperación.
                            <br/><br/>Valentina, tal cual, lo recuerda ahora, camina por sus propios medios, como
                            cuando dejó de verla aquella mañana, con el mismo muro!, comenzando a recordar,
                            hace exactos 15 años, y ¡viene corriendo!, mientras simultáneamente aparece Renata,
                            aparece su mujer Francisca, su familia en pleno, sus 3 amores, todos sonríen y
                            proyectan el amor y la felicidad que siempre buscó. Manuel corre, con su última
                            voluntad, corre con todas sus fuerzas, rezando para que todo esto no fuera un sueño,
                            o producto de alguna cabrona locura.
                            <br/><br/>- En 6 años más, datos de una IA:
                            <br/><br/>Se ve a Manuel recostado. Yace en una cama de una plaza, sencilla, tradicional,
                            está vivo, recordando a sus hijas, a su señora, recordando su vida normal que tanto
                            quiso en algún momento, y ahora recuerda, sin entender por qué no pudo consolidar
                            su familia, por qué su señora lo abandonó, por qué sus hijas nunca fueron lo que él
                            soñó, por qué tuvo tan mala suerte, por qué tuvo que ver sufrir a sus hijas toda su vida,
                            y sólo poder verlas sonreír con verdadera alegría el día que las vio emerger desde
                            aquel imponente muro, que nunca entendió; que asumió como un gran sueño. ¡Qué
                            injusta es la vida! Murmuraba para sí, cuando intempestivamente lo agarra un sollozo
                            gutural pero lánguido, que se transforma rápidamente en llanto, un llanto desenfrenado,
                            inconsolable, tan intenso y agresivo que parece poseído, se contorsiona hasta el punto
                            que cae de la cama; está enfermo y le cuesta moverse sin la ayuda de una enfermera;
                            en el suelo comienza a gritar, a azotar la cabeza contra el piso, con los ojos abiertos
                            como bolas de fuego, su garganta a punto del desgarro, rojo como un tomate, con las
                            venas al borde de reventar, hasta que deja salir, primero, un suave y murmurante
                            “perdón” ... ¡Perdón! Con más fuerza “Solo quería verlas sonreír” “¡Eran mi responsabilidad, fui un bastardo hijo de puta!”. Manuel se da cuenta de su gran designio
                            autoimpuesto, recuerda el muro, ya no soporta más.
                            <br/><br/>Manuel, con sus últimos hálitos, con las últimas señales del sistema nervioso a
                            la médula espinal, con movimientos involuntarios, con su corazón en “slow motion”,
                            dejó un frasco semi vacío al costado, junto a una rueda de la cama, junto a sus
                            manuscritos, luego puso sus manos en su corazón, y cerró los ojos, esperando esta
                            vez sí cumplir su sueño, en el lugar donde todos somos iguales, donde la unidad, la
                            uniformidad y la normalidad de las “personas serias” reina de verdad ¡carajo! Cuando
                            lo encontraron tenía 3 amapolas en sus manos, muy apretadas, y tan rojas como la
                            sangre que derramó hace 21 años, por amor.
                        </p>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel header={
                    <Header
                        avatarUrl={<PiMedalLight className='text-[38px] text-lLightGreen'/>}
                        title="Ganador categoría - Poesía"
                        subtitle="La unidad y su Coyuntura Ciudadana - Héctor A. Vargas Montaña"
                    />
                } eventKey={5}>
                    <div className='mx-12 text-center flex flex-col gap-2'>
                        <p className='text-[22px] text-lLightGreen'>La unidad y su Coyuntura Ciudadana</p>
                        <p className='mt-[-5px] text-[14px] text-lText mb-5'>Héctor A. Vargas Montaña</p>
                        <p>El uno, la unidad, lo unilateral,</p>
                        <p>es parte y contraparte de nuestra convivencia,</p>
                        <p>un triángulo apunta a mi único horizonte,</p>
                        <p>un corazón late detrás de esta corteza.</p>
                        <br/>
                        <p>La unidad se agazapa en el anonimato,</p>
                        <p>en mi cuerpo cada órgano cumple su objetivo,</p>
                        <p>unidos frente a toda la contaminación,</p>
                        <p>la unidad es el resorte visceral de mi ombligo.</p>
                        <br/>
                        <p>¿Para qué más sirve la unidad planetaria,</p>
                        <p>qué gano con hacerme de amigos?,</p>
                        <p>en la coyuntura de cada ciudadano,</p>
                        <p>se necesita sobretodo estar unidos.</p>
                        <br/>
                        <p>Me parece sustancial estar consciente,</p>
                        <p>que nadie es importante por si solo,</p>
                        <p>se requiere de un sol para el planeta,</p>
                        <p>y soñamos con la luna frente al molo.</p>
                        <br/>
                        <p>Uno, unidad, unilateral,</p>
                        <p>conlleva un compromiso permanente,</p>
                        <p>nadie es más importante que todos juntos,</p>
                        <p>me recuerda este cerebro incandescente.</p>
                        <br/>
                        <p>Llamo entonces a ser uno en la palabra,</p>
                        <p>en la entrega fraternal de cada día,</p>
                        <p>una estrella para aquel que está perdido,</p>
                        <p>una mano que remedia las heridas.</p>
                        <br/>
                        <p>Si pudiéramos mirarnos como cuerpos,</p>
                        <p>esta gran verdad sería consigna,</p>
                        <p>todos trabajando al unísono,</p>
                        <p>por lograr los objetivos de la vida.</p>
                        <br/>
                        <p>No hay rivalidad entre los órganos del cuerpo,</p>
                        <p>cada uno aporta sin medida,</p>
                        <p>y lo mismo va para nosotros,</p>
                        <p>en la Escuela, el trabajo o la familia.</p>
                        <br/>
                        <p>Guardo mis emblemas personales,</p>
                        <p>para disfrutar de la alegría,</p>
                        <p>gota a gota se rompe la roca,</p>
                        <p>y las gotas se hacen ríos calle arriba.</p>
                        <br/>
                        <p>Entre mis pirámides antiguas,</p>
                        <p>aún flamean fotos y sonrisas,</p>
                        <p>un universo me mira desde lejos,</p>
                        <p>un astronauta me devuelve una sonrisa.</p>
                        <br/>
                        <p>En el rascacielos  de mi pecho,</p>
                        <p>arde una unidad siempre encendida,</p>
                        <p>la diversidad me hace persona,</p>
                        <p>pero eso es tema, para otro día.</p>

                    </div>
                </Accordion.Panel>
            </Accordion>
            </div>
            <Modal overflow={false} size={"lg"} backdrop={true} keyboard={false} open={open} onClose={handleClose}>
                <Modal.Header className='mb-3'>
                    <Modal.Title>Fotos 9º Concurso Regional de Literatura Calíope</Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex flex-col overflow-scroll gap-5 max-h-[600px] md:max-h-[800px]'>
                        <img src={Img0} alt="" />
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
                        <img src={Img4} alt="" />
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

export default Version2024
