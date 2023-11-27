
class user{
    constructor(fullname, email, password){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log('login efetuado com sucesso!')
        }else{
            console.error('email ou senha invalido.')
        }
    }
}

const john = new user('john b gate','john_gates@hotmail.com', 'tes@test')

john.login('john@hotmail.com', '123456');
john.login('john_gates@hotmail.com','tes@test');