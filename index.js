document.getElementById("getPost").addEventListener("click", getPost);

function getPost(){
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then((Response) => Response.json())
    .then((data) => {
        let output = "";
        console.log("data", data)

        data.forEach((post) => {
            output += `
            <div>
            <h3>${post.name}</img>
            <img src ="${post.img}" class="img-item"/>
            <h3>${post.level}</h3>
            </div>
            `;
        });

        document.getElementById("output").innerHTML = output;
    })

    .catch((err) => console.log(err));
}