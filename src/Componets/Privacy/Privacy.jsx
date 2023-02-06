import React from 'react';

import { ArrowScrollUp } from '../ArrowScrollUp/ArrowScrollUp';

import './Privacy.scss';


const Privacy = ({ privacy, setPrivacy }) => {
	return (
		<div className={privacy ? 'privacy visible' : 'privacy'} id='privacy' >
			<a className='privacy__btn' onClick={() => setPrivacy(false)} href='/#link'>
			<svg className='svg-pz' width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="#91C9FF" />
					</svg>
			</a>
			<div className="container">
				<h1>Політика щодо обробки персональних даних</h1>
				<h2> 1. Загальні положення</h2>
				<p>Ця політика обробки персональних даних складена відповідно до вимог
					Закону України "Про захист персональних даних" від 01.06.2010 № 2297-VI (далі — Закон про персональні дані) та визначає порядок обробки персональних даних та заходи щодо забезпечення безпеки персональних даних, які вживає Мізюк Олександр Миколайович (далі — Оператор).<br></br> <br />
					1.1. Оператор ставить своєю найважливішою метою та умовою здійснення своєї діяльності дотримання прав і свобод людини та громадянина при обробці його персональних даних, у тому числі захисту прав на недоторканність приватного життя, особисту та сімейну таємницю.  <br></br>
					1.2. Ця політика Оператора щодо обробки персональних даних (далі — Політика) застосовується до всієї інформації, яку Оператор може отримати про відвідувачів веб-сайту <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> </p>
				<h2>2. Основні поняття, що використовуються у Політиці</h2>
				<p>
					2.1. Автоматизована обробка персональних даних – обробка персональних даних за допомогою засобів обчислювальної техніки. <br></br>
					2.2. Блокування персональних даних — тимчасове припинення обробки персональних даних (крім випадків, якщо обробка необхідна для уточнення персональних даних). <br></br>
					2.3. Веб-сайт — сукупність графічних та інформаційних матеріалів, а також програм для ЕОМ та баз даних, що забезпечують їх доступність у мережі інтернет за адресою <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					2.4. Інформаційна система персональних даних - сукупність персональних даних, що містяться в базах даних і забезпечують їх обробку інформаційних технологій і технічних засобів. <br></br>
					2.5. Знеособлення персональних даних — дії, у яких неможливо визначити без використання додаткової інформації належність персональних даних конкретному Користувачеві чи іншому суб'єкту персональних даних. <br></br>
					2.6. Обробка персональних даних - будь-яка дія (операція) або сукупність дій (операцій), що здійснюються з використанням засобів автоматизації або без використання таких засобів з персональними даними, включаючи збирання, запис, систематизацію, накопичення, зберігання, уточнення (оновлення, зміна), вилучення, використання, передачу (поширення, надання, доступ), знеособлення, блокування, видалення, знищення персональних даних. <br></br>
					2.7. Оператор - державний орган, муніципальний орган, юридична або фізична особа, що самостійно або спільно з іншими особами організують та/або здійснюють обробку персональних даних, а також визначальні цілі обробки персональних даних, склад персональних даних, що підлягають обробці, дії (операції), що здійснюються з персональними даними. <br></br>
					2.8. Персональні дані — будь-яка інформація, що стосується безпосередньо або опосередковано до певного або визначеного Користувачеві веб-сайту <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					2.9. Персональні дані, дозволені суб'єктом персональних даних для розповсюдження, — персональні дані, доступ необмеженого кола осіб до яких надано суб'єктом персональних даних шляхом надання згоди на обробку персональних даних, дозволених суб'єктом персональних даних для розповсюдження у порядку, передбаченому Законом про персональні дані (далі — персональні дані дані, дозволені поширення).<br></br>
					2.10. Користувач – будь-який відвідувач веб-сайту <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a> <br></br>
					2.11. Надання персональних даних - дії, спрямовані на розкриття персональних даних певної особи чи певному колу осіб. <br></br>
					2.12. Поширення персональних даних — будь-які дії, спрямовані на розкриття персональних даних невизначеному колу осіб (передача персональних даних) або на ознайомлення з персональними даними необмеженого кола осіб, у тому числі оприлюднення персональних даних у засобах масової інформації, розміщення в інформаційно-телекомунікаційних мережах або надання доступу до персональних даних будь-яким іншим способом. <br></br>
					2.13. Транскордонна передача персональних даних — передача персональних даних на територію іноземної держави до органу влади іноземної держави, іноземної фізичної чи іноземної юридичної особи. <br></br>
					2.14. Знищення персональних даних — будь-які дії, внаслідок яких персональні дані знищуються безповоротно з неможливістю подальшого відновлення змісту персональних даних в інформаційній системі персональних даних та/або знищуються матеріальні носії персональних даних. <br></br>
				</p>
				<h2>3. Основні права та обов'язки Оператора</h2>
				<p>3.1. Оператор має право:
					— отримувати від суб'єкта персональних даних достовірну інформацію та/або документи, що містять персональні дані;
					— у разі відкликання суб'єктом персональних даних згоди на обробку персональних даних, а також направлення звернення з вимогою про припинення обробки персональних даних, Оператор має право продовжити обробку персональних даних без згоди суб'єкта персональних даних за наявності підстав, зазначених у Законі про персональні дані;
					- Самостійно визначати склад і перелік заходів, необхідних і достатніх для забезпечення виконання обов'язків, передбачених Законом про персональні дані та прийнятими відповідно до нього нормативними правовими актами, якщо інше не передбачено Законом про персональні дані або іншими законами України.<br></br>
					3.2. Оператор зобов'язаний:
					— надавати суб'єкту персональних даних на його прохання інформацію щодо обробки його персональних даних;
					- Організовувати обробку персональних даних у порядку, встановленому чинним законодавством України;
					- відповідати на звернення та запити суб'єктів персональних даних та їх законних представників відповідно до вимог Закону про персональні дані;
					— повідомляти до уповноваженого органу захисту прав суб'єктів персональних даних на запит цього органу необхідну інформацію протягом 30 днів з дати отримання такого запиту;
					— публікувати чи іншим чином забезпечувати необмежений доступ до цієї Політики щодо обробки персональних даних;
					— вживати правових, організаційних та технічних заходів для захисту персональних даних від неправомірного або випадкового доступу до них, знищення, зміни, блокування, копіювання, надання, розповсюдження персональних даних, а також від інших неправомірних дій щодо персональних даних;
					— припинити передачу (розповсюдження, надання, доступ) персональних даних, припинити обробку та знищити персональні дані у порядку та випадках, передбачених Законом про персональні дані;
					- Виконувати інші обов'язки, передбачені Законом про персональні дані.</p>
				<h2>4. Основні права та обов'язки суб'єктів персональних даних</h2>
				<p>4.1. Суб'єкти персональних даних мають право:
					- Отримувати інформацію, що стосується обробки його персональних даних, за винятком випадків, передбачених законами України. Відомості надаються суб'єкту персональних даних Оператором у доступній формі, і в них не повинні утримуватись персональні дані, що належать до інших суб'єктів персональних даних, за винятком випадків, коли є законні підстави для розкриття таких персональних даних. Перелік інформації та порядок її отримання встановлено Законом про персональні дані;
					— вимагати від оператора уточнення його персональних даних, їхнього блокування або знищення у разі, якщо персональні дані є неповними, застарілими, неточними, незаконно отриманими або не є необхідними для заявленої мети обробки, а також вживати передбачених законом заходів щодо захисту своїх прав;
					- висувати умову попередньої згоди при обробці персональних даних з метою просування на ринку товарів, робіт та послуг;
					— на відкликання згоди на обробку персональних даних, а також на направлення вимоги про припинення обробки персональних даних;
					— оскаржити до уповноваженого органу захисту прав суб'єктів персональних даних або в судовому порядку неправомірні дії або бездіяльність Оператора при обробці його персональних даних;
					- На здійснення інших прав, передбачених законодавством України.<br></br>
					4.2. Суб'єкти персональних даних зобов'язані:
					- надавати Оператору достовірні дані про себе;
					— повідомляти Оператора про уточнення (оновлення, зміну) своїх персональних даних.<br></br>
					4.3. Особи, які передали Оператору недостовірні відомості про себе, або відомості про інший суб'єкт персональних даних без згоди останнього, несуть відповідальність відповідно до законодавства України.</p>
				<h2>5. Принципи обробки персональних даних</h2>
				<p>5.1. Обробка персональних даних здійснюється на законній та справедливій основі.<br></br>
					5.2. Обробка персональних даних обмежується досягненням конкретних, заздалегідь визначених та законних цілей. Не допускається обробка персональних даних, несумісна з метою збору персональних даних.<br></br>
					5.3. Не допускається об'єднання баз даних, що містять персональні дані, обробка яких здійснюється з метою, несумісною між собою.<br></br>
					5.4. Обробці підлягають лише персональні дані, які відповідають цілям їхньої обробки.<br></br>
					5.5. Зміст та обсяг оброблюваних персональних даних відповідають заявленим цілям обробки. Не допускається надмірність оброблюваних персональних даних стосовно заявлених цілей їх обробки.<br></br>
					5.6. При обробці персональних даних забезпечується точність персональних даних, їх достатність, а в необхідних випадках і актуальність по відношенню до цілей обробки персональних даних. Оператор вживає необхідних заходів та/або забезпечує їх прийняття щодо видалення або уточнення неповних або неточних даних.<br></br>
					5.7. Зберігання персональних даних здійснюється у формі, що дозволяє визначити суб'єкта персональних даних, не довше, ніж цього вимагають цілі обробки персональних даних, якщо термін зберігання персональних даних не встановлений законом України, договором, стороною якого вигодонабувачем або поручителем за яким є суб'єкт персональних даних. Оброблювані персональні дані знищуються чи знеособлюються після досягнення цілей обробки чи у разі втрати потреби у досягненні цих цілей, якщо інше не передбачено законом України.</p>
				<h2>
					6. Цілі обробки персональних даних
				</h2>
				<p>
					Мета обробки інформування Користувача за допомогою надсилання електронних листів
					Персональні дані
					прізвище ім'я по батькові
					електронна адреса
					номери телефонів
					рік, місяць, дата та місце народження
					фотографії
					Правові підстави
					Закон України від 01.06.2010 № 2297-VI. Про захист персональних даних.
					Види обробки персональних даних
					Збір, запис, систематизація, накопичення, зберігання, знищення та знеособлення персональних даних
					Надсилання інформаційних листів на адресу електронної пошти
				</p>
				<h2>
					7. Умови обробки персональних даних
				</h2>
				<p>
					7.1. Обробка персональних даних здійснюється за згодою суб'єкта персональних даних на обробку його персональних даних.<br></br>
					7.2. Обробка персональних даних необхідна для досягнення цілей, передбачених міжнародним договором держави Україри чи законом, реалізації покладених законодавством України на оператора функцій, повноважень і обов'язків.<br></br>
					7.3. Обробка персональних даних необхідна для здійснення правосуддя, виконання судового акта, акта іншого органу чи посадової особи, які підлягають виконанню відповідно до законодавства України про виконавче провадження.<br></br>
					7.4. Обробка персональних даних необхідна для виконання договору, стороною якого або вигодонабувачем або поручителем, за яким є суб'єкт персональних даних, а також для укладення договору з ініціативи суб'єкта персональних даних або договору, за яким суб'єкт персональних даних буде вигодонабувачем або поручителем.<br></br>
					7.5. Обробка персональних даних необхідна для реалізації правових і законних інтересів оператора чи третіх осіб або задля досягнення суспільно значимих цілей за умови, що не порушує права та свободи суб'єкта персональних даних.<br></br>
					7.6. Здійснюється обробка персональних даних, доступ необмеженого кола осіб до яких надано суб'єктом персональних даних або на його прохання (далі – загальнодоступні персональні дані).<br></br>
					7.7. Здійснюється обробка персональних даних, що підлягають опублікуванню або обов'язковому розкриттю відповідно до закону України.
				</p>
				<h2>
					8. Порядок збирання, зберігання, передачі та інших видів обробки персональних даних
				</h2>
				<p>Безпека персональних даних, що обробляються Оператором, забезпечується шляхом реалізації правових, організаційних та технічних заходів, необхідних для виконання у повному обсязі вимог чинного законодавства у сфері захисту персональних даних. <br></br> <br />
					8.1. Оператор забезпечує збереження персональних даних та вживає всіх можливих заходів, що виключають доступ до персональних даних неуповноважених осіб.<br></br>
					8.2. Персональні дані Користувача ніколи, за жодних умов не будуть передані третім особам, за винятком випадків, пов'язаних з виконанням чинного законодавства або у разі, якщо суб'єктом персональних даних надано згоду Оператору на передачу даних третій особі для виконання зобов'язань за цивільно-правовим договором.<br></br>
					8.3. У разі виявлення неточностей у персональних даних, Користувач може актуалізувати їх самостійно шляхом надсилання Оператору повідомлення на адресу електронної пошти Оператора muzikbasss@gmail.com з позначкою «Актуалізація персональних даних».<br></br>
					8.4. Термін обробки персональних даних визначається досягненням цілей, для яких було зібрано персональні дані, якщо інший термін не передбачений договором або чинним законодавством.<br></br>
					Користувач може у будь-який момент відкликати свою згоду на обробку персональних даних, надіславши Оператору повідомлення через електронну пошту на електронну адресу Оператора muzikbasss@gmail.com з позначкою «Відклик згоди на обробку персональних даних». <br></br>
					8.5. Вся інформація, яка збирається сторонніми сервісами, у тому числі платіжними системами, засобами зв'язку та іншими постачальниками послуг, зберігається та обробляється зазначеними особами (Операторами) відповідно до їх Угоди користувача та Політики конфіденційності. Суб'єкт персональних даних та/або із зазначеними документами. Оператор не несе відповідальності за дії третіх осіб, у тому числі зазначених у цьому пункті постачальників послуг.<br></br>
					8.6. Встановлені суб'єктом персональних даних заборони на передачу (крім надання доступу), а також на обробку або умови обробки (крім отримання доступу) персональних даних, дозволених для розповсюдження, не діють у випадках обробки персональних даних у державних, громадських та інших публічних інтересах, визначених законодавством України.<br></br>
					8.7. Оператор під час обробки персональних даних забезпечує конфіденційність персональних даних.<br></br>
					8.8. Оператор здійснює зберігання персональних даних у формі, що дозволяє визначити суб'єкта персональних даних, не довше, ніж цього вимагає мета обробки персональних даних, якщо термін зберігання персональних даних не встановлений законом України, договором, стороною якого вигодонабувачем або поручителем за яким є суб'єкт персональних даних.<br></br>
					8.9. Умовою припинення обробки персональних даних може бути досягнення цілей обробки персональних даних, закінчення терміну дії згоди суб'єкта персональних даних, відкликання згоди суб'єктом персональних даних або вимога про припинення обробки персональних даних, а також виявлення неправомірної обробки персональних даних.</p>
				<h2>9. Перелік дій, які здійснюються Оператором з отриманими персональними даними</h2>
				<p>9.1. Оператор здійснює збір, запис, систематизацію, накопичення, зберігання, уточнення (оновлення, зміна), вилучення, використання, передачу (поширення, надання, доступ), знеособлення, блокування, видалення та знищення персональних даних. <br></br>
					9.2. Оператор здійснює автоматизовану обробку персональних даних з отриманням та/або передачею отриманої інформації по інформаційно-телекомунікаційній мережі або без такої</p>
				<h2>
					10. Транскордонна передача персональних даних
				</h2>
				<p>
					10.1. Оператор до початку здійснення діяльності з транскордонної передачі персональних даних зобов'язаний повідомити уповноважений орган захисту прав суб'єктів персональних даних про свій намір здійснювати транскордонну передачу персональних даних (таке повідомлення надсилається окремо в якому повідомляється про намір здійснювати обробку персональних даних).<br></br>
					10.2. Оператор до подання вищевказаного повідомлення зобов'язаний отримати від органів влади іноземної держави, іноземних фізичних осіб, іноземних юридичних осіб, яким планується транскордонна передача персональних даних, відповідні відомості.
				</p>
				<h2>
					11. Конфіденційність персональних даних
				</h2>
				<p>
					Оператор та інші особи, які отримали доступ до персональних даних, зобов'язані не розкривати третім особам і не поширювати персональні дані без згоди суб'єкта персональних даних, якщо інше не передбачено законом України.
				</p>
				<h2>12. Заключні положення</h2>
				<p>
					12.1. Користувач може отримати будь-які роз'яснення стосовно питань, які стосуються обробки його персональних даних, звернувшись до Оператора за допомогою електронної пошти muzikbasss@gmail.com.<br></br>
					12.2. У цьому документі буде відображено будь-які зміни політики обробки персональних даних Оператором. Політика діє безстроково до заміни її новою версією. <br></br>
					12.3. Актуальна версія Політики у вільному доступі розміщена у мережі Інтернет за адресою <a href='https://my-portfolio-aeb86.web.app' alt='Link to website'>https://my-portfolio-aeb86.web.app</a>
				</p>
			</div>
			<ArrowScrollUp />
		</div >

	);

};

export default Privacy;