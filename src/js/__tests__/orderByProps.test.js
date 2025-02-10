// import sum from '../basic';
import orderByProps from '../orderByProps';


// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
test ('тест сортировочной функции', ()=>{
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const sortList = ['name','level'];
  const result = orderByProps(obj,sortList);
  const expected = [
      {key: "name", value: "мечник"},
      {key: "level", value: 2},
      {key: "attack", value: 80},                
      {key: "defence", value: 40},
      {key: "health", value: 10} 
    ];
    expect(result).toEqual(expected)

});