import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { blogPosts } from '../data/blogPosts';
import { logEvent } from '../utils/analytics';

const BlogPost = () => {
    const { t } = useTranslation();
    const { slug } = useParams();

    // Expanded Content for improved SEO
    const postContent: any = {
        'implantes-dentarios-porto-guia-completo': {
            title: 'Implantes Dentários no Porto: O Guia Completo para 2024',
            date: '10 Jan 2024',
            author: 'Porto Implantes',
            readTime: '8 min',
            category: 'Implantologia',
            image: '/assets/uploads/doctor_implant_hero_new.png',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light italic">
                        "Recuperar o sorriso não é apenas uma questão estética, é recuperar a dignidade e a alegria de viver. No Porto, estamos na vanguarda desta revolução."
                    </p>
                    <p className="mb-6">
                        Se reside no Porto ou arredores e considera colocar implantes dentários, este guia foi escrito para si. O mercado da implantologia evoluiu drasticamente na última década, e o que antes era um processo doloroso e demorado, hoje é, em muitos casos, uma questão de horas. A cidade do Porto tornou-se referência nacional em reabilitação oral.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Porquê escolher o Porto para o seu tratamento?</h2>
                    <p className="mb-6">
                        O Porto tornou-se um cluster de excelência na medicina dentária europeia. Com acesso a tecnologias de ponta (como o planeamento digital e a cirurgia guiada) e profissionais altamente qualificados, as clínicas na cidade oferecem taxas de sucesso superiores a 98%.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 marker:text-accent">
                        <li><strong>Tecnologia de Ponta:</strong> Clínicas no Porto utilizam TAC 3D (CBCT) e scanners intraorais para um planeamento milimétrico.</li>
                        <li><strong>Profissionais Formados:</strong> A Faculdade de Medicina Dentária da Universidade do Porto é uma das mais prestigiadas da Europa.</li>
                        <li><strong>Custo Competitivo:</strong> Obtenha qualidade suíça a preços portugueses.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Que é um Implante Dentário (e O Que Não É)</h2>
                    <p className="mb-4">
                        Muitos pacientes confundem implantes com "pivots" ou coroas. Vamos clarificar:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 marker:text-accent">
                        <li><strong>O Implante:</strong> É a "raiz" artificial, um pequeno parafuso de titânio puro colocado no osso. O titânio é biocompatível, o que significa que o corpo não o rejeita, integrando-o naturalmente (osseointegração).</li>
                        <li><strong>O Pilar:</strong> A peça de conexão que une o implante à parte visível.</li>
                        <li><strong>A Coroa:</strong> O "dente" em si, geralmente feito de cerâmica ou zircónia, desenhado para ser indistinguível dos seus dentes naturais.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Protocolo All-on-4: Dentes Fixos num Dia</h2>
                    <p className="mb-6">
                        Para pacientes desdentados totais ou com dentição terminal, a técnica <strong>All-on-4</strong> é revolucionária. Em vez de colocar um implante por cada dente (o que seria invasivo e caro), colocamos apenas 4 implantes estrategicamente posicionados para suportar uma arcada inteira de dentes fixos.
                    </p>
                    <div className="bg-gray-100 p-6 rounded-lg mb-6">
                        <h4 className="font-bold text-gray-800 mb-2">Vantagens do All-on-4:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            <li>Evita enxertos ósseos complexos na maioria dos casos.</li>
                            <li>Custo mais reduzido do que restaurar dente a dente.</li>
                            <li><strong>Dentes imediatos:</strong> Sai da clínica com dentes fixos no mesmo dia (Carga Imediata).</li>
                        </ul>
                    </div>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Processo Passo-a-Passo</h2>
                    <ol className="list-decimal pl-6 mb-6 space-y-4 text-gray-700">
                        <li><strong>Consulta de Avaliação:</strong> Realizamos um TAC 3D para avaliar a quantidade e qualidade do seu osso.</li>
                        <li><strong>Planeamento Digital:</strong> Simulamos a cirurgia no computador antes de tocar na sua boca.</li>
                        <li><strong>Cirurgia:</strong> Sob anestesia local (e sedação, se desejar), os implantes são colocados. É indolor.</li>
                        <li><strong>Cicatrização:</strong> O osso "cola" ao implante durante 3 a 6 meses.</li>
                        <li><strong>Dentes Finais:</strong> A coroa definitiva de cerâmica é colocada.</li>
                    </ol>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Quanto Custa um Implante no Porto?</h2>
                    <p className="mb-6">
                        Os valores variam conforme a complexidade, a marca do implante e a necessidade de regeneração óssea. É vital desconfiar de preços "low-cost". Implantes de marcas premium (como Straumann ou Nobel) têm décadas de estudos científicos. Um implante barato pode falhar em poucos anos, saindo muito mais caro a longo prazo.
                        Na Porto Implantes, apostamos na transparência. Agende uma consulta para um orçamento detalhado e sem surpresas.
                    </p>

                    <div className="bg-primary-light/30 p-8 rounded-xl border-l-4 border-accent my-8">
                        <h4 className="font-bold text-primary mb-2">Está pronto para mudar de vida?</h4>
                        <p>Não deixe que a falta de dentes limite a sua alimentação ou esconda o seu sorriso. A tecnologia atual permite-lhe voltar a comer maçãs, sorrir para fotos e falar com confiança. Agende a sua avaliação na Porto Implantes.</p>
                    </div>
                </>
            )
        },
        'mitos-verdades-branqueamento-dentario': {
            title: 'Mitos e Verdades sobre o Branqueamento Dentário Profissional',
            date: '05 Jan 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            category: 'Estética',
            image: '/assets/uploads/branqueamento_hero_v2.png',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        Um sorriso branco e radiante é o desejo de quase todos os pacientes. No entanto, a internet está cheia de "receitas caseiras" que prometem milagres mas entregam desastres. Vamos separar a ciência da ficção sobre o branqueamento dentário no Porto.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Verdade: Os dentes escurecem naturalmente com a idade.</h2>
                    <p className="mb-6">
                        Sim. Com o passar dos anos, o esmalte (a camada externa branca) desgasta-se, revelando mais a dentina (a camada interna, que é amarela). Além disso, anos de consumo de café, chá, vinho tinto, caril e tabaco acumulam pigmentos na estrutura dentária. O branqueamento profissional reverte este relógio biológico através de uma reação de oxidação segura.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Mito: "Bicarbonato, Carvão Ativado e Limão funcionam."</h2>
                    <p className="mb-6">
                        <strong>Perigo!</strong> Isto é um dos mitos mais nocivos da internet.
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Limão:</strong> É extremamente ácido (pH 2). Dissolve o cálcio do esmalte, causando erosão irreversível.</li>
                        <li><strong>Bicarbonato/Carvão:</strong> São abrasivos. Funcionam como uma lixa. Removem manchas superficiais porque removem também esmalte! O dente fica mais rugoso, retendo mais manchas no futuro, e fica amarelado (porque a dentina escura fica mais visível).</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Verdade: O Branqueamento Profissional é Seguro.</h2>
                    <p className="mb-6">
                        Absolutamente. Os géis utilizados em consultório (peróxido de hidrogénio ou carbamida) atuam quimicamente quebrando as moléculas de pigmento dentro do dente, sem desgastar a estrutura mineral. Quando supervisionado por um dentista, o processo é seguro, controlado e indolor.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Tipos de Branqueamento Disponíveis</h2>
                    <p className="mb-4">Existem duas modalidades principais, que podem ser combinadas:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Em Consultório (Laser/LED):</strong> Mais rápido. Numa sessão de 60 minutos, conseguimos resultados imediatos. Ideal para quem tem pressa (casamentos, eventos).</li>
                        <li><strong>Em Ambulatório (Goteiras):</strong> O paciente leva goteiras personalizadas e o gel para casa. Usa durante 1-2 semanas a dormir. Tipicamente oferece resultados mais estáveis e duradouros.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Mito: "Ficarei com os dentes sensíveis para sempre."</h2>
                    <p className="mb-6">
                        Alguma sensibilidade térmica durante o tratamento é comum e transitória. Desaparece 24 a 48 horas após o término. Hoje em dia, utilizamos géis modernos que já contêm agentes dessensibilizantes (como nitrato de potássio e flúor) para garantir conforto total. Se tiver sensibilidade prévia, avise o seu dentista!
                    </p>
                </>
            )
        },
        'turismo-dentario-porto': {
            title: 'Turismo Dentário no Porto: Tratamentos de Luxo a Preços Acessíveis',
            date: '28 Dez 2023',
            author: 'Porto Implantes',
            readTime: '7 min',
            category: 'Turismo',
            image: '/assets/logo_kv_final.png',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        Imagine combinar as suas férias numa das cidades mais vibrantes da Europa com tratamentos dentários de topo, poupando até 60% em comparação com os preços do Norte da Europa. Bem-vindo ao Turismo Dentário no Porto.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Porquê o Porto?</h2>
                    <p className="mb-6">
                        Eleito repetidamente como "Melhor Destino Europeu", o Porto oferece uma combinação única de história, cultura, gastronomia e hospitalidade. Mas mais do que isso, é um centro de excelência médica. As clínicas portuguesas são sujeitas a regulações rigorosas da União Europeia e da Ordem dos Médicos Dentistas, garantindo padrões de higiene e segurança impecáveis.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">A Matemática da Poupança</h2>
                    <p className="mb-6">
                        Em países como França, Reino Unido, Suíça ou EUA, os custos fixos de uma clínica são astronómicos. Em Portugal, devido a um custo de vida mais equilibrado, conseguimos oferecer <strong>exatamente os mesmos materiais de topo (implantes suíços, cerâmicas alemãs)</strong> por uma fração do preço.
                    </p>
                    <p className="mb-6 font-bold text-primary">Não é "low cost", é "custo justo". Não poupamos na qualidade, poupamos na sua fatura.</p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Tratamentos Mais Procurados</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Reabilitação Oral Total (All-on-4):</strong> Mudar toda a dentição num ou dois dias.</li>
                        <li><strong>Facetas de Cerâmica:</strong> Transformar o sorriso esteticamente numa semana.</li>
                        <li><strong>Implantes Múltiplos:</strong> Substituir vários dentes perdidos.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Como Funciona o Processo?</h2>
                    <div className="space-y-4">
                        <div className="flex">
                            <div className="font-bold text-accent min-w-[20px]">1.</div>
                            <p className="text-gray-700"><strong>Contacto Inicial:</strong> Envia-nos a sua radiografia panorâmica por email ou WhatsApp.</p>
                        </div>
                        <div className="flex">
                            <div className="font-bold text-accent min-w-[20px]">2.</div>
                            <p className="text-gray-700"><strong>Orçamento Estimado:</strong> A nossa equipa médica analisa e envia um plano de tratamento provisório com custos e duração.</p>
                        </div>
                        <div className="flex">
                            <div className="font-bold text-accent min-w-[20px]">3.</div>
                            <p className="text-gray-700"><strong>A Viagem:</strong> Pode reservar os seus voos e hotel (podemos recomendar parceiros locais).</p>
                        </div>
                        <div className="flex">
                            <div className="font-bold text-accent min-w-[20px]">4.</div>
                            <p className="text-gray-700"><strong>Tratamento VIP:</strong> Agendamos as suas consultas de forma intensiva para maximizar o seu tempo livre na cidade.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Desfrute da Cidade Invicta</h2>
                    <p className="mb-6">
                        Entre consultas, visite as caves do Vinho do Porto, passeie na Ribeira, ou explore a livraria Lello. A recuperação nunca foi tão agradável. A nossa equipa fala Inglês, Francês e Espanhol para o fazer sentir em casa.
                    </p>
                </>
            )
        },
        'invisalign-vs-aparelho-fixo': {
            title: 'Invisalign ou Aparelho Fixo: Qual é a Melhor Opção para Si?',
            date: '15 Fev 2024',
            author: 'Porto Implantes',
            readTime: '10 min',
            category: 'Alinhadores',
            image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f72?auto=format&fit=crop&q=80',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        A ortodontia percorreu um longo caminho. Já não é obrigado a usar "ferros" metálicos para ter dentes direitos. Mas será que os alinhadores transparentes (como Invisalign) funcionam para todos? Vamos comparar os gigantes da ortodontia ponto por ponto.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">1. Estética e Discrição</h2>
                    <p className="mb-6">
                        <strong>Invisalign:</strong> O vencedor claro. São feitos de plástico médico transparente e moldados exatamente aos seus dentes. São praticamente invisíveis a meio metro de distância. Ideais para adultos e profissionais. <br />
                        <strong>Aparelho Fixo:</strong> Mesmo os estéticos (cerâmica ou safira) têm um arco metálico visível. Os metálicos tradicionais são muito óbvios.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">2. Higiene e Alimentação</h2>
                    <p className="mb-6">
                        <strong>Invisalign:</strong> Você remove-os para comer e escovar os dentes. Pode comer maçãs, frutos secos, pastilha... tudo! A higiene é igual a não usar aparelho: escova e fio dental normal. <br />
                        <strong>Aparelho Fixo:</strong> Existem muitas restrições alimentares (nada de coisas duras ou pegajosas que partam os brackets). A higiene é difícil e demorada, exigindo escovilhões especiais para limpar entre o metal. O risco de cáries ou manchas ao redor dos brackets é maior se a higiene falhar.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">3. Conforto e Dor</h2>
                    <p className="mb-6">
                        <strong>Invisalign:</strong> Não tem ferros nem pontas a picar a bochecha. A movimentação é suave e constante. Sente pressão quando troca de alinhador, mas é muito tolerável. <br />
                        <strong>Aparelho Fixo:</strong> É comum causar aftas e feridas nas bochechas e lábios, especialmente no início. As ativações mensais podem ser dolorosas por 1-2 dias.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">4. Disciplina do Paciente</h2>
                    <p className="mb-6 border-l-4 border-yellow-400 pl-4 bg-yellow-50 p-2">
                        Aqui o <strong>Aparelho Fixo</strong> ganha pontos para os "distraídos". Como não sai, está sempre a trabalhar 24h/dia. <br />
                        O <strong>Invisalign</strong> só funciona se estiver na boca! Tem de ser usado 22 horas por dia. Se o paciente o tira constantemente ou se esquece de o pôr, o tratamento vai falhar ou demorar o dobro do tempo.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Conclusão: Qual escolher?</h2>
                    <p className="mb-6">
                        Se procura estética, conforto e tem disciplina, o Invisalign é imbatível. Se o seu caso é cirúrgico extremamente complexo ou se sabe que não vai usar as goteiras, o fixo pode ser a solução. Na Porto Implantes, fazemos um scan 3D e ajudamo-lo a decidir.
                    </p>
                </>
            )
        },
        'durabilidade-facetas-dentarias': {
            title: 'Quanto Tempo Duram as Facetas Dentárias? Guia de Manutenção',
            date: '20 Fev 2024',
            author: 'Porto Implantes',
            readTime: '7 min',
            category: 'Estética',
            image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        As facetas de cerâmica são o "padrão ouro" da estética dentária, responsáveis por muitos dos sorrisos perfeitos que vê na TV. Mas será um investimento para a vida toda? Vamos analisar a durabilidade e os cuidados essenciais.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">A Longevidade da Cerâmica</h2>
                    <p className="mb-6">
                        As facetas modernas são feitas de cerâmicas de alta resistência, como o dissilicato de lítio (E-max) ou Feldspática. Estudos clínicos mostram que, após 10 anos, mais de 95% das facetas continuam em boca e em bom estado. Com excelentes cuidados, podem durar 15, 20 anos ou mais.
                    </p>
                    <p className="mb-6">
                        <strong>Vantagem Crucial:</strong> Ao contrário dos dentes naturais ou das resinas compostas, a cerâmica <strong>não muda de cor</strong>. O café, o vinho e o tabaco não penetram na cerâmica vidrada. O seu sorriso branco hoje será igualmente branco daqui a uma década.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Que Pode Estragar uma Faceta?</h2>
                    <p className="mb-4">Elas são fortes, mas não indestrutíveis. Os principais riscos são:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Bruxismo (Ranger os dentes):</strong> É o inimigo nº 1. A força excessiva pode fraturar a cerâmica. Se tem bruxismo, é <strong>obrigatório</strong> dormir com uma goteira de relaxamento.</li>
                        <li><strong>Trauma Mecânico:</strong> Roer unhas, morder canetas, abrir embalagens com os dentes ou morder caroços de azeitona. Tudo o que parte um dente natural pode partir uma faceta.</li>
                        <li><strong>Recessão Gengival:</strong> A faceta não ganha cárie, mas o dente por baixo sim e a gengiva pode retrair se escovar com demasiada força, expondo a raiz ("margem") da faceta, o que compromete a estética.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Guia de Manutenção</h2>
                    <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
                        <li>Escove 2-3 vezes ao dia com uma escova macia.</li>
                        <li>Use fio dental diariamente (a faceta não protege contra gengivite!).</li>
                        <li>Visite o higienista oral de 6 em 6 meses para polimento e controlo.</li>
                        <li>Use a sua goteira de proteção se indicada pelo médico.</li>
                    </ol>
                </>
            )
        },
        'sinais-alerta-periodontite': {
            title: '7 Sinais de Periodontite que Não Deve Ignorar',
            date: '25 Fev 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            category: 'Prevenção',
            image: '/assets/uploads/prevencao_hero_new.jpg',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        A doença periodontal (gum disease) é silenciosa, crónica e a principal causa de perda de dentes em adultos no mundo. Muitas vezes, quando o paciente sente dor, já é tarde demais e há perda óssea irreversível. Aprenda a ler os sinais que a sua boca lhe dá.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Gengivite vs Periodontite</h2>
                    <p className="mb-6">
                        Tudo começa com a <strong>Gengivite</strong> (inflamação da gengiva), que é reversível. Se não tratada, as bactérias descem para o osso, transformando-se em <strong>Periodontite</strong>. Aqui, o osso que segura os dentes é destruído. O osso perdido não volta a crescer (sem cirurgia).
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Os 7 Sinais de Alerta</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-4 text-gray-700 marker:text-red-500">
                        <li><strong>1. Sangramento Gengival:</strong> O sinal mais comum. Gengiva saudável NÃO sangra ao escovar ou passar fio. Se vê "rosa no lavatório", tem inflamação ativa.</li>
                        <li><strong>2. Mau Hálito Persistente (Halitose):</strong> Causado por bactérias a libertar compostos de enxofre em bolsas debaixo da gengiva. Pastilhas elásticas só mascaram o problema.</li>
                        <li><strong>3. Gengivas Vermelhas, Inchadas ou Sensíveis:</strong> A gengiva deve ser rosa pálido e textura firme.</li>
                        <li><strong>4. Retração Gengival:</strong> Os dentes parecem estar a ficar "mais longos"? É a gengiva a fugir da infeção. Isto expõe a raiz e causa sensibilidade estética e térmica.</li>
                        <li><strong>5. Espaços Novos entre os Dentes:</strong> Se a comida começa a ficar presa onde antes não ficava, pode ter perda de papila ou dentes a moverem-se.</li>
                        <li><strong>6. Mobilidade Dentária:</strong> Dentes a abanar em adultos é um sinal de alarme crítico. Significa que o suporte ósseo está minado.</li>
                        <li><strong>7. Alteração na Mordida:</strong> Sente que os dentes batem de forma diferente? A instabilidade dos dentes altera a oclusão.</li>
                    </ul>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 my-8">
                        <h4 className="font-bold text-red-700 mb-2">A Conexão Sistémica</h4>
                        <p className="text-red-800">A periodontite não afeta só a boca. As bactérias entram na corrente sanguínea e estão ligadas cientificamente a:</p>
                        <ul className="list-disc pl-6 mt-2 text-red-800">
                            <li>Doenças Cardiovasculares (enfartes, AVC).</li>
                            <li>Diabetes Descontrolada (é uma via de dois sentidos).</li>
                            <li>Complicações na Gravidez (parto prematuro).</li>
                            <li>Alzheimer.</li>
                        </ul>
                    </div>

                    <p className="mb-6">Se identificou algum destes sinais, agende imediatamente uma consulta de Periodontologia na Porto Implantes. A prevenção é a melhor cura.</p>
                </>
            )
        },
        'medo-dentista-sedacao-consciente': {
            title: 'Medo de Ir ao Dentista? A Sedação Consciente Pode Ser a Solução',
            date: '02 Mar 2024',
            author: 'Porto Implantes',
            readTime: '8 min',
            category: 'Bem-estar',
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        Se o som da broca lhe causa taquicardia ou se evita o dentista há anos por pura ansiedade, saiba que não está sozinho. A odontofobia afeta milhares de pessoas. Mas hoje, a tecnologia permite-nos tratar o seu sorriso enquanto você... sonha.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Que é a Sedação Consciente?</h2>
                    <p className="mb-6">
                        É um procedimento seguro e com excelente eficácia. Ao contrário da anestesia geral (feita no hospital, onde está inconsciente e intubado), na sedação consciente é administrada uma medicação (pode ser inalada ou endovenosa, sempre com monitorização).
                    </p>
                    <p className="mb-6">
                        <strong>O Resultado?</strong> O paciente mantém os seus reflexos vitais (respira sozinho, engole), mas entra num estado de <strong>profundo relaxamento</strong>. O medo desaparece. O tempo parece passar muito depressa.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Para Quem é Indicada?</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li>Pacientes com medo, ansiedade ou fobia de dentista.</li>
                        <li>Pacientes com reflexo de vómito (gag reflex) acentuado.</li>
                        <li>Cirurgias longas ou complexas (como All-on-4, colocações múltiplas de implantes).</li>
                        <li>Pacientes que não conseguem ficar quietos ou abrir bem a boca por muito tempo.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Vantagens Incríveis</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Conforto Total:</strong> A experiência torna-se neutra ou até agradável. Não há stress.</li>
                        <li><strong>Amnésia Anterógrada:</strong> É comum não se lembrar de grande parte da consulta. Pode estar na cadeira 3 horas, mas parecerá que foram 15 minutos.</li>
                        <li><strong>Eficiência:</strong> O médico dentista consegue trabalhar mais rápido e com mais precisão num paciente totalmente calmo, permitindo fazer tratamentos inteiros numa só sessão.</li>
                    </ul>

                    <p className="mb-6 font-bold">É necessária avaliação prévia? Sim, analisamos o seu histórico médico para garantir segurança total. Recupere o seu sorriso sem medos.</p>
                </>
            )
        },
        'all-on-4-manutencao-limpeza': {
            title: 'Como Limpar e Cuidar da Sua Prótese All-on-4',
            date: '10 Mar 2024',
            author: 'Porto Implantes',
            readTime: '9 min',
            category: 'Implantologia',
            image: '/assets/uploads/doctor_implant_hero_new.png',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        A beleza do All-on-4 é que funciona como dentes naturais. Mas, tal como os dentes naturais, precisa de ser limpo. "Os implantes não têm cáries", é verdade, mas têm <strong>Peri-implantite</strong>, uma infeção na gengiva e osso que pode levar à perda dos implantes se a higiene falhar.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Que é o "Túnel de Limpeza"?</h2>
                    <p className="mb-6">
                        A sua prótese fixa deixa um pequeno espaço (propositado) entre a acrílico/cerâmica e a sua gengiva. É neste "túnel" que a comida se acumula e que deve focar a sua higiene. Se não limpar aqui, o hálito ficará mau e a gengiva inflamará.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Kit de Ferramentas Essenciais</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li><strong>Irrigador Oral (Waterpik):</strong> Indispensável. O jato de água remove restos alimentares sob a prótese onde a escova não chega. Use pressão média.</li>
                        <li><strong>Superfloss:</strong> Fio dentário com ponta rígida (para enfiar no túnel) e parte esponjosa (para limpar os pilares de titânio como quem "engraxa sapatos").</li>
                        <li><strong>Escovilhão Interdentário:</strong> Pequenas escovas para passar entre a prótese e a gengiva.</li>
                        <li><strong>Escova Macia/Média:</strong> Para limpar a superfície dos dentes e a língua.</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Rotina Diária Recomendada</h2>
                    <div className="space-y-4 mb-6">
                        <p><strong>De Manhã:</strong> Escovagem normal + Escovilhão rápido.</p>
                        <p><strong>Depois das Refeições:</strong> Bochecho com água ou uso do irrigador se possível.</p>
                        <p><strong>À Noite (A Mais Importante):</strong></p>
                        <ol className="list-decimal pl-6 text-gray-700">
                            <li>Use o Irrigador (Waterpik) em toda a volta (por fora e por dentro, no palato).</li>
                            <li>Passe o Superfloss à volta de cada um dos 4 implantes.</li>
                            <li>Escove tudo muito bem.</li>
                        </ol>
                    </div>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Manutenção Semestral no Veterinário... Ops, Dentista!</h2>
                    <p className="mb-6">
                        Tal como um carro, o All-on-4 precisa de revisão. De 6 em 6 meses, deve vir à clínica. Nós removemos a prótese (desaparafusamos), higienizamos os implantes diretamente, limpamos a prótese em ultrassons, polimos e trocamos os parafusos de retenção se necessário. É a chave para durar a vida toda.
                    </p>
                </>
            )
        },
        'sorriso-digital-dsd': {
            title: 'Digital Smile Design: Veja o Seu Sorriso Antes de Começar',
            date: '15 Mar 2024',
            author: 'Porto Implantes',
            readTime: '6 min',
            category: 'Tecnologia',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
            content: (
                <>
                    <p className="lead text-xl text-gray-600 mb-8 font-light">
                        O medo do desconhecido impede muitas pessoas de melhorarem o seu sorriso. "E se eu não gostar?", "E se os dentes ficarem muito grandes?". Com o Digital Smile Design (DSD), eliminamos o "E se". Você vê o resultado final antes de o tratamento começar.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O Que é o DSD?</h2>
                    <p className="mb-6">
                        O DSD é um protocolo de planeamento estético. Através de fotos de alta resolução e vídeos do paciente a falar e sorrir, analisamos a relação entre os dentes, os lábios, os olhos e o rosto. Desenhamos digitalmente o sorriso ideal que respeita a sua bio-funcionalidade e a sua personalidade.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">O "Test-Drive" do Sorriso (Mock-up)</h2>
                    <p className="mb-6">
                        Esta é a verdadeira revolução. Transformamos o desenho digital num modelo 3D físico. A partir daí, criamos uma matriz e colocamos uma resina provisória (Mock-up) sobre os seus dentes naturais. <strong>Sem desgastar nada, sem anestesia.</strong>
                    </p>
                    <p className="mb-6">
                        De repente, você olha-se ao espelho e vê o seu novo sorriso na sua boca. Pode falar, rir, tirar selfies, fazer um vídeo chamada com a família.
                    </p>

                    <h2 className="text-3xl font-bold text-primary font-serif mb-4 mt-8">Co-Criação</h2>
                    <p className="mb-6">
                        Nesta fase, você é o co-autor do seu sorriso. <br />
                        <em>"Acho que quero os caninos mais suaves."</em> - Nós ajustamos na hora. <br />
                        <em>"Prefiro uma cor mais natural."</em> - Nós mudamos. <br />
                        Só avançamos para as facetas ou coroas definitivas quando você estiver 100% apaixonado pelo projeto. Isso dá uma segurança emocional total ao paciente.
                    </p>

                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-accent my-8">
                        <h4 className="font-bold text-primary mb-2">A Tecnologia na Porto Implantes</h4>
                        <p>Utilizamos scanners intraorais 3D, impressoras 3D e fotografia de estúdio para garantir que o que vê no projeto é exatamente o que recebe no final. Venha fazer o Test-Drive do seu novo sorriso.</p>
                    </div>
                </>
            )
        }
    };

    const data = postContent[slug as keyof typeof postContent];


    const getRelatedPosts = (currentSlug: string | undefined) => {
        if (!currentSlug) return [];
        return blogPosts
            .filter(post => post.slug !== currentSlug)
            .sort(() => 0.5 - Math.random()) // Simple shuffle
            .slice(0, 3);
    };

    const relatedPosts = getRelatedPosts(slug);

    // Track page view for blog post content
    React.useEffect(() => {
        if (data) {
            logEvent('Blog', 'Read Article', data.title);
        }
    }, [data]);


    if (!data) {
        return (
            <div className="pt-32 text-center pb-20">
                <h1 className="text-2xl font-bold">{t('articleNotFound')}</h1>
                <Link to="/blog" className="text-primary hover:underline mt-4 block">{t('backToBlog')}</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 bg-white min-h-screen">
            <Helmet>
                <title>{data.title} | Blog Porto Implantes</title>
                <meta name="description" content={`Leia o artigo: ${data.title}. Especialistas em medicina dentária no Porto. Informação detalhada e atualizada.`} />
                <meta name="author" content={data.author} />
                {/* Schema.org Article structured data could be added here for even better SEO */}
            </Helmet>

            <article itemScope itemType="http://schema.org/Article">
                {/* Article Header */}
                <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 text-white max-w-5xl mx-auto">
                        <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" /> {t('backToBlog')}
                        </Link>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider flex items-center shadow-lg">
                                <Tag className="w-4 h-4 mr-2" /> {data.category}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-lg" itemProp="headline">
                            {data.title}
                        </h1>
                        <div className="flex flex-wrap items-center text-sm md:text-base text-gray-200 space-x-6 gap-y-2">
                            <div className="flex items-center"><Calendar className="w-5 h-5 mr-2" /> <span itemProp="datePublished">{data.date}</span></div>
                            <div className="flex items-center"><User className="w-5 h-5 mr-2" /> <span itemProp="author">{data.author}</span></div>
                            <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /> {data.readTime} {t('readingTime')}</div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16" itemProp="articleBody">
                    <div className="prose prose-lg prose-teal mx-auto text-gray-700 leading-relaxed marker:text-primary">
                        {data.content}
                    </div>

                    {/* Share / Footer */}
                    <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="font-bold text-primary text-lg">{t('usefulArticle')}</span>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => {
                                    logEvent('Blog', 'Share Click', data.title);
                                    if (navigator.share) {
                                        navigator.share({
                                            title: data.title,
                                            url: window.location.href
                                        }).catch(console.error);
                                    } else {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert(t('linkCopied'));
                                    }
                                }}
                                className="flex items-center bg-gray-100 hover:bg-accent hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
                            >
                                <Share2 className="w-5 h-5 mr-2" /> {t('shareArticle')}
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Articles Section */}
            <section className="bg-gray-50 py-16 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-3xl font-bold text-primary mb-10 font-serif text-center">{t('relatedArticles')}</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
                                <Link to={`/blog/${post.slug}`} onClick={() => logEvent('Blog', 'Related Article Click', post.title)} className="block h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <span className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                            <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</div>
                                            <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</div>
                                        </div>
                                        <h4 className="text-xl font-bold text-primary mb-3 font-serif leading-tight group-hover:text-accent transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center text-accent font-bold text-sm">
                                            {t('readMore')} <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
