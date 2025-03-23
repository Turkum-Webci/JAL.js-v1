function JAL(jsd){
    let jds = jsd
    .replace(/Uyar\(/g, 'alert(')
    .replace(/olusturp\((.*?)\)/g, 'var e = document.createElement("p");e.textContent = $1;document.body.appendChild(e);')
    .replace(/olusturr\((.*?)\)/g, 'var d = document.createElement("img");d.src = $1;d.style.width = "90px";document.body.appendChild(d);')
    .replace(/olusturi\((.*?)\)/g, 'var f = document.createElement("iframe");f.src = $1;f.style.width = "300px";document.body.appendChild(f);')
    .replace(/ai1\((.*?)\)/g, 'var l = document.createElement("input");var v = document.createElement("button");var yz = document.createElement("p");v.textContent = "Gönder";v.addEventListener("click", function(event){if(l.value == "merhaba"){yz.textContent = $1;}});document.body.appendChild(l);document.body.appendChild(v);document.body.appendChild(yz);')
    .replace(/consolayaz\(/g, 'console.log(');
    return jds;
}
function J(jalkod){
const jals = JAL(jalkod);
eval(jals);
}