const children = [];

let xml = new XMLHttpRequest();
xml.open("GET", "data.json", false);
xml.send();

children.push(...JSON.parse(xml.response).children);

let xml1 = new XMLHttpRequest();
xml1.open("GET", "data2.json", false);
xml1.send();

children.push(...JSON.parse(xml1.response).children);

console.log(children);