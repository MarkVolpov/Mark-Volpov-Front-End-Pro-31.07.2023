




const Roles = {};

Object.defineProperties(Roles , {
    Admin: {
        value: 'admin',
        writable: false,
        enumerable: false,
        configurable: false,

    },
    Editor: {
        value: 'editor',
        writable: false,
        enumerable: true,
        configurable: false,
    },
    Reader: {
        value: 'reader',
        writable: false,
        enumerable:true,
        configurable: false,
    },
    SuperAdmin: {
        value: 'super admin',
        writable: false,
        enumerable: false,
        configurable: false,
    },

})

Object.freeze(Roles)


class User {
    constructor(id,name,lastname,role) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.role = role;
        Object.defineProperty(this,'role', {
            value: role,
            writable:false,
            enumerable: false,
            configurable: false,
        });
    }
   
}
delete Roles.Reader; // doesn't work
console.log(Roles.Admin); // 'admin';
Roles.Admin = 'hello'; // doesn't change this property
Roles.newProp = 'value'; // doesn't change Role object

console.log(Roles)
const editor = new User(1, 'John', 'Doe', Roles.Admin);
console.log(editor.role); // 'admin';
editor.role === Roles.Admin; // true;
editor.role = false; // doesn't do anything
delete editor.role; // doesn't do anything
console.log(editor)
