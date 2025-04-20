import { Accordion, Placeholder, Stack, Avatar } from 'rsuite';
import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import { Modal, ButtonToolbar, Button } from 'rsuite';
import { GoChecklist, GoImage, GoInfo } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { PiMedalLight } from "react-icons/pi";
import { useState } from 'react';

import Img0 from '../img/2023/0.png'
import Img1 from '../img/2023/1.jpeg'
import Img2 from '../img/2023/2.jpeg'
import Img3 from '../img/2023/3.jpeg'

export const Version2023 = () => {

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
                        <p>Nombre: <span className='text-[#999] ml-2'>8º Concurso Regional de Literatura Calíope</span></p>
                        <p>Tema: <span className='text-[#999] ml-2'>Historia y/o Mitología Nacional</span></p>
                        <p>Formato literario: <span className='text-[#999] ml-2'>Cuentos, Poesías y Ensayos</span></p>
                        <p>Fecha de entrega: <span className='text-[#999] ml-2'>27 de marzo 2023 - 16 de junio 2023</span></p>
                        <p>Fecha de premiación: <span className='text-[#999] ml-2'>12 de julio 2023 19:00hrs</span></p>
                        <p>Lugar de premiación: <span className='text-[#999] ml-2'>Corporación Cultural Nueva Acrópolis Puerto Montt - Anibal Pinto #297</span></p>
                    </div>
                </Accordion.Panel>
                <Accordion.Panel onClick={() => handleOpen()} header={
                    <Header
                    avatarUrl={<GoImage className='text-[38px] text-lLightGreen'/>}
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
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Deberá considerarse en las obras el o los temas siguientes: “Historia y/o Mitología Nacional”.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán elegir para expresarse, cualquiera de los siguientes géneros:</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Género narrativo, en su expresión de cuento o ensayo.</li>
                        <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Género lírico en su expresión poesía.</li>
                        <div className="border-b border-[#ddd] my-2"></div>
                        <div className="mt-0 ml-0">
                            <li className="ml-10 mb-2">Cuento</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La extensión del cuento deberá tener un máximo de diez carillas, letra Arial N°12, tamaño carta a doble espacio.</li>
                        </div>
                        <div className="mt-5 ml-0">
                            <li className="ml-10 mb-2">Ensayo</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La estructura debe comprender prólogos, logos y epílogos.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La composición debe ser desarrollada en párrafos, con un máximo de ocho carillas, letra Arial N°12, en tamaño carta a doble espacio.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Debe incorporar citas y bibliografía.</li>
                        </div>
                        <div className="mt-5 ml-0">
                            <li className="ml-10 mb-2">Poesia</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> La estructura y métrica del poema es libre.</li>
                            <li className="inline-flex items-start gap-3 ml-10"><div className="w-[20px]"><IoMdCheckmark className="!text-[18px] text-lLightGreen"/></div> Los caracteres deben estar en letra Arial N°12, tamaño carta doble espacio.</li>
                        </div>
                    </ul>
                    <div className="border-b border-[#ddd] my-2 "></div>
                    <ul className="flex flex-col gap-3 md:px-10">
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los trabajos deberán ser completamente inéditos y no haber participado en otros concursos, esta causal o bien plagio, será motivo de eliminación. Las obras tendrán que ser enviadas en forma digital, a través del correo electrónico de Nueva Acrópolis Puerto Montt: puertomontt@nueva-acropolis.cl en formato word o PDF, deberá incluir nombre completo del concursante, número de contacto y correo electrónico personal.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los ganadores serán contactados por la misma vía, a los cuales se les solicitará, fotocopia de su cédula de identidad, por ambos lados y un comprobante de domicilio (boleta de luz, agua o certificado), con la finalidad de corroborar su residencia regional.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Los concursantes podrán participar solo con un título por género literario.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El plazo de recepción de las obras es a contar del 27 de marzo hasta el 15 de junio inclusive, posterior a eso quedarán fuera del concurso. Los trabajos deberán tener fecha de envío anterior o igual a la fecha de cierre del concurso.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> La premiación se realizará en un acto público el día 12 de Julio a las 19:00 hrs en la sede de la Corporación Cultural Nueva Acrópolis Puerto Montt, ubicada en calle Anibal Pinto #297.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El jurado estará constituido por tres especialistas del ámbito, cuya identidad será revelada en el momento de la premiación. Los señores jurados podrán declarar desierto el concurso en cualquiera de los tres géneros, si lo estimaran necesario, por falencia en el cumplimiento de las bases u otro motivo justificado.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> Habrá solo un premio, por cada género literario, que constará de libros donados por los patrocinadores: “Biblioteca Regional de Los Lagos” y “Libros Sotavento”, más un galardón por género literario premiado y un diploma para el escritor más joven.</li>
                        <li className="inline-flex items-start gap-3"><div className="w-[20px]"><GoChecklist className="!text-[24px] text-lLightGreen" /></div> El autor al participar da autorización explícita a la organización quien se reserva el derecho de publicación en sus medios de difusión asociados para conocimiento público de las obras.</li>
                    </ul>
                </div>
                </Accordion.Panel>
                <Accordion.Panel header={
                    <Header
                    avatarUrl={<PiMedalLight className='text-[38px] text-lLightGreen'/>}
                    title="Ganador categoría - Cuentos"
                    subtitle="El visitante - Fernando García Toledo"
                    />
                } eventKey={4}>
                
                <div className='mx-12'>
                    <p className='text-[22px] text-lLightGreen'>El visitante</p>
                    <p className='mt-[-5px] text-[14px] text-lText'>Fernando García Toledo</p>
                    <p>
                        El improvisado campamento se levantaba en una planicie rodeada de
                        bosques impenetrables y sombríos donde a futuro pasaría la Carretera Austral,
                        seis hombres formaban parte de la cuadrilla encargada de abrir la senda. Llevaban
                        dos meses en la zona, tres chilotes, dos de Calbuco y el que hacía de jefe, oriundo
                        de Aysén. La risa y el buen humor se dejaba oír perdiéndose en la senda recién
                        abierta, que más parecía una herida en medio de la tupida selva Austral. La lucha
                        por la subsistencia los había trasformado en hombres duros para el trabajo,
                        debiendo acostumbrarse a estar lejos de sus familias, perdidos en las montañas
                        por meses, luchando con el bosque y las lluvias, acallando sus sueños tras los
                        golpes del hacha, pero conservando la alegría que la vida da a aquellos que saben
                        amarla. Al terminar la jornada, Venancio “Beña” Cárcamo, se dirigió primero a
                        prender fuego y calentar una improvisada cena, mientras sus compañeros se
                        sacaban el sudor adherido al cuerpo y se refrescaban en las aguas del arroyo
                        cercano. Ya era tarde y la comida emanaba sus primeros vahos, se sentaron a
                        degustar el verdoso mate amargo y espumoso que de mano en mano pasaba. La
                        cuadrilla dirigida por Pancho Cares, “Aisenino”, era la de avanzada, la del trabajo
                        duro, pero a su vez la que anónimamente abría las puertas del futuro, no sólo para
                        los pobladores de la región, sino para las generaciones venideras. Cada uno de
                        ellos en el fondo sabía que la tarea era importante y la responsabilidad los unía
                        aún más. Fue Beña el último que con pasos largos se dirigió al estero, en él dejó
                        la tierra y el cansancio que su cuerpo acumulaba.
                        <br/><br/>- ¡Ey, Beña! -, dijo Rogelio Báez... <br/><br/>- ¿con qué te raspaste que quedaste tan
                        blanco?... ¡sí hasta te ves bonito! -.

                        <br/><br/>- Es que yo me lavo -, contestó, <br/><br/>- estos le tienen miedo al agua del estero -.
                        <br/><br/>- Y no es broma -, acotó el Chueco riendo, <br/><br/>- porque apenas moja la punta de la
                        nariz... ¡aprende Roge, aprende!... que en una de esas también quedas blanquito -
                        Todos rieron y observaron la cara de Rogelio Báez cuyo tono oscuro
                        sobresalía de los demás.
                        <br/><br/>- Lo que pasa es que yo soy tostadito por el sol, y eso se llama bronceado -.
                        <br/><br/>- Pero por lo que sé ve, naciste bronceado... pá’ mí que a ti te parieron en noche
                        oscura y a plena pampa -, dijo riendo Pancho Cares.
                        La sonrisa de Rogelio Báez dejo ver la blanca dentadura que daba tanta
                        vida a su cara redonda y con gesto alegre replicó...
                        <br/><br/>- ¡Sí!, no lo niego, oscurito pero sabrosito; y no blanquito y desabridito -.
                        La risa pobló el campamento y se aprestaron a comer. Mientras iba
                        pasando la tarde que aceleradamente se convertía en noche, se escucharon
                        ruidos en medio de los arboles cercanos, poco a poco, fueron más fuertes hasta
                        que de pronto, frente a ellos un gran perro negro comenzó a acercarse
                        lentamente, observándolos. Al verlo, Pancho Cares preguntó extrañado...
                        <br/><br/>- ¿Y este perro de dónde salió?, si por aquí no vive nadie... -
                        Era un animal grande, flaco, parecía viejo, se detuvo a distancia. Saúl
                        Paillán terminó de extraer la carne del hueso que tenía en la mano y se lo tiró.
                        <br/><br/>- ¡Pobre animal! -, dijo, <br/><br/>- debe haberse perdido, es posible que sea de un arriero -.
                        El hueso cayó cerca, pero no lo cogió, su mirada permanecía sobre el grupo.
                        <br/><br/>- ¿Qué querrá este animal? <br/><br/>- dijo intrigado, <br/><br/>- es extraño ni siquiera mira el hueso -.
                        <br/><br/>- Hay algo en este perro que no me gusta, no sé lo que es, pero no me inspira
                        confianza -, manifestó Pancho Cares, <br/><br/>- es un animal extraño -.

                        <br/><br/>- ¿Extraño por qué? <br/><br/>- preguntó Carmelo Subiabre.
                        <br/><br/>- No sé -, continuó Cares, <br/><br/>- algo tiene, un perro por estos lados, no sé -.
                        <br/><br/>- Bien digo yo -, es un perro extraviado... ¡quizás estos montes lo han dejado
                        medio salvaje! -.
                        Y sin darle más importancia se dirigieron al toldo que les servía de
                        dormitorio. Pancho Cares como de costumbre se puso a matear y antes de
                        acostarse verificó que los víveres estuvieran a resguardo en caso de lluvia.
                        Como siempre se levantaron al amanecer y se prepararon para la ardua
                        labor del día, un desayuno abundante a base de carne asada acompañada de
                        tortillas cocidas al rescoldo y mate daba a los hombres las energías que por el
                        duro trabajo necesitaban. Fue Beña el primero en darse cuenta de que faltaba
                        carne, la mantenían colgada de un cajón a cuyos costados una tupida malla
                        metálica impedía que se acercaran los insectos o roedores. Al ir a buscar el trozo
                        que pondría a cocer, se percató del hecho, y comentó,
                        <br/><br/>- ¡Qué raro! Estoy seguro de que había medio cordero entero y falta una pierna -
                        Beña lo miró serio y replicó,
                        <br/><br/>- Estoy seguro de que falta carne -.
                        <br/><br/>- A lo mejor te equivocaste y se quedó abierto el cajón y seguramente algún
                        animal se lo llevó -, acotó Paillán.
                        <br/><br/>- No, porque es difícil que cualquier animal alcance el cajón donde está colgado -,
                        afirmó Cares... <br/><br/>- en verdad es bien extraño... -
                        <br/><br/>- ¿No sería el perro? <br/><br/>- Insistió Paillán.
                        <br/><br/>- Al ser el perro, se lo lleva todo y no corta una pierna de manera precisa con un
                        cuchillo, mira el corte que hicieron -, enfatizó Beña... <br/><br/>- en verdad es raro -.

                        Al llegar la tarde y regresar a campamento se aprestaron a merendar en
                        torno al fuego como era usual, mientras la noche extendía su manto sobre las
                        montañas. Cares de dirigió al Chueco Varela y preguntó,
                        <br/><br/>- ¿Fuiste a ver los corderos hoy? -
                        <br/><br/>- Sí -, respondió, <br/><br/>- no hay problema y en el bajo tienen harto pasto, menos mal que
                        no se ha aparecido un puma, que de lo contrario se nos pone fea la cosa -
                        <br/><br/>- Es de esperar que el perro ese no deje la cagá no má’ -, comento Beña.
                        <br/><br/>- Más vale que ni lo pienses -, dijo Pancho Cares... <br/><br/>- creo que vamos a tener que
                        hacer un corral pá encerrarlos de noche, prevenir es curar, sin carne, cagamos -.
                        Dada la lejanía del sector de los centros poblados, los víveres tenían que
                        llevarlos para el período que durara la faena, por lo que la carne era animal en pie.
                        Se calculaba un cordero por cinco a seis días. A ello se habían habituado, y ahí
                        estaban junto al fuego, observando cómo se doraba el costillar.
                        El mate de mano en mano continuaba y pronto aparecieron las tortillas de
                        entre las cenizas grises que Beña sacaba, apartando con una vara los residuos de
                        carbones que sobre ellas se encontraban adheridos, luego con un paño limpio las
                        frotó y partiéndolas las dejó en un plato. El pan humeante exhalaba su aroma de
                        grano y levadura que se entremezcló al de la carne cocida. El sol había muerto en
                        el horizonte y la luna se perfilaba blanca por sobre la noche quieta. Carmelo
                        Subiabre se levantó a buscar más agua para el mate y se encontró casi de frente
                        con el perro que la noche anterior había hecho tan improvisada aparición. Al verlo
                        se sobresaltó, quedó contemplando al animal, éste no se movió, lo miró a los ojos
                        y regresó junto al fuego.
                        <br/><br/>- Nuevamente está el perro -, dijo... <br/><br/>- hay algo en él que me parece raro -.

                        Los hombres levantaron la mirada, ahí estaba, bajo un árbol observándolos,
                        Saúl Paillán, tomó un palo y lo lanzó, éste cayó cerca del animal que no se movió,
                        más bien pareció desafiarlo.
                        <br/><br/>- En verdad es bien extraño este bicho, si estuviera perdido, lo habríamos visto en
                        el día, si estuviera tan hambriento se habría comido el hueso que le tiramos -
                        <br/><br/>- No sé por qué me tinca que él se robó la carne -, dijo Beña.
                        <br/><br/>- No creo que sea tan bien enseñado que abra y cierre el cajón, tome un cuchillo y
                        haga cortes de carnicero -, comentó Báez riéndose.
                        <br/><br/>- Creo que se ha perdido y sale en las noches a cazar pá’ comer, y el fuego y la
                        cercanía le recuerda a su amo, ¡pobre animal!, si harto flaco se ve, tome coma.
                        acotó Cares, lanzando nuevamente unos huesos.
                        <br/><br/>- ¿Ven? <br/><br/>- Dijo Beña, <br/><br/>- si no quiere huesos ¿qué quiere? no creo que esté
                        acostumbrado a pura cazuela, lo único que faltaba, un perro pensionista mañoso -.
                        <br/><br/>- A decir verdad, no se comporta como otros perros, pero hay tantos secretos. En
                        mi vida de ovejero he visto cada cosa, sin ir más lejos, una vez un perro me salvó
                        de caer al río Palena, yo estaba trabajando en una estancia y se me perdieron
                        unos vacunos, así que tomé mi caballo y partí a campearlos, los condenaos se
                        habían metido en unos islotes, claro, pasto había, pero empezó a llover, el rio
                        aumentó su cauce y quedaron atrapados. Viré riendas al cruce y quise meter el
                        caballo, pero empezó el perro a ladrar desesperado, no dejándome pasar, yo le
                        grité: ¡Sale Pucho!, pero continuaba ladrando. Apliqué espuelas y obligué al
                        caballo a meterse al agua, y también se metió el perro, en eso veo venir un bulto
                        grande, era un tronco que traía el río, ahí me di cuenta, si no es por mi perro hasta
                        ahí no más llego ¡buena salvada me hizo el Pucho! -

                        <br/><br/>- Pero éste es distinto -, comentó Varela, <br/><br/>- no se comporta como otros, se le tira
                        comida y no la acepta, aparece de repente, anda a saber lo que quiere... -
                        <br/><br/>- Revisa bien el oreador de carne -, dijo Subiabre dirigiéndose a Beña, <br/><br/>- pá que no
                        aparezcas con otra historia mañana -.
                        Envolvió las tortillas, se dirigió al cajón que estaba suspendido, lo levantó
                        aún más tensando el lazo que lo sujetaba y se aseguró de que estuviese bien
                        cerrado, comprobando la cantidad de carne que quedaba. En estos quehaceres se
                        encontró con Pancho Cares, que daba vueltas por el campamento.
                        <br/><br/>- ¿Sabes?... <br/><br/>- lo interrumpió Beña, <br/><br/>- aun no me explico lo del robo de la carne... es
                        bien raro esto -.
                        <br/><br/>- Yo tampoco... yo tampoco -, comentó Cares.
                        <br/><br/>- Pá’ mí -, continuó Beña, <br/><br/>- algo está pasando y yo pienso que no es normal -
                        <br/><br/>- Bien, hay que dormir <br/><br/>- y se alejó.
                        Luego de eso dirigió sus pasos hacia el fogón y con cenizas tapó las brasas
                        que aun daban calor, alzó los ojos y vio al perro negro que lo miraba y miraba,
                        tomó una piedra y la lanzó, dando de lleno en el lomo del animal, que emitió un
                        gemido, corrió y se perdió en la espesura del bosque. En el cielo la luna
                        alumbraba las montañas del Sur, y Beña, recordó su tierra, su gente, y su mar,
                        suspiró y luego se perdió bajo el toldo donde lo esperaba su cama y el descanso.
                        Al perfilarse el alba los hombres se levantaron e iniciaron sus faenas
                        cotidianas, Rogelio Báez prendió fuego y pronto el tacho conteniendo el agua para
                        el mate estaba ya listo, se dirigió al cajón en que se guardaba la carne, pero en él
                        nada había, al ver a Beña le preguntó,
                        <br/><br/>- ¿Dónde guardaste la carne? -

                        Este sorprendido replicó,
                        <br/><br/>- ¿Dónde más pó’?... en el cajón, como siempre... y también ahí dejé el pan.
                        <br/><br/>- No hay nada -, respondió Báez, <br/><br/>- está vació... y cerrado -.
                        Beña se sorprendió aún más y se dirigió hasta el árbol de donde colgaba el
                        cajón, que a través de la malla mosquetera se podía ver que estaba vacío, lo abrió
                        y solo encontró el paño donde había envuelto el pan la noche anterior.
                        <br/><br/>- ¡Puta la cosa pá’ rara! -, musitó, <br/><br/>- ayer desaparece una pierna y hoy, el pan y lo
                        que quedaba de carne, y el cajón cerrado, no conozco a ningún animal que abra y
                        cierre un cajón con cerrojo. No me gusta pá’ ná’ esto -.
                        <br/><br/>- A mí también me extraña -, dijo Báez, <br/><br/>- están sucediendo cosas muy extrañas
                        aquí -.
                        Al informarse tan extraño suceso, entre ellos nacieron varias conjeturas,
                        pero la realidad era una, no estaba el pan ni la carne. Por lo que Saúl Paillán
                        rápidamente comenzó a amasar y Beña a freír las tortas para el desayuno.
                        Un ambiente tenso se perfiló y trataron de no hablar mucho del “fenómeno”
                        que para ellos no tenía explicación. Se dedicaron a hacer el corral para los
                        corderos y a la faena de desmonte en la senda que ya se distinguía entre la tupida
                        vegetación. Así pasaron el día, más bien callados. Al caer la tarde carnearon y
                        llevaron los otros animales al nuevo corral, Beña preparó la cena más tarde de lo
                        habitual, al servir estaban ausentes las bromas y el nerviosismo comenzaba a
                        aflorar, se palpaba a través del silencio de los comensales. Estaban terminando
                        cuando junto al árbol de siempre apareció nuevamente el perro que no dejaba de
                        observarlos, Saúl Paillan hizo un gesto a Beña y tiró al animal un trozo de carne
                        sin hueso que tenía preparado, el perro no se movió, lentamente Paillan se puso

                        de pie y con gesto rápido laceó el cuello del perro, que al sentirse aprisionado trató
                        se zafarse, pero Paillán con fuerzas jaló.
                        <br/><br/>- ¡Caíste maldito! -, dijo... <br/><br/>- porque estoy seguro de que eres brujo...-
                        <br/><br/>- Vamos a ver si después de esto vas a robar comida -, argumentó Beña y con
                        paso seguro se acercó al cautivo que vanamente intentaba zafarse, lo cogió de las
                        patas y lo derribó, el animal se contorneaba enfurecido, pero Paillán jalaba,
                        apretándolo, se acercó Báez y lo tomó de la cola, Beña con gesto rápido extrajo
                        de sus ropas un cortaplumas y abriéndola la dirigió a los testículos del animal,
                        cercenándolos. Un aullido lastimero y profundo se perdió en la noche. Tras esto,
                        Beña dirigió la cortante hoja a la cabeza y cortó la esquina de una de las orejas.
                        <br/><br/>- ¡Ahora sabes lo que es bueno, brujo desgraciado!, dijo, y su voz denotaba
                        convicción y rabia.
                        Saúl Paillan aflojó la cuerda, liberándolo, el perro lo miró y él sintió el odio
                        vivo de aquella bestia. El animal corrió perdiéndose en el bosque. Los tres
                        regresaron al fogón donde se quedaron comentando lo sucedido.
                        <br/><br/>- Este ya no jode más -, dijo Beña.
                        <br/><br/>- No le van a quedar ganas de andar molestando a la gente -, acotó Paillan... y se
                        sumó al silencio. Una nube negra y alargada cubrió la luna y pareció que las
                        estrellas opacaban su resplandor, a lo lejos el canto de los grillos anunciaba lluvia.
                        El amanecer estaba gris, en la tarde llovería, el viento norte acariciaba la
                        vegetación tupida y selvática, los hombres se levantaron y Beña se dirigió de
                        inmediato adonde había dejado la carne el día anterior, y ahí estaba, todo intacto,
                        el cajón cerrado como siempre. Prendió fuego, preparó el mate y puso a asar
                        carne, uno a uno llegó sus compañeros.

                        <br/><br/>- Me gustaría saber dónde quedó el maldito, puede que vuelva por los corderos -.
                        Se paró Paillán y expresó,
                        <br/><br/>- Pues vamos a verlo, el rastro de sangre nos guiará-.
                        <br/><br/>- Traten de no demorarse que lloverá y hay que prepararse -, les recordó Pancho
                        Cares.
                        <br/><br/>- Vamos ahora, antes que la lluvia borre las huellas -, replicó Beña
                        Diciendo esto se pararon y se perdieron en el bosque, guiados por las gotas
                        de sangre. El apuro por encontrarlo se tornó en la tarea inmediata. Anduvieron
                        largo rato tras el rojizo rastro y de pronto, distante más o menos unos dos
                        kilómetros de su campamento desembocaron en un claro, en cuyo centro se
                        alzaba una vieja choza y junto a ella un desvencijado cobertizo.
                        <br/><br/>- ¡No sabía que había pobladores aquí! -, dijo Subiabre.
                        <br/><br/>- Nunca vi a nadie -, exclamó con sorpresa Beña.
                        <br/><br/>- En una de esas nos equivocamos, el perro es de esta casa, seguramente fue con
                        alguien a robarnos la comida, el perro estaba acompañando -, afirmó Subiabre.
                        <br/><br/>- Me pregunto cómo traerán sus víveres, tan lejos que está esto, además si o si,
                        tienen que pasar por el lugar donde nos encontramos nosotros, quizás está
                        abandonado – dice Beña.
                        <br/><br/>- Y harto antiguos como pobladores deben ser, digo, si es que alguien vive acá -,
                        acotó Paillán, <br/><br/>- porque la casa ya no da pá’ mas, no se ven animales tampoco -.
                        Se acercaron a la casa, silbaron, pero nadie contestó, atisbaron por la
                        pequeña ventana, en el interior no se veía ni sentía movimiento alguno. Cautos
                        dirigieron sus pasos al cobertizo, huellas de sangre les recordaba lo sucedido la
                        noche anterior, huellas que eran más distantes entre sí y más oscuras. El pequeño

                        galpón estaba con una de sus puertas derribada, se veía abandonado y oscuro,
                        entraron con cautela, y al fondo, en un rincón vieron un montón de juncos secos y
                        restos de pasto, sobre él un bulto, se acercaron aún más y poco a poco
                        distinguieron el cuerpo de un hombre, agazapado, en posición fetal.
                        Instintivamente retrocedieron, mirándose asustados, avanzaron nuevamente.
                        Lo que vieron los dejó helados, era el cuerpo inerte de un hombre que
                        permanecía desnudo, las manos entre las piernas manchadas de sangre trataban
                        de cubrir los testículos cercenados, y al observar la cara se encontraron con las
                        facciones de un hombre viejo, flaco, con canas en la cabellera, sólo pocos restos
                        de pelo negro y tieso, la oreja derecha cortada cuya herida mostraba que la
                        mutilación de la noche anterior y en el cuello, como collar carmesí, las marcas de
                        una soga que lo había aprisionado.
                        Los hombres se persignaron y rápidos salieron del lúgubre cobertizo sin
                        creer el escenario que estaban viviendo, el pensamiento se concentraba en buscar
                        la forma de encontrar alguna explicación lógica a la situación. Las primeras gotas
                        se dejaban caer y cerca de la puerta el Beña vio los restos de una pierna de
                        cordero, raída una parte y otra como si hubiese sido cortada con cuchillo, prueba
                        contundente de que aquel sujeto extraño era el ladrón. Los tres apuraron el paso
                        hacia su campamento. Nubes negras cubrían el cielo y la lluvia tupida e insistente
                        borraba las huellas de sangre que se tragó la tierra ya sedienta, mientras los
                        árboles pomposos y libres observaban la senda que los hombres abrían con sus
                        hachas hirientes y que sobre ellos dejaban caer. Era la voz dura del progreso con
                        su cascabeleo incesante y era la tierra sureña que a él se entregaba, guardando
                        sus misterios, esperando a los que vendrán
                    </p>
                </div>
                </Accordion.Panel>
                <Accordion.Panel header={
                    <Header
                    avatarUrl={<PiMedalLight className='text-[40px] text-lLightGreen'/>}
                    title="Ganador categoría - Poesía"
                    subtitle="10-4 Cambio y dentro Tuetuétano - Rodrigo Estay Villalón"
                    />
                } eventKey={5}>
                    <div className='mx-12 text-center flex flex-col gap-2'>
                        <p className='text-[22px] text-lLightGreen'>10-4 Cambio y dentro - Tuetuétano</p>
                        <p className='mt-[-5px] text-[14px] text-lText mb-5'>Rodrigo Estay Villalón</p>
                        <h5 className='mt-10'>I</h5>
                        <p>Era una mañana (maraña) cualquiera</p>
                        <p>En un Chile cualquiera (acongojado)</p>
                        <p>Siendo un hombre normalizado</p>
                        <p>Sistematizado</p>

                        <p>Empezaba los días recordando el futuro</p>
                        <p>Previendo el día pensado (el devenir)</p>
                        <p>Revisando</p>
                        <p>Porque el día es como una vida (pequeña)</p>
                        <p>Infinita</p>
                        <p>Morimos cada noche para resucitar al amanecer</p>
                        <p>La vida es un día, siempre lo fue (y yo no creía)</p>
                        <p>Hasta que llegaste tú, y te posaste en mi ventana</p>
                        <p>Ese día te vi rápido al resucitar</p>
                        <p>Me mirabas directo al entrecejo, parecías un dibujo</p>
                        <p>Y por dibujo te olvidé</p>

                        <h5 className='mt-10'>II</h5>

                        <p>No hago más que intentar hacer todo bien</p>
                        <p>Sin embargo, soy un simple humano de barba</p>
                        <p>Hijo del remolino (de re-vientos)</p>
                        <p>Gran parte sale completamente mal</p>
                        <p>Gran parte se cuela entre las lágrimas del mundo</p>
                        <p>Se confunde</p>
                        <p>Gran parte (ahora) te ve posado en mi ventana</p>
                        <p>Empujando el porvenir, esa parte indefectible</p>
                        <p>Furibunda GROTESCA</p>

                        <h5 className='mt-10'>III</h5>

                        <p>Sin embargo, te comprendo solo por venir (es el devenir)</p>
                        <p>Te regalo mi entrecejo</p>
                        <p>Te regalo mis papilas gustativas</p>
                        <p>Mis pupilas taxativas</p>
                        <p>Porque comprendo de lo que la humanidad adolece</p>
                        <p>Entiendo la insignificancia del todo (del codo)</p>
                        <p>La intrascendencia de la voluntad</p>
                        <p>Vuela hacia mi mano pájaro rumiante INFAME</p>
                        <p>Convérsame de ti pájaro de alarma (del alma)</p>
                        <p>De mis propias entrañas!</p>
                        <p>Deshagamos lo humano y construyamos un cielo</p>
                        <p>Tu maldad y mi camino errante pueden copular</p>
                        <p>Te invito a un experimento saturnal</p>
                        <p>Desde donde brotará sangre nueva</p>
                        <p>Te seduzco brujo de alas desplegadas</p>
                        <p>Te presento al más grande</p>

                        <h5 className='mt-10'>IV</h5>

                        <p>Pájaro malhechor, augurio de tempestades</p>
                        <p>Furioso y repentino (pájaro ignorante)</p>
                        <p>Te doy mi mano para procrear</p>
                        <p>Te develo la invariabilidad</p>
                        <p>Te puedo convencer de la bondad</p>
                        <p>Porque no llegarás lejos de acá</p>
                        <p>No hay más que humanos</p>
                        <p>No hay más que errores (temores)</p>
                        <p>tumores</p>
                        <p>Porque sabes que del amor vienes (bebes)</p>
                        <p>Y al amor te vas, incluyendo la maldad</p>
                        <p>Ya sabes que el amor es velo</p>
                        <p>Fariseo mal atestiguado</p>
                        <p>Ya te quiero e idolatro</p>
                        <p>Desde mi ventana a mi mano</p>
                        <p>De la mano a mi corazón PAJARÓN</p>

                        <h5 className='mt-10'>V</h5>

                        <p>Te cambié pájaro rutilante fulminante</p>
                        <p>Porque eres mis orejas al batirse</p>
                        <p>Padre nuestro que estás en mí</p>
                        <p>Eras solo una luz en mi solar</p>
                        <p>Eras un poro de mi piel</p>
                        <p>Eres mi pensamiento y mi sufrir</p>
                        <p>Sin espacio ni tiempo</p>
                        <p>Donde los brujos se burlan</p>
                        <p>Soy yo HASTA LOS TUETUÉTANOS</p>
                    </div>
                </Accordion.Panel>
            </Accordion>
            </div>
            <Modal overflow={false} size={"lg"} backdrop={true} keyboard={false} open={open} onClose={handleClose}>
                <Modal.Header className='mb-3'>
                    <Modal.Title>Fotos 8º Concurso Regional de Literatura Calíope</Modal.Title>
                </Modal.Header>
                <Modal.Body className='flex flex-col overflow-scroll gap-5 max-h-[600px] md:max-h-[800px]'>
                        <img src={Img0} alt="" />
                        <img src={Img1} alt="" />
                        <img src={Img2} alt="" />
                        <img src={Img3} alt="" />
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

export default Version2023
