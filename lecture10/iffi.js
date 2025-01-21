let hello1 = {
    name: "ali",
    class: "10th",
    age: 16,
    func1: function() {  // Use a regular function instead of an arrow function
        console.log(`${this.name} is studying in ${this.class} class`);
    }
};

// hello1.func1();

// name=""
function helo(){
    let name =""
    console.log("heloo");
    
}
// helo();

(function helo1(){
    let name =""
    console.log("heloo1");
    
})();

((name)=>{

    console.log(`helo ${name} `);
    
})("ahmaad");