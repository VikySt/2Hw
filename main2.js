//Cоздать функцию greeting, которая принимает имя и выводит приветствие, 
//используя переданное имя, в консоль.
//Необходимо у пользователя запросить имя и вызвать функцию greeting, 
//передав туда данное значение.

function nameHello(name) {
    console.log('Hello ${name}');
}

const userName = prompt('Введите имя: ');
nameHello(userName);