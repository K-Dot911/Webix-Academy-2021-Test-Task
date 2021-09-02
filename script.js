window.onload = () => {
    let listTag = document.getElementById("list-tag");
    let tags = [
        {value: `Tag 1`, id: 1},
        {value: `Tag 2`, id: 2},
    ];

    //Добавление одного тэга через метод
     function addTag() {
         if(readonly()){
             return console.log(`Readonly mod!`)
         }
        const inputText = document.getElementById("inputText");
        if(inputText.value!==""){
            let  elem = document.createElement("div");
            elem.id=listTag.children.length+1;
            elem.className="list-element";
            elem.innerHTML =`${inputText.value} <button class="delete-button" type="button">X</button>`;
            listTag.appendChild(elem);
            tags.push({value: inputText.value, id: elem.id });
             //Кусок кода повторяется: не придумал как записать лучше
            for (let i = 0; i < listTag.children.length; i++) {
                document.getElementsByClassName("delete-button")[i].onclick = () => deleteTag(i + 1);
            }
        }else{
            alert(`Введите tag!`)
        }
    }

    //Удаление одного любого тэга через метод
    function deleteTag(id){
        if(readonly()){
            return console.log(`Readonly mod!`)
        }
        listTag.removeChild(document.getElementById(id));
    }

    //ReadonlyMod
    function readonly()
    {
        return document.getElementById("checkbox").checked;
    }

    //Получение списка добавленных тэгов
    function getList() {
        for (let i = 0; i < tags.length; i++) {
            console.log(tags[i])
        }
    }

    //Установка нового списка тэгов вместо
     function newList() {
         listTag.innerHTML = "";
         for (let i = 0; i < tags.length; i++) {
             let elem = document.createElement("div");
             elem.id = tags[i].id;
             elem.className = "list-element";
             elem.innerHTML = `${tags[i].value} <button class="delete-button" type="button">X</button>`;
             listTag.appendChild(elem);
             for (let i = 0; i < listTag.children.length; i++) {
                 document.getElementsByClassName("delete-button")[i].onclick = () => deleteTag(i + 1);
             }
         }
     }
     //запись/считывание списка тэгов в localStorage
     function storage(){
         localStorage.setItem("Tags", JSON.stringify(tags));
         console.log(localStorage.getItem("Tags"));
     }


    document.getElementById("buttonAdd").onclick = addTag;
    for (let i = 0; i < listTag.children.length; i++) {
        document.getElementsByClassName("delete-button")[i].onclick = () => deleteTag(i + 1);
    }

};

