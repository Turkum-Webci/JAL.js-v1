function JAL(jsd){
    let jds = jsd
    .replace(/Uyar\(/g, 'alert(')
    .replace(/olusturp\((.*?)\)/g, 'var e = document.createElement("p");e.textContent = $1;document.body.appendChild(e);')
    .replace(/consolayaz\(/g, 'console.log(');
    return jds;
}
function J(jalkod){
const jals = JAL(jalkod);
eval(jals);
}