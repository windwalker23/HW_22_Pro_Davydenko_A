function getResponse(action, callback) {
    let xml = new XMLHttpRequest();
    xml.open("GET", action);
    xml.send();
    xml.responseType = "json"

    xml.addEventListener("readystatechange", () => {
        if(xml.readyState === 4 && xml.status > 199 && xml.status < 400) {
            let response = (xml.response).children;

            callback(response);
        }
    })
}

function setArray(jsonArr) {
    children.push(...jsonArr);
}

let data = ["data.json", "data2.json"]

const children = [];

data.forEach(item => getResponse(item, setArray));

setTimeout(() => console.log(children), 1000)




// async function processArray(array) {
//     const result = array.map((item) => {
//             getResponse(item, setArray)
//         }
//     )
//     await Promise.all(result);
//     console.log(children);
// }

// processArray(data);