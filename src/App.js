import { useState } from 'react';

import MyPromo from './Componets/MyPromo/MyPromo';
import './Componets/Sidepanel/Sidepanel'
import Sidepanel from './Componets/Sidepanel/Sidepanel';
import Menu from './Componets/Menu/Menu';
import About from './Componets/About/About';
import Contacts from './Componets/Contacts/Contacts';
import Education from './Componets/Education/Education';
import Skills from './Componets/Skills/Skills';
import Portfolio from './Componets/Portfolio/Portfolio';
import Hamburger from './Componets/Hamburger/Hamburger';
import Privacy from './Componets/Privacy/Privacy';
import BtnEnUk from './BtnEnUk/BtnEnUk';
import './App.scss';



function App() {

	const [state, setState] = useState(false);
	const [privacyPolicy, setPrivacyPolicy] = useState(false);

	const [language, setLanguage] = useState('english');

	const toggleLanguage = () => {
		if (language === 'ukrainian') {
			setLanguage('english');
		} else {
			setLanguage('ukrainian');
		}
	};

	const getAllTextsOfSite = (key) => {
		const allTextsOfSite = {
			ukrainian: {
				sidePanel: "Соціальні мережі",
				menuItemFirst: "ПРО МЕНЕ",
				menuItemSecond: "МОЯ ОСВІТА",
				menuItemThird: "МОЇ НАВИЧКИ",
				menuItemForth: "МОЇ РОБОТИ",
				menuItemFifth: "КОНТАКТИ",
				promoSubTitle: "Мене звати Олександр Мізюк",
				promoTitle: "Я web-розробник зі Львова",
				promoBtn: "ПОРТФОЛІО",
				promoLink: "Про мене",
				aboutSubtitle: "Про мене",
				aboutTitle: "Привіт! Мене звати Олександр",
				aboutTextFirst: "Я web-розробник i створюю веб-сайти, які домогають виділитися серед конкурентів. Ви шукаєте роботу, або плануєте розвивати",
				aboutTextSecond: "розпочати свій бізнес? Тоді вам потрібен веб-сайт із правильною структурою. І в цьому я можу бути для вас корисним. Створю портфоліо",
				aboutTextThird: "веб-сайт вашої мрії з професійним підходом, який буде відповідати вимогам сучасності, вашій справі і вашій індивідуальності.",
				aboutTitleContentFirst: "Web-розробка",
				aboutContentFirst: "Мене надихає те, що мій код може працювати будь-де і для кого завгодно. Насправді це творчість. Веб - надзвичайно креативне середовище, можливість для кожної людини вдосконалювати себе.",
				aboutTitleContentSecond: "Розробка застосунків",
				aboutContentSecond: "Я отримую велике задоволення від того, що створюю веб-застосунки. Я хочу, щоб їх використовували у повсякденному житті, або професійній діяльності.",
				aboutContentThird: "Мені подобається продумувати, аналізувати та організовувати. При цьому обожнюю візуальну красу та естетику. Кожен проект - це новий досвід, знання та ідеї.",
				educationSubTitle: "Освіта",
				educationTitle: "Знання, які мені домогають",
				educationTitleContent: "Навчання",
				educationContentItemFirst: "ДГУ ім. С. С. Прокоф'єва",
				educationContentSubItemFirst: "Диплом спеціаліста",
				educationContentFirst: "Я отримав вищу освіту у сфері музики. Безпосередньо це не пов'язано з програмуванням, проте сформувало в мені розуміння естетики та гарного смаку. Безумовно, ці якості будуть впливати на те, як виглядатиме ваш сайт.",
				educationContentSubItemSecondOne: "Курс по Web-розробці",
				educationContentSubItemSecondTwo: " Курс по JavaScript",
				educationContentSecond: "Під час навчання я ознайомився з різноманітними підходами у веб-розробці і зрозумів тонкощі, які необхідні для створення сайту та інтерактивності на ньому. Я знаю, як грамотно організувати веб-ресурс і як максимально його оптимізувати.",
				educationContentSubItemThird: "Курс по React",
				educationContentThird: "Я отримав знання, які дозволяють розширювати функціональність сайту і не тільки. Я вмію створювати web-додатки, функціональність яких націлена на вирішення певних завдань, і виходить за рамки простого споживання контенту.",
				skillsSubtitle: "Навички",
				skillsTitle: "Що я використовую у роботі",
				skillsCardFirst: "Саме він створює каркас вашого сайту, або програми, а п'ята версія дозволить мені створювати більш SEO-оптимізовану структуру вашого продукту.",
				skillsCardSecond: "Ця мова стилів дозволяє мені створювати абсолютно будь-який зовнішній вигляд вашого сайту або програми. Все обмежується лише вашою фантазією!",
				skillsCardThird: "Ця мова програмування дозволяє оживити все, що завгодно: слайдери, вікна, підказки, вкладки, отримання даних від сервера та багато іншого.",
				skillsCardFourth: "Бібліотека Jquery дозволить прискорити розробку. Без необхідності інтегрувати в проект ми її не будемо, але звичка роботи з нею присутня.",
				skillsCardFifth: "Ця бібліотека дозволяє створювати веб-додатки. Ми можемо створити максимально інтерактивний продукт саме під ваші цілі.",
				portfolioSubTitle: "Портфоліо",
				potfolioTitle: "Мої роботи",
				contactsSubTitle: "Контакти",
				contactsTitle: "Зв'яжіться зі мною",
				contactsFormTitle: "Будь-яким зручним для вас способом",
				contactsFormTitleSecond: "Або залиште ваші дані, я сам вам напишу",
				contactsLabelName: "Ваше ім'я",
				contactsLabelEmail: "Ваша пошта",
				contactsLabelMessage: "Ваше повідомлення",
				contactsFormBtn: "Відправити повідомлення",
				contactsLinkPrivacyFirst: "Я згоден(а) із ",
				contactsLinkPrivacySecond: "політикою конфіденційності",
				privacyMainTitle: "Політика щодо обробки персональних даних",
				privacyTitleFirst: "1. Загальні положення",
				privacyTextFirstOne: "Ця політика обробки персональних даних складена відповідно до вимогЗакону України 'Про захист персональних даних' від 01.06.2010 № 2297-VI (далі — Закон про персональні дані) та визначає порядок обробки персональних даних та заходи щодо забезпечення безпеки персональних даних, які вживає Мізюк Олександр Миколайович (далі — Оператор).",
				privacyTextFirstTwo: "1.1. Оператор ставить своєю найважливішою метою та умовою здійснення своєї діяльності дотримання прав і свобод людини та громадянина при обробці його персональних даних, у тому числі захисту прав на недоторканність приватного життя, особисту та сімейну таємницю.",
				privacyTextFirstThree: "1.2. Ця політика Оператора щодо обробки персональних даних (далі — Політика) застосовується до всієї інформації, яку Оператор може отримати про відвідувачів веб-сайту",
				privacyTitleSecond: "2. Основні поняття, що використовуються у Політиці",
				privacyTextSecondOne: "2.1. Автоматизована обробка персональних даних – обробка персональних даних за допомогою засобів обчислювальної техніки.",
				privacyTextSecondTwo: "2.2. Блокування персональних даних — тимчасове припинення обробки персональних даних (крім випадків, якщо обробка необхідна для уточнення персональних даних).",
				privacyTextSecondThree: "2.3. Веб-сайт — сукупність графічних та інформаційних матеріалів, а також програм для ЕОМ та баз даних, що забезпечують їх доступність у мережі інтернет за адресою",
				privacyTextSecondFour: "2.4. Інформаційна система персональних даних - сукупність персональних даних, що містяться в базах даних і забезпечують їх обробку інформаційних технологій і технічних засобів.",
				privacyTextSecondFive: "2.5. Знеособлення персональних даних — дії, у яких неможливо визначити без використання додаткової інформації належність персональних даних конкретному Користувачеві чи іншому суб'єкту персональних даних. ",
				privacyTextSecondSix: "2.6. Обробка персональних даних - будь-яка дія (операція) або сукупність дій (операцій), що здійснюються з використанням засобів автоматизації або без використання таких засобів з персональними даними, включаючи збирання, запис, систематизацію, накопичення, зберігання, уточнення (оновлення, зміна), вилучення, використання, передачу (поширення, надання, доступ), знеособлення, блокування, видалення, знищення персональних даних.",
				privacyTextSecondSeven: "2.7. Оператор - державний орган, муніципальний орган, юридична або фізична особа, що самостійно або спільно з іншими особами організують та/або здійснюють обробку персональних даних, а також визначальні цілі обробки персональних даних, склад персональних даних, що підлягають обробці, дії (операції), що здійснюються з персональними даними.",
				privacyTextSecondEight: "2.8. Персональні дані — будь-яка інформація, що стосується безпосередньо або опосередковано до певного або визначеного Користувачеві веб-сайту",
				privacyTextSecondNine: "2.9. Персональні дані, дозволені суб'єктом персональних даних для розповсюдження, — персональні дані, доступ необмеженого кола осіб до яких надано суб'єктом персональних даних шляхом надання згоди на обробку персональних даних, дозволених суб'єктом персональних даних для розповсюдження у порядку, передбаченому Законом про персональні дані (далі — персональні дані дані, дозволені поширення).",
				privacyTextSecondTen: "2.10. Користувач – будь-який відвідувач веб-сайту ",
				privacyTextSecondEleven: "2.11. Надання персональних даних - дії, спрямовані на розкриття персональних даних певної особи чи певному колу осіб.",
				privacyTextSecondTwelve: "2.12. Поширення персональних даних — будь-які дії, спрямовані на розкриття персональних даних невизначеному колу осіб (передача персональних даних) або на ознайомлення з персональними даними необмеженого кола осіб, у тому числі оприлюднення персональних даних у засобах масової інформації, розміщення в інформаційно-телекомунікаційних мережах або надання доступу до персональних даних будь-яким іншим способом.",
				privacyTextSecondThirteen: "2.13. Транскордонна передача персональних даних — передача персональних даних на територію іноземної держави до органу влади іноземної держави, іноземної фізичної чи іноземної юридичної особи.",
				privacyTextSecondFourteen: "2.14. Знищення персональних даних — будь-які дії, внаслідок яких персональні дані знищуються безповоротно з неможливістю подальшого відновлення змісту персональних даних в інформаційній системі персональних даних та/або знищуються матеріальні носії персональних даних.",
				privacyTitleThree: "3. Основні права та обов'язки Оператора",
				privacyTextThirdOne: "3.1. Оператор має право: — отримувати від суб'єкта персональних даних достовірну інформацію та/або документи, що містять персональні дані; — у разі відкликання суб'єктом персональних даних згоди на обробку персональних даних, а також направлення звернення з вимогою про припинення обробки персональних даних, Оператор має право продовжити обробку персональних даних без згоди суб`єкта персональних даних за наявності підстав, зазначених у Законі про персональні дані; - Самостійно визначати склад і перелік заходів, необхідних і достатніх для забезпечення виконання обов'язків, передбачених Законом про персональні дані та прийнятими відповідно до нього нормативними правовими актами, якщо інше не передбачено Законом про персональні дані або іншими законами України.",
				privacyTextThirdTwo: "3.2. Оператор зобов'язаний: — надавати суб'єкту персональних даних на його прохання інформацію щодо обробки його персональних даних; - Організовувати обробку персональних даних у порядку, встановленому чинним законодавством України; - відповідати на звернення та запити суб'єктів персональних даних та їх законних представників відповідно до вимог Закону про персональні дані; — повідомляти до уповноваженого органу захисту прав суб'єктів персональних даних на запит цього органу необхідну інформацію протягом 30 днів з дати отримання такого запиту; — публікувати чи іншим чином забезпечувати необмежений доступ до цієї Політики щодо обробки персональних даних; — вживати правових, організаційних та технічних заходів для захисту персональних даних від неправомірного або випадкового доступу до них, знищення, зміни, блокування, копіювання, надання, розповсюдження персональних даних, а також від інших неправомірних дій щодо персональних даних; — припинити передачу (розповсюдження, надання, доступ) персональних даних, припинити обробку та знищити персональні дані у порядку та випадках, передбачених Законом про персональні дані; - Виконувати інші обов'язки, передбачені Законом про персональні дані.",
				privacyTitleFour: "4. Основні права та обов'язки суб'єктів персональних даних",
				privacyTextFourthOne: "4.1. Суб'єкти персональних даних мають право: - Отримувати інформацію, що стосується обробки його персональних даних, за винятком випадків, передбачених законами України. Відомості надаються суб'єкту персональних даних Оператором у доступній формі, і в них не повинні утримуватись персональні дані, що належать до інших суб'єктів персональних даних, за винятком випадків, коли є законні підстави для розкриття таких персональних даних. Перелік інформації та порядок її отримання встановлено Законом про персональні дані; — вимагати від оператора уточнення його персональних даних, їхнього блокування або знищення у разі, якщо персональні дані є неповними, застарілими, неточними, незаконно отриманими або не є необхідними для заявленої мети обробки, а також вживати передбачених законом заходів щодо захисту своїх прав; - висувати умову попередньої згоди при обробці персональних даних з метою просування на ринку товарів, робіт та послуг; — на відкликання згоди на обробку персональних даних, а також на направлення вимоги про припинення обробки персональних даних; — оскаржити до уповноваженого органу захисту прав суб'єктів персональних даних або в судовому порядку неправомірні дії або бездіяльність Оператора при обробці його персональних даних; - На здійснення інших прав, передбачених законодавством України.",
				privacyTextFourthTwo: "4.2. Суб'єкти персональних даних зобов'язані: - надавати Оператору достовірні дані про себе; — повідомляти Оператора про уточнення (оновлення, зміну) своїх персональних даних.",
				privacyTextFourthThree: "4.3. Особи, які передали Оператору недостовірні відомості про себе, або відомості про інший суб'єкт персональних даних без згоди останнього, несуть відповідальність відповідно до законодавства України.",
				privacyTitleFive: "Принципи обробки персональних даних",
				privacyTextFifthOne: "5.1. Обробка персональних даних здійснюється на законній та справедливій основі.",
				privacyTextFifthTwo: "5.2. Обробка персональних даних обмежується досягненням конкретних, заздалегідь визначених та законних цілей. Не допускається обробка персональних даних, несумісна з метою збору персональних даних.",
				privacyTextFifthThree: "5.3. Не допускається об'єднання баз даних, що містять персональні дані, обробка яких здійснюється з метою, несумісною між собою.",
				privacyTextFifthFour: "5.4. Обробці підлягають лише персональні дані, які відповідають цілям їхньої обробки.",
				privacyTextFifthFive: "5.5. Зміст та обсяг оброблюваних персональних даних відповідають заявленим цілям обробки. Не допускається надмірність оброблюваних персональних даних стосовно заявлених цілей їх обробки.",
				privacyTextFifthSix: "5.6. При обробці персональних даних забезпечується точність персональних даних, їх достатність, а в необхідних випадках і актуальність по відношенню до цілей обробки персональних даних. Оператор вживає необхідних заходів та/або забезпечує їх прийняття щодо видалення або уточнення неповних або неточних даних.",
				privacyTextFifthSeven: "5.7. Зберігання персональних даних здійснюється у формі, що дозволяє визначити суб'єкта персональних даних, не довше, ніж цього вимагають цілі обробки персональних даних, якщо термін зберігання персональних даних не встановлений законом України, договором, стороною якого вигодонабувачем або поручителем за яким є суб'єкт персональних даних. Оброблювані персональні дані знищуються чи знеособлюються після досягнення цілей обробки чи у разі втрати потреби у досягненні цих цілей, якщо інше не передбачено законом України.",
				privacyTitleSix: "6. Цілі обробки персональних даних",
				privacyTextSixOne: "6.1. Мета обробки: Інформування Користувача за допомогою надсилання електронних листів.",
				privacyTextSixTwo: "6.2. Персональні дані, що обробляються: Прізвище, ім'я, по батькові, електронна адресаб, номери телефонів. Рік, місяць, дата та місце народження, фотографії.",
				privacyTextSixThree: "6.3. Правові підстави: The General Data Protection Regulation (GDPR) of May 23, 2018.",
				privacyTextSixFour: "6.4. Види обробки персональних даних: Збір, запис, систематизація, накопичення, зберігання, знищення, знеособлення.",
				privacyTextSixFive: "6.5. Надсилання інформаційних листів: На адресу електронної пошти.",
				privacyTitleSeven: "7. Умови обробки персональних даних",
				privacyTextSevenOne: "7.1. Обробка персональних даних здійснюється за згодою суб'єкта персональних даних на обробку його персональних даних.",
				privacyTextSevenTwo: "7.2. Обробка персональних даних необхідна для досягнення цілей, передбачених міжнародним договором держави Україри чи законом, реалізації покладених законодавством України на оператора функцій, повноважень і обов'язків.",
				privacyTextSevenThree: "7.3. Обробка персональних даних необхідна для здійснення правосуддя, виконання судового акта, акта іншого органу чи посадової особи, які підлягають виконанню відповідно до законодавства України про виконавче провадження.",
				privacyTextSevenFour: "7.4. Обробка персональних даних необхідна для виконання договору, стороною якого або вигодонабувачем або поручителем, за яким є суб'єкт персональних даних, а також для укладення договору з ініціативи суб'єкта персональних даних або договору, за яким суб'єкт персональних даних буде вигодонабувачем або поручителем.",
				privacyTextSevenFive: "7.5. Обробка персональних даних необхідна для реалізації правових і законних інтересів оператора чи третіх осіб або задля досягнення суспільно значимих цілей за умови, що не порушує права та свободи суб'єкта персональних даних.",
				privacyTextSevenSix: "7.6. Здійснюється обробка персональних даних, доступ необмеженого кола осіб до яких надано суб'єктом персональних даних або на його прохання (далі – загальнодоступні персональні дані).",
				privacyTextSevenSeventh: "7.7. Здійснюється обробка персональних даних, що підлягають опублікуванню або обов'язковому розкриттю відповідно до закону України.",
				privacyTitleEight: "8. Порядок збирання, зберігання, передачі та інших видів обробки персональних даних",
				privacyTextEightTitle: "Безпека персональних даних, що обробляються Оператором, забезпечується шляхом реалізації правових, організаційних та технічних заходів, необхідних для виконання у повному обсязі вимог чинного законодавства у сфері захисту персональних даних.",
				privacyTextEightFirst: "8.1. Оператор забезпечує збереження персональних даних та вживає всіх можливих заходів, що виключають доступ до персональних даних неуповноважених осіб.",
				privacyTextEightSecond: "8.2. Персональні дані Користувача ніколи, за жодних умов не будуть передані третім особам, за винятком випадків, пов'язаних з виконанням чинного законодавства або у разі, якщо суб'єктом персональних даних надано згоду Оператору на передачу даних третій особі для виконання зобов'язань за цивільно-правовим договором.",
				privacyTextEightThird: "8.3. У разі виявлення неточностей у персональних даних, Користувач може актуалізувати їх самостійно шляхом надсилання Оператору повідомлення на адресу електронної пошти Оператора muzikbasss@gmail.com з позначкою «Актуалізація персональних даних».",
				privacyTextEightFourth: "8.4. Термін обробки персональних даних визначається досягненням цілей, для яких було зібрано персональні дані, якщо інший термін не передбачений договором або чинним законодавством.",
				privacyTextEightFifth: "8.5. Вся інформація, яка збирається сторонніми сервісами, у тому числі платіжними системами, засобами зв'язку та іншими постачальниками послуг, зберігається та обробляється зазначеними особами (Операторами) відповідно до їх Угоди користувача та Політики конфіденційності. Суб'єкт персональних даних та/або із зазначеними документами. Оператор не несе відповідальності за дії третіх осіб, у тому числі зазначених у цьому пункті постачальників послуг.",
				privacyTextEightSixth: "8.6. Встановлені суб'єктом персональних даних заборони на передачу (крім надання доступу), а також на обробку або умови обробки (крім отримання доступу) персональних даних, дозволених для розповсюдження, не діють у випадках обробки персональних даних у державних, громадських та інших публічних інтересах, визначених законодавством України.",
				privacyTextEightSeventh: "8.7. Оператор під час обробки персональних даних забезпечує конфіденційність персональних даних.",
				privacyTextEightEighth: "8.8. Оператор здійснює зберігання персональних даних у формі, що дозволяє визначити суб'єкта персональних даних, не довше, ніж цього вимагає мета обробки персональних даних, якщо термін зберігання персональних даних не встановлений законом України, договором, стороною якого вигодонабувачем або поручителем за яким є суб'єкт персональних даних.",
				privacyTextEightNinth: "8.9. Умовою припинення обробки персональних даних може бути досягнення цілей обробки персональних даних, закінчення терміну дії згоди суб'єкта персональних даних, відкликання згоди суб'єктом персональних даних або вимога про припинення обробки персональних даних, а також виявлення неправомірної обробки персональних даних.",
				privacyTitleNine: "9. Перелік дій, які здійснюються Оператором з отриманими персональними даними",
				privacyTextNineFirst: "9.1. Оператор здійснює збір, запис, систематизацію, накопичення, зберігання, уточнення (оновлення, зміна), вилучення, використання, передачу (поширення, надання, доступ), знеособлення, блокування, видалення та знищення персональних даних.",
				privacyTextNineSecond: "9.2. Оператор здійснює автоматизовану обробку персональних даних з отриманням та/або передачею отриманої інформації по інформаційно-телекомунікаційній мережі або без такої",
				privacyTitleTen: "10. Транскордонна передача персональних даних",
				privacyTextTenFirst: "10.1. Оператор до початку здійснення діяльності з транскордонної передачі персональних даних зобов'язаний повідомити уповноважений орган захисту прав суб'єктів персональних даних про свій намір здійснювати транскордонну передачу персональних даних (таке повідомлення надсилається окремо в якому повідомляється про намір здійснювати обробку персональних даних).",
				privacyTextTenSecond: "10.2. Оператор до подання вищевказаного повідомлення зобов'язаний отримати від органів влади іноземної держави, іноземних фізичних осіб, іноземних юридичних осіб, яким планується транскордонна передача персональних даних, відповідні відомості.",
				privacyTitleEleven: "11. Конфіденційність персональних даних",
				privacyTextElevenFirst: "Оператор та інші особи, які отримали доступ до персональних даних, зобов'язані не розкривати третім особам і не поширювати персональні дані без згоди суб'єкта персональних даних, якщо інше не передбачено законом України.",
				privacyTitleTwelve: "12. Заключні положення",
				privacyTextTwelveFirst: "12.1. Користувач може отримати будь-які роз'яснення стосовно питань, які стосуються обробки його персональних даних, звернувшись до Оператора за допомогою електронної пошти muzikbasss@gmail.com.",
				privacyTextTwelveSecond: "12.2. У цьому документі буде відображено будь-які зміни політики обробки персональних даних Оператором. Політика діє безстроково до заміни її новою версією.",
				privacyTextTwelveThird: "12.3. Актуальна версія Політики у вільному доступі розміщена у мережі Інтернет за адресою",
			},

			english: {
				sidePanel: "## Social networks",
				menuItemFirst: "ABOUT ME",
				menuItemSecond: "MY EDUCATION",
				menuItemThird: "MY SKILLS",
				menuItemForth: "MY WORKS",
				menuItemFifth: "CONTACT",
				promoSubTitle: "My name is Oleksandr Miziuk",
				promoTitle: "I'm a web developer from Lviv",
				promoBtn: "PORTFOLIO",
				promoLink: "About me",
				aboutSubtitle: "About me",
				aboutTitle: "Hello! My name is Alexander",
				aboutTextFirst: "I'm a web developer and I create websites that make you stand out from the competition. Are you looking for a job or planning to develop",
				aboutTextSecond: "to start your own business? Then you need a website with the right structure. And that's where I can be of service to you. I will create a portfolio",
				aboutTextThird: "the website of your dreams with a professional approach that will meet the requirements of modernity, your business and your personality.",
				aboutTitleContentFirst: "Web development",
				aboutContentFirst: "I am inspired by the fact that my code can work anywhere and for anyone. In fact, this is creativity. The web is an extremely creative environment, an opportunity for everyone to improve themselves.",
				aboutTitleContentSecond: "Application development",
				aboutContentSecond: "I get a lot of pleasure from creating web applications. I want them to be used in everyday life or professional activities.",
				aboutContentThird: "I like to think, analyze and organize. At the same time, I adore visual beauty and aesthetics. Each project is a new experience, knowledge and ideas.",
				educationSubTitle: "Education",
				educationTitle: "Knowledge that is useful to me",
				educationTitleContent: "Studying",
				educationContentItemFirst: "S.S. Prokofiev State University",
				educationContentSubItemFirst: "Master's degree",
				educationContentFirst: "I have a degree in music. It's not directly related to programming, but it has given me an understanding of aesthetics and good taste. Of course, these qualities will influence the way your website looks.",
				educationContentSubItemSecondOne: "Course in Web development",
				educationContentSubItemSecondTwo: " Course in JavaScript",
				educationContentSecond: "During my studies, I got acquainted with various approaches to web development and understood the subtleties required to create a website and interactivity on it. I know how to properly organize a web resource and how to optimize it as much as possible.",
				educationContentSubItemThird: "Course on React",
				educationContentThird: "I gained knowledge that allows me to expand the functionality of the site and beyond. I am able to create web applications whose functionality is aimed at solving certain tasks and goes beyond the simple consumption of content.",
				skillsSubtitle: "Skills",
				skillsTitle: "What I use at work",
				skillsCardFirst: "It creates the framework of your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
				skillsCardSecond: "This style language allows me to create absolutely any look and feel for your website or application. Everything is limited only by your imagination!",
				skillsCardThird: "This programming language allows you to bring anything to life: sliders, windows, tooltips, tabs, receiving data from the server, and much more.",
				skillsCardFourth: "The Jquery library will speed up development. We won't integrate it into the project unless necessary, but we are used to working with it.",
				skillsCardFifth: "This library allows you to create web applications. We can create the most interactive product for your goals.",
				portfolioSubTitle: "Portfolio",
				potfolioTitle: "My works",
				contactsSubTitle: "Contacts",
				contactsTitle: "Contact me",
				contactsFormTitle: "Any way convenient for you",
				contactsFormTitleSecond: "Or leave your details and I will write to you myself",
				contactsLabelName: "Your name",
				contactsLabelEmail: "Your email",
				contactsLabelMessage: "Your message",
				contactsFormBtn: "Send a message",
				contactsLinkPrivacyFirst: "I agree with ",
				contactsLinkPrivacySecond: "privacy policy",
				privacyMainTitle: "Policy on the processing of personal data",
				privacyTitleFirst: "1. General provisions",
				privacyTextFirstOne: "This personal data processing policy is drawn up in accordance with the requirements of The General Data Protection Regulation (GDPR) of May 23, 2018 (hereinafter referred to as the Personal Data Law) and defines the procedure for processing personal data and measures to ensure the security of personal data taken by Miziuk Oleksandr Mykolayovych (hereinafter referred to as the Operator).",
				privacyTextFirstTwo: "1.1. The Operator sets as its most important goal and condition for carrying out its activities the observance of human and civil rights and freedoms when processing personal data, including the protection of the rights to privacy, personal and family secrets.",
				privacyTextFirstThree: "1.2. This Operator's policy on the processing of personal data (hereinafter referred to as the Policy) applies to all information that the Operator may receive about website visitors",
				privacyTitleSecond: "2. Basic concepts used in the Policy",
				privacyTextSecondOne: "2.1. Automated processing of personal data is the processing of personal data by means of computer technology.",
				privacyTextSecondTwo: "2.2. Blocking of personal data is a temporary suspension of the processing of personal data (unless the processing is necessary to clarify personal data).",
				privacyTextSecondThree: "2.3 Website - a set of graphic and informational materials, as well as computer programs and databases that ensure their availability on the Internet at",
				privacyTextSecondFour: "2.4. Personal data information system means a set of personal data contained in databases and information technologies and technical means ensuring their processing.",
				privacyTextSecondFive: "2.5. Depersonalization of personal data - actions in which it is impossible to determine, without the use of additional information, the ownership of personal data to a particular User or other subject of personal data.",
				privacyTextSecondSix: "2.6 Processing of personal data means any action (operation) or set of actions (operations) performed with the use of automation tools or without the use of such tools with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), depersonalization, blocking, deletion, destruction of personal data.",
				privacyTextSecondSeven: "2.7. Operator - a state body, municipal body, legal entity or individual that, independently or jointly with other persons, organizes and/or processes personal data, as well as determines the purposes of personal data processing, the composition of personal data to be processed, actions (operations) performed with personal data.",
				privacyTextSecondEight: "2.8. Personal data - any information relating directly or indirectly to a specific or identifiable User of the Website",
				privacyTextSecondNine: "2.9. Personal data authorized by the personal data subject for distribution means personal data, access to which is granted by the personal data subject to an unlimited number of persons by giving consent to the processing of personal data authorized by the personal data subject for distribution in accordance with the procedure provided for by the Personal Data Law (hereinafter referred to as personal data authorized for distribution).",
				privacyTextSecondTen: "2.10 User - any visitor to the website",
				privacyTextSecondEleven: "2.11. Provision of personal data - actions aimed at disclosing personal data of a certain person or a certain circle of persons.",
				privacyTextSecondTwelve: "2.12. Dissemination of personal data - any actions aimed at disclosing personal data to an indefinite number of persons (transfer of personal data) or familiarization with personal data of an unlimited number of persons, including disclosure of personal data in the media, posting in information and telecommunication networks or providing access to personal data in any other way.",
				privacyTextSecondThirteen: "2.13. Cross-border transfer of personal data is the transfer of personal data to the territory of a foreign state to a foreign government authority, a foreign individual or a foreign legal entity.",
				privacyTextSecondFourteen: "2.14. Destruction of personal data - any actions as a result of which personal data is destroyed irrevocably with the impossibility of further restoring the content of personal data in the personal data information system and/or material carriers of personal data are destroyed.",
				privacyTitleThree: "3. Main rights and obligations of the Operator",
				privacyTextThirdOne: "3.1. The Operator has the right to: - receive reliable information and/or documents containing personal data from the personal data subject; - in case of withdrawal of consent to the processing of personal data by the personal data subject, as well as sending a request to terminate the processing of personal data, the Operator has the right to continue processing personal data without the consent of the personal data subject if there are grounds specified in the Law on Personal Data; - Independently determine the composition and list of measures necessary and sufficient to ensure the fulfillment of the obligations provided for by the Personal Data Law and regulations adopted in accordance with it, unless otherwise provided by the Personal Data Law or other laws of the European Union.",
				privacyTextThirdTwo: "3.2. The Operator is obliged to: - provide the personal data subject, at his/her request, with information regarding the processing of his/her personal data; - organize the processing of personal data in accordance with the procedure established by the current legislation of Ukraine; - respond to appeals and requests of personal data subjects and their legal representatives in accordance with the requirements of the Law on Personal Data; - provide the authorized body for the protection of the rights of personal data subjects at the request of this body with the necessary information within 30 days from the date of receipt of such a request; - publish or otherwise provide unrestricted access to this Policy on the processing of personal data; - take legal, organizational and technical measures to protect personal data from unauthorized or accidental access to them, destruction, modification, blocking, copying, provision, dissemination of personal data, as well as from other illegal actions in relation to personal data; - stop the transfer (distribution, provision, access) of personal data, stop processing and destroy personal data in the manner and cases provided for by  The Law on Personal Data; - Perform other duties stipulated by the Law on Personal Data.",
				privacyTitleFour: "4. Basic rights and obligations of personal data subjects",
				privacyTextFourthOne: "4.1. Subjects of personal data have the right to: - Receive information related to the processing of their personal data, except for cases provided for by the laws of the European Union. Information is provided to the subject of personal data by the Operator in an accessible form, and it should not contain personal data belonging to other subjects of personal data, except when there are legal grounds for disclosing such personal data. The list of information and the procedure for obtaining it is established by the Personal Data Law; — demand from the operator clarification of his personal data, their blocking or destruction in case the personal data is incomplete, outdated, inaccurate, illegally obtained or is not necessary for the stated purpose of processing, as well as take legal measures to protect his rights; - to put forward the condition of prior consent when processing personal data for the purpose of promoting goods, works and services on the market; — to withdraw consent to the processing of personal data, as well as to send a request to stop the processing of personal data; — to appeal to the authorized body for the protection of the rights of personal data subjects or in a court of law against the illegal actions or inaction of the Operator during the processing of his personal data; - To exercise other rights provided for by the legislation of the European Union.",
				privacyTextFourthTwo: "4.2. Personal data subjects are obliged to: - provide the Operator with accurate data about themselves; - notify the Operator of the clarification (update, change) of their personal data.",
				privacyTextFourthThree: "4.3. Persons who have provided the Operator with inaccurate information about themselves or information about another personal data subject without the consent of the latter shall be liable in accordance with the legislation of the European Union.",
				privacyTitleFive: "Principles of processing personal data",
				privacyTextFifthOne: "5.1. Personal data is processed on a lawful and fair basis.",
				privacyTextFifthTwo: "5.2. The processing of personal data is limited to the achievement of specific, predefined and legitimate purposes. Processing of personal data incompatible with the purpose of collecting personal data is not allowed.",
				privacyTextFifthThree: "5.3. It is not allowed to combine databases containing personal data that are processed for purposes that are incompatible with each other.",
				privacyTextFifthFour: "5.4. Only personal data that is consistent with the purposes for which it is processed shall be processed.",
				privacyTextFifthFive: "5.5. The content and scope of the processed personal data correspond to the stated processing purposes. The processed personal data shall not be excessive in relation to the stated purposes of their processing.",
				privacyTextFifthSix: "5.6. When processing personal data, the accuracy of personal data, their sufficiency, and, where necessary, relevance in relation to the purposes of personal data processing is ensured. The Operator shall take the necessary measures and/or ensure that they are taken to delete or clarify incomplete or inaccurate data.",
				privacyTextFifthSeven: "5.7. Personal data shall be stored in a form that allows identifying the subject of personal data no longer than the purposes of personal data processing require, unless the period of storage of personal data is established by the law of the European Union, an agreement to which the subject of personal data is a party or a guarantor. The processed personal data is destroyed or depersonalized upon achievement of the processing purposes or in case of loss of the need to achieve these purposes, unless otherwise provided by the law of the European Union.",
				privacyTitleSix: "6. Purposes of personal data processing",
				privacyTextSixOne: "6.1. Purpose of processing: Informing the User by sending e-mails.",
				privacyTextSixTwo: "6.2. Personal data processed: Surname, first name, patronymic, e-mail address, telephone numbers. Year, month, date and place of birth, photographs.",
				privacyTextSixThree: "6.3. Legal grounds: Law General Data Protection Regulation (GDPR) of May 23, 2018.",
				privacyTextSixFour: "6.4. Types of personal data processing: Collection, recording, systematization, accumulation, storage, destruction, depersonalization.",
				privacyTextSixFive: "6.5. Sending newsletters: To the e-mail address.",
				privacyTitleSeven: "7. Terms of personal data processing",
				privacyTextSevenOne: "7.1. The processing of personal data is carried out with the consent of the personal data subject to the processing of his/her personal data.",
				privacyTextSevenTwo: "7.2. The processing of personal data is necessary to achieve the goals stipulated by an international agreement of the state of Ukraine or the law, to implement the functions, powers and duties assigned to the operator by the legislation of Ukraine.",
				privacyTextSevenThree: "7.3. The processing of personal data is necessary for the administration of justice, execution of a court act, an act of another body or official, which are subject to execution in accordance with the legislation of Ukraine on enforcement proceedings.",
				privacyTextSevenFour: "7.4. The processing of personal data is necessary for the performance of an agreement to which the personal data subject is a party or a beneficiary or guarantor, as well as for the conclusion of an agreement at the initiative of the personal data subject or an agreement under which the personal data subject will be a beneficiary or guarantor.",
				privacyTextSevenFive: "7.5. The processing of personal data is necessary for the realization of the legal and legitimate interests of the operator or third parties or for the achievement of socially significant goals, provided that it does not violate the rights and freedoms of the personal data subject.",
				privacyTextSevenSix: "7.6. Personal data is processed, access to which is provided by the personal data subject or at his/her request to an unlimited number of persons (hereinafter referred to as publicly available personal data).",
				privacyTextSevenSeventh: "7.7. Personal data subject to publication or mandatory disclosure in accordance with the law of the European Union is processed.",
				privacyTitleEight: "8. Procedure for collecting, storing, transferring and other types of personal data processing",
				privacyTextEightTitle: "The security of personal data processed by the Operator is ensured through the implementation of legal, organizational and technical measures necessary to fully comply with the requirements of the current legislation in the field of personal data protection.",
				privacyTextEightFirst: "8.1. The Operator ensures the safety of personal data and takes all possible measures to exclude access to personal data of unauthorized persons.",
				privacyTextEightSecond: "8.2. The User's personal data will never, under any circumstances, be transferred to third parties, except in cases related to the implementation of applicable law or if the personal data subject has given the Operator consent to transfer data to a third party to fulfill obligations under a civil law contract.",
				privacyTextEightThird: "8.3. In case of inaccuracies in personal data, the User may update them independently by sending a notification to the Operator to the Operator's e-mail address muzikbasss@gmail.com marked 'Updating personal data'.",
				privacyTextEightFourth: "8.4. The term of personal data processing is determined by the achievement of the purposes for which personal data was collected, unless another term is provided for by the agreement or applicable law.",
				privacyTextEightFifth: "8.5. All information collected by third-party services, including payment systems, communication tools and other service providers, is stored and processed by these persons (Operators) in accordance with their User Agreement and Privacy Policy. Personal data subject and/or with the specified documents. The Operator shall not be liable for the actions of third parties, including the service providers specified in this clause.",
				privacyTextEightSixth: "8.6. Prohibitions on transfer (except for granting access), as well as on processing or conditions of processing (except for obtaining access) of personal data allowed for distribution, established by the personal data subject, do not apply in cases of processing personal data in the state, public and other public interests determined by the legislation of the European Union.",
				privacyTextEightSeventh: "8.7. The Operator shall ensure the confidentiality of personal data during the processing of personal data.",
				privacyTextEightEighth: "8.8. The Operator shall store personal data in a form that allows identifying the subject of personal data for no longer than the purpose of processing personal data requires, unless the period of storage of personal data is established by the law of the European Union, an agreement to which the subject of personal data is a party or a guarantor.",
				privacyTextEightNinth: "8.9. A condition for the termination of personal data processing may be the achievement of the purposes of personal data processing, the expiration of the consent of the personal data subject, the withdrawal of consent by the personal data subject or a request to terminate the processing of personal data, as well as the detection of unlawful processing of personal data.",
				privacyTitleNine: "9. List of actions performed by the Operator with the received personal data",
				privacyTextNineFirst: "9.1. The Operator collects, records, systematizes, accumulates, stores, clarifies (updates, changes), extracts, uses, transfers (distributes, provides, accesses), depersonalizes, blocks, deletes and destroys personal data.",
				privacyTextNineSecond: "9.2. The Operator performs automated processing of personal data with or without receiving and/or transmitting the received information via an information and telecommunication network.",
				privacyTitleTen: "10. Cross-border transfer of personal data",
				privacyTextTenFirst: "10.1. Prior to the commencement of activities related to the cross-border transfer of personal data, the Operator shall notify the authorized body for the protection of the rights of personal data subjects of its intention to carry out cross-border transfer of personal data (such notification shall be sent separately, which shall state the intention to process personal data).",
				privacyTextTenSecond: "10.2. Prior to submitting the above notification, the Operator shall obtain relevant information from the authorities of a foreign state, foreign individuals, foreign legal entities to whom the cross-border transfer of personal data is planned.",
				privacyTitleEleven: "11. Confidentiality of personal data",
				privacyTextElevenFirst: "The Operator and other persons who have gained access to personal data are obliged not to disclose to third parties or distribute personal data without the consent of the personal data subject, unless otherwise provided by the law of Ukraine.",
				privacyTitleTwelve: "12. Final provisions",
				privacyTextTwelveFirst: "12.1. The User may receive any clarifications regarding issues related to the processing of his/her personal data by contacting the Operator via e-mail muzikbasss@gmail.com.",
				privacyTextTwelveSecond: "12.2. This document will reflect any changes to the personal data processing policy of the Operator. The Policy is valid indefinitely until replaced by a new version.",
				privacyTextTwelveThird: "12.3 The current version of the Policy is freely available on the Internet at",
			},
		};

		return allTextsOfSite[language][key];
	};


	return (
		<div className="App">
			<Sidepanel getAllTextsOfSite={getAllTextsOfSite} />
			<BtnEnUk
				toggleLanguage={toggleLanguage}
				language={language} />
			<Hamburger
				menuActive={state}
				setMenuActive={setState} />
			<Menu
				active={state}
				setActive={setState}
				getAllTextsOfSite={getAllTextsOfSite}/>
			<MyPromo getAllTextsOfSite={getAllTextsOfSite} />
			<About getAllTextsOfSite={getAllTextsOfSite} />
			<Education getAllTextsOfSite={getAllTextsOfSite} />
			<Skills getAllTextsOfSite={getAllTextsOfSite} />
			<Portfolio getAllTextsOfSite={getAllTextsOfSite} />
			<Contacts getAllTextsOfSite={getAllTextsOfSite}
				privacyPolicy={privacyPolicy}
				setPrivacyPolicy={setPrivacyPolicy} />
			<Privacy
				getAllTextsOfSite={getAllTextsOfSite}
				privacy={privacyPolicy}
				setPrivacy={setPrivacyPolicy} />
		</div>
	);
}

export default App;
