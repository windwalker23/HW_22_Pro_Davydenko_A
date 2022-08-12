function getResponse(action) {
    let xml = new XMLHttpRequest();
    xml.open("GET", action, false);
    xml.send();

    children.push(...JSON.parse(xml.response).children);
}

let data = ["data.json", "data2.json"]

const children = [];

data.forEach(item => getResponse(item));

console.log(children);