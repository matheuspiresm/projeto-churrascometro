window.onload = function () {
    if (localStorage.getItem("name") !== null) {
        document.getElementById("name").value = localStorage.getItem("name");
    }
    if (localStorage.getItem("email") !== null) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("cep") !== null) {
        document.getElementById("cep").value = localStorage.getItem("cep");
    }
    if (localStorage.getItem("promo") !== null) {
        document.getElementById("promo").checked =
            localStorage.getItem("promo") === "true";
    }
};

function nextStep() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const promo = document.getElementById("promo").checked;


    if (name.trim() === "" || email.trim() === "" || cep.trim() === "") {
        document.getElementById("formDataError").innerText =
            "Por favor, preencha todos os campos.";
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById("formDataError").innerText =
            "Por favor, insira um e-mail válido.";
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("cep", cep);
    localStorage.setItem("promo", promo);

    document.getElementById("formData").style.display = "none";
    document.getElementById("formTotal").style.display = "block";
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function calculate() {
    const men = parseInt(document.getElementById("men").value);
    const women = parseInt(document.getElementById("women").value);
    const children = parseInt(document.getElementById("children").value);
    const drinkers = parseInt(document.getElementById("drinkers").value);

    if (
        isNaN(men) ||
        isNaN(women) ||
        isNaN(children) ||
        isNaN(drinkers) ||
        men < 0 ||
        women < 0 ||
        children < 0 ||
        drinkers < 0
    ) {
        document.getElementById("formTotalError").innerText =
            "Por favor, digite somente números inteiros";
        return;
    }

    const resultTableBody = document.getElementById("resultTableBody");
    resultTableBody.innerHTML = "";

    const carne = men * 0.4 + women * 0.32 + children * 0.2;
    const paoDeAlho = (women + men) * 2 + children;
    const carvao = men + women + children;
    const sal = (men + women + children) * 0.04;
    const gelo = ((men + women + children) / 10) * 5;
    const refrigerante = ((men + women + children) / 5) * 2;
    const agua = (men + women + children) / 5;
    const cerveja = drinkers * 3;

    document.getElementById("formData").style.display = "none";
    document.getElementById("formResults").style.display = "block";

    // Carne
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);

    tdItem.textContent = "Carne";
    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${carne.toFixed(2)} KG`;

    // Pão de Alho
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);

    tdItem.textContent = "Pão de Alho";
    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${paoDeAlho} UN`;

    // Carvão
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);

    tdItem.textContent = "Carvão";
    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${carvao.toFixed(2)} KG`;

    // Sal
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);

    tdItem.textContent = "Sal";
    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${sal.toFixed(2)} KG`;

    // Gelo
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);
    tdItem.textContent = "Gelo";

    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${gelo.toFixed(2)} KG`;

    // Refrigerante
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);
    tdItem.textContent = "Refrigerante";

    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${refrigerante} L`;

    // Água
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);
    tdItem.textContent = "Água";

    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${agua} L`;


    // Cerveja
    tr = document.createElement("tr");
    resultTableBody.appendChild(tr);
    tdItem = document.createElement("td");
    tr.appendChild(tdItem);
    tdItem.textContent = "Cerveja";

    tdValue = document.createElement("td");
    tr.appendChild(tdValue);
    tdValue.textContent = `${cerveja} garrafas de 600ml`;
}
