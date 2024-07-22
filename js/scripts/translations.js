const translations = {
    pt: {
        userAccountTitle: "Olá, Guilherme!",
        userAccountSubtitle: "Gerencie tudo que importa em um só lugar.",
    },
    es: {
        userAccountTitle: "Hola, Guilherme!",
        userAccountSubtitle: "Administre todo lo que importa en un solo lugar.",
    },
    en: {
        userAccountTitle: "Hello, Guilherme!",
        userAccountSubtitle: "Manage everything that matters in one place.",
    }
};

function changeLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach(element => {
      const key = element.getAttribute("data-translate");
      element.textContent = translations[lang][key] || key;
    });
}

document.getElementById("language-option").addEventListener("change", (event) => {
changeLanguage(event.target.value);
});

changeLanguage('pt');