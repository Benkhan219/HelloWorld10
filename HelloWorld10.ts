class HelloWorld10 {


    constructor(public firstName: string, public lastName: string) {
    

    }

    sayHello() {
        console.log('Hello World!' + ' My name is ' + this.firstName + ' ' + this.lastName + '.');


    }

}


const myHelloClassInstance = new HelloWorld10('Ben', 'Khan');
myHelloClassInstance.sayHello();