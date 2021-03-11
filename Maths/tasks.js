let arrayOfTasks = [];
let arrayOfResults = [14, 14, 7, 11, 7, 7, 15, 4, 16, 9, 12, 5, 8, 60, 1, 14, 22, 15, 7, 11, 8, 4, 20, 9, 60, 5, 6];
let task = document.getElementById('task');
let button = document.getElementById('button');
let input = document.getElementById('input');
let result = document.getElementById('result');
let answer = document.getElementById('answer');
let scoreTrue = document.getElementById('scoreTrue');
let scoreFalse = document.getElementById('scoreFalse');

arrayOfTasks.push('Маша засушила 4 кленовых листика, а дубовых – на 5 листиков больше. Сколько всего листиков засушила Маша?');
arrayOfTasks.push('У Пети 5 флажков, а у Вани на 4 флажка больше. Сколько флажков у обоих мальчиков?');
arrayOfTasks.push('Мама испекла 11 пирожков, а булочек – на 4 меньше. Сколько булочек испекла мама?');
arrayOfTasks.push('У Кати 6 матрёшек, а у Даши на 5 матрёшки больше. Сколько матрёшек у Даши?');
arrayOfTasks.push('В большой башне 12 окон, а в маленькой башне на 5 окон меньше. Сколько окон в маленькой башне?');
arrayOfTasks.push('Рыбак поймал 9 ершей, щук - на 7 меньше, а окуней – на 5 больше, чем щук. Сколько окуней поймал рыбак?');
arrayOfTasks.push('Длина красного карандаша 11см, а простой карандаш на 4см длиннее. Какой длины простой карандаш?');
arrayOfTasks.push('Таня вырастила фиалку и кактус. Высота фиалки 8см, а кактус на 4см ниже фиалки. Какой высоты кактус?');
arrayOfTasks.push('В маленькой пирамидке 8 кружков, а в большой – в 2 раза больше. Сколько кружков в большой пирамидке?');
arrayOfTasks.push('На полянке растут 7 васильков, 5 ромашек и 6 одуванчиков. Даша сорвала для мамы по 3 цветочка каждого вида. Сколько цветов осталось расти на полянке?');
arrayOfTasks.push('На арене цирка выступают 8 жонглёров, а клоунов – на 4 меньше. Сколько циркачей выступает на арене?');
arrayOfTasks.push('Столяр починил 5 стульев, а столов – на 4 больше. Сколько стульев починил столяр?');
arrayOfTasks.push('На крыше сарая висят 3 сосульки, а на крыше дома – на 6 сосулек больше. 4 сосульки растаяли. Сколько всего сосулек осталось висеть на крышах?');
arrayOfTasks.push('Мультфильм в кинотеатре начался в 5 часов, а закончился в 6 часов. Сколько минут длился мультфильм?');
arrayOfTasks.push('На новый год в вазе лежали 14 мандаринов. 5 мандаринов сьел папа, 4 мандарина съела мама и еще 4 - бабушка. Сколько мандаринов осталось в вазе?');
arrayOfTasks.push('Ульяна съехала с горки на ватрушке 6 раз, Дашка - тоже 6 раза, а папа 2 раза. Сколько всего раз ватрушка съехала с горки?');
arrayOfTasks.push('На опушке растут 4 березки. Дети посадили 7 саженцев, а родители - 11. Сколько всего деревьев теперь на опушке леса?');
arrayOfTasks.push('Папа принес домой конфеты и все раздал: Даше - 6, Ульяне - 6, маме - 3. Сколько конфет принес папа?');
arrayOfTasks.push('В мультфильме 9 героев-единорожек. 8 из них добрых, а 1 злой. На сколько больше добрых героев, чем злых?');
arrayOfTasks.push('В улье живут 18 пчел. 6 из них раскладывают мед по сотам, 1 убирает мусор, а остальные собирают мед. Сколько пчел-собирателей?');
arrayOfTasks.push('Двадцать минут назад часы показывали 7:40. Сколько часов сейчас на циферблате?');
arrayOfTasks.push('Тридцать минут назад часы показывали 3:50. Сколько часов сейчас на циферблате?');
arrayOfTasks.push('Первый урок заканчивается в 9:10,  а второй начинается в 9:30. Сколько минут длится переменка?');
arrayOfTasks.push('Между мальчиками 15 метров. Каждый из них прошел навстречу друг другу по 3 метра. Сколько теперь метров между мальчиками?');
arrayOfTasks.push('Бабушке 70 лет, ее сыну 40 лет, а его дочке - 10. Сколько было лет бабушке, когда у нее родилась внучка?');
arrayOfTasks.push('В ящике 20 апельсинов. Каждому ребенку в садике в группе из 15 детей раздали на полдник по одному апельсину. Сколько фруктов осталось в ящике?');
arrayOfTasks.push('В первый день Катя выучила одну букву алфавита, а в остальные дни он учила на одну букву больше, чем в предыдущий день. Сколько букв девочка выучила за 3 дня?');

let i;
i = Math.round(Math.random() * (arrayOfTasks.length - 1));
task.innerHTML = arrayOfTasks[i];

input.onkeyup = function () {
    let val = input.value;
    if ((+val)*1 !== +val && val.length == 1) {
        input.value = null;
    }
    if ((+val)*1 !== +val && val.length == 2) {
        input.value = val[0];
    }
}

let scoreTrueValue = 0;
let scoreFalseValue = 0;
scoreTrue.innerHTML = 0;
scoreFalse.innerHTML = 0;

function getResult() {
    let audioYes = new Audio();
    let audioNo = new Audio();
    audioYes.src = './yes.mp3';
    audioNo.src = './no.mp3';
    if (+input.value == arrayOfResults[i]) {
        audioYes.play();
        scoreTrue.innerHTML = ++scoreTrueValue ;
        input.disabled = 'disabled'
        button.disabled = true;
        result.innerHTML = 'ВЕРНО &#128521';
        result.style.color = 'green';
        setTimeout(function () {
            input.disabled = null;
            button.disabled = false;
            arrayOfTasks.splice(i, 1);
            arrayOfResults.splice(i, 1);
            result.innerHTML = null;
            input.value = null;
            if (arrayOfTasks.length) {
                i = Math.round(Math.random() * (arrayOfTasks.length - 1))
                task.innerHTML = arrayOfTasks[i];
            } else {
                task.innerHTML = 'Задачки закончились';
                button.disabled = true;
                answer.innerHTML = null;
            }
        }, 3000)
    } else {
        audioNo.play();
        scoreFalse.innerHTML = ++scoreFalseValue;
        input.disabled = 'disabled'
        button.disabled = true;
        result.innerHTML = 'НЕПРАВИЛЬНО &#128553';
        result.style.color = 'red';
        setTimeout(function () {
            input.disabled = null;
            button.disabled = false;
            result.innerHTML = null;
            input.value = null;
        }, 4000)
    }
}
    button.addEventListener('click', getResult);