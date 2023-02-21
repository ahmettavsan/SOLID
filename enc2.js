class Member {
    constructor(id, email, password) {
        this._password = this.passwordSetter();
        this.id = id;
        this.email = email;
    }
    passwordSetter() {
        this._password = this.hasher();
        return this._password;
    }
    get password() {
        return this._password;
    }
    hasher() {
        let hashSetPassword = this._password
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/ı/g, "i")
            .replace(/ü/g, "u")
            .replace(/ö/g, "o")
            .replace(/ş/g, "s")
            .replace(/ç/g, "c")
            .replace(/a/g, "e")
            .replace(/b/g, "d")
            .replace(/p/g, "f");
        return hashSetPassword;
    }
}
var member = new Member(1, "ahmettavsan@gmail.com", "ahmett");
console.log(member.password);
