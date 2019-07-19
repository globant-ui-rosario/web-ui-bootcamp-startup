let btn = document.querySelector("button");
let url = "https://api.github.com/search/repositories?q=";
const divHtml = document.getElementById("divHtml");

btn.addEventListener("click", function() {

    async function API (url2) {
        const baseUrl = url;
        const res = await fetch(baseUrl+url2);
        const data = await res.json();

        return data.items.forEach(i => {
            const li = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = i.html_url
            anchor.textContent = i.full_name;
            let lista = document.getElementById("ulHtml");
            li.appendChild(anchor);
            lista.appendChild(li);
            //divHtml.appendChild(anchor)
            divHtml.appendChild(document.createElement("br"));

        })
    }
    let search = document.getElementById("search").value;
    API(search);
})