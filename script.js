function changeColorTo(Color,elementId,codeId) {
    document.getElementById(elementId).style.color=Color;
    document.getElementById(codeId).textContent=Color;
}


function size(elementId,value,codeId) {
    document.getElementById(elementId).style.fontSize=codeId;
    document.getElementById(codeId).textContent=value;
}
function weight(elementId,value,codeId) {
    document.getElementById(elementId).style.fontWeight=value;
    document.getElementById(codeId).textContent=value;
}
function fam(elementId,ffamily,codeId) {
    document.getElementById(elementId).style.fontFamily=ffamily;
    document.getElementById(codeId).textContent=ffamily;
}