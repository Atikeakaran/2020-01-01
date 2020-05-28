let myFirstObj = {} //boş bir object    **  yaygın kullanım
let mySecObj = new Object(); //boş yeni bir object   **  yaygın olmayan bir kullanım

let myEmail = 'aakaran@gmail.com';

let client = {
    name: 'bülent',
    email: myEmail,
    pass: '123'
};

let email = {
    to: 'abc@xyz.com',
    cc: null,
    bcc: null,
    subject: 'test e-mail',
    message: 'test'
}
console.log(email.subject);
console.log(email['to']);

let param = 'message';
console.log(email[param]);

let user = window.prompt("please enter which property you want from email object: ");
alert(email[user]);

//prompt her zaman string döner

client.isActive = true;
console.log(client);

let userPropKey = prompt('please type your key');
let userPropVal = prompt('please type your val');


client.userPropKey = userPropVal;
client[userPropKey] = userPropVal;

console.log(client);
// kullanıcı ilk değere abc ikinci değere def girişi yaparsa 
//çıktısı userPropKey: "def", abc: "def"  olur
// kullanıcı ilk değere new ikinci değere true girişi yaparsa 
//çıktısı userPropKey: "true", new: "true"  olur
//çıktısı oluşan true true mudur sorgusu yapıldığında string değer olması nedeniyle 
//true sonucu alınamaz.

if (client.userPropKey == true) {
    console.log('client.userPropKey is true')
} else {
    console.log('client.userPropKey is not true')
}

if (client.isActive == true) {
    console.log('client.isActive is true')
} else {
    console.log('client.isActive is not true')
}
console.log(client);

// değeri çevirmek için parse - string e çevirmek için strifity kullanılır

// if (JSON.parse(client.userPropKey)==true){
//     console.log('client.userPropKey is true')
// }else{
//     console.log('client.userPropKey is not true')
// }
// console.log(client);


// //kullanıcı büyük-küçük harf kullanırsa -new/true
// if (JSON.parse(client.userPropKey.toLowerCase())==true){
//     console.log('client.userPropKey is true')
// }else{
//     console.log('client.userPropKey is not true')
// }
// console.log(client);

//büyükküçük yazım olsa dahi boolean çevirip karşılaştırmayı yapar.
if (Boolean(client.userPropKey) == true) {
    console.log('client.userPropKey is true')
} else {
    console.log('client.userPropKey is not true')
}
console.log(client);


//userPropKey silinir 
client.userPropKey = '';
delete client.userPropKey;

client['userInput-' + userPropKey] = userPropVal;

let mail = prompt('please type your email adress');

client.mail = mail;
client[mail] = mail;

// let user = { 
//     mail
// }
console.log(user);
