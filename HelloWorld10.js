var HelloWorld10 = (function () {
    function HelloWorld10(firstName, lastName) {
        this.firstName = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld10.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');
    };
    return HelloWorld10;
})();
var myHelloClassInstance = new HelloWorld10('Ben', 'Khan');
myHelloClassInstance.sayHello();
