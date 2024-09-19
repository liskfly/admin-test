
import  X2JS from '@/utils/xml2json'

export function xmlTagToJson(xml, tagName) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml, "text/xml");
    var tagElements = xmlDoc.getElementsByTagName(tagName);
    var json = [];

    for (var i = 0; i < tagElements.length; i++) {
        var tagElement = tagElements[i];
        var x2js = new X2JS();
        var tagJson = x2js.xml2json(tagElement);

        json.push(tagJson);
    }

    return json;
}


export function jsonToxml(jsonObj) {
    let x2js = new X2JS();
    let xmlAsStr = x2js.json2xml_str(jsonObj)
    return xmlAsStr
}

