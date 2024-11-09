function getModuleUpdate(courseId) {
    console.log('chegou' + courseId);

    const allModuleNames = document.querySelectorAll('.md-name');
    console.log(allModuleNames);

    for (let count=0; count < allModuleNames.length; count++){
        console.log('quantidade de inputs: ' + count);
    }


    const moduleMap = new Map();

    allModuleNames.forEach(module => {
        //        moduleMap.set(module,  moduleId)
        moduleMap.set(module, 1);
        console.log( moduleMap.get(module));
    });

    // Função vai receber todos os modules id
    // apos isso vai mapear cada modulo com seu id
    // apos o submit ele vai adicionar ao local storage e enviar sua variavel
    // e seu id sera resgatado com o get do map


};