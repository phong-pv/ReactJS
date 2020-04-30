class Animal {
    constructor(name) {
        this.name = name;
    }
    legnumber() {
        return "it have 4 leg" + this.name;
    }
}
class dog extends Animal {
    constructor(name, brand) {
        super(name);
        this.brand = brand;
    }

    show() {
        return "I have a dog it's name is" + this.brand + this.legnumber();
    }
}
animal = new dog("ly", "nhat");
document.write(animal);



hello = () => {
    return "hello world";
}
hello = (val) => "hello " + val;
document.write(hello("phong"));

doLove = val => (val === true) ? "yes" : "no";
document.write(doLove(true));