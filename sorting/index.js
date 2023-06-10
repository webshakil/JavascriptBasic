objData = [
    { name: 'Alex', age: 20 },
    { name: 'Karlsson', age: 19 },
    { name: 'Noah', age: 21 },
  ];

  objData.sort((a,b) => b.age - a.age)
  console.log(objData);