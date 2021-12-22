function Course(name,unit,capacity,more){
        this.className=name;
        this.classUnit=unit;
        this.classCapacity=capacity;
        // --------------------b-----------------------------
        if(this.className=='network'){
            this.book=more
        }else{
            this.project=more
        }
        // --------------------------------------------------

}
const networkObj=new Course("network",2,21)
const softEngObj= new Course("softEngineeringClass",3,50)
console.log(JSON.stringify(networkObj))
console.log(JSON.stringify(softEngObj))
// --------------------b-----------------------------
console.log("-----------b-------------")
const networkObj2=new Course("network",2,21,"Network+")
const softEngObj2= new Course("softEngineeringClass",3,50,true)
console.log(JSON.stringify(networkObj2))
console.log(JSON.stringify(softEngObj2))
