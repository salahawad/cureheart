class MyClass {
    test(){
        console.log("test");
    }
}

class MySecondClass extends MyClass {
    test(){
        super.test();
    }
}

const myClass = new MySecondClass();

module.exports = myClass;