'use strict';


// 1.нужно реализовать функцию, которая для переданного объекта
//  возвращает массив его свойств со значениями, 
//  отсортированный по свойствам (порядок сортировки свойств - второй аргумент).
// Описание
// Дан объект, например:

// const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}
// Дан порядок сортировки свойств:

// ["name", "level"]
// Пример вызова вашей функции:

// orderByProps(obj, ["name", "level"])

// После обработки вашей функцией:

// [
//   {key: "name", value: "мечник"}, // порядок взят из массива с ключами
//   {key: "level", value: 2}, // порядок взят из массива с ключами
//   {key: "attack", value: 80}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
//   {key: "defence", value: 40}, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
//   {key: "health", value: 10} // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
// ]
 
// Т.е. сначала идёт сортировка по тому, как указано в массиве сортировки,
//  для тех ключей, для которых в массиве сортировки нет записи, 
//  сортировка идёт в алфавитном порядке.





export default function orderByProps(object, propetySortList) {
    // СПИСОК "ключ-значение" объекта:
    let listElement = Object.entries(object);
    // console.log(listElement) //   [['name', 'мечник'], ['health', 10], ['level', 2],['attack', 80],['defence', 40]]

    // неотсортированный список объектов:
    let gameList =[];
    for (let elem of listElement) {
        // console.log(elem)
        let newObj ={};       
        newObj.key=elem[0];
        newObj.value = elem[1]       
        // console.log(newObj)
        gameList.push(newObj)
    };
    // console.log(listNonSortObjects) // 5: [{"key": "name","value": "мечник"}, 
                                //  {key: 'health', value: 10},
                                //  {key: 'level', value: 2},
                                //  {key: 'attack', value: 80},
                                 // {key: 'defence', value: 40}]
    // СОРТИРУЕМ СПИСОК

// Проходим по сортировочному списку
// Разделяем список  по порядку сортировки:
// Новый список :
    let gameNewList = [];
// Проходим по сортировочному списку:
    for (let j=0; j<propetySortList.length;j++ ){
        // Проходим по списку объектов
        for (let i = 0; i < gameList.length; i++) {
        // console.log(gameList[i].key)
            if (gameList[i].key==propetySortList[j]) {
                // добавляем объект в gameNewList
                gameNewList.push(gameList[i]);
                // Удаляем объект из gameList
                gameList.splice(i, 1);    
        
            }
        }
             
    };
    // console.log(gameNewList);
    // console.log(gameList); 

    // Сортируем остаток списка по алфавиту
    gameList.sort((a, b) => a.key.localeCompare(b.key));
    // console.log(gameList); 

    // Соединяем два списка в один - добавляем в gameNewList  по очереди
    //  каждый объект из массива объектов gameList
    for (let elem of gameList ){
        gameNewList.push(elem)
    };
    // console.log(gameNewList);
    return gameNewList;
}
