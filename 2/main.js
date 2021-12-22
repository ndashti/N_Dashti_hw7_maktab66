class Media{
    constructor(name,auther){
        this.name=name;
        this.auther=auther
    }
}

class Book extends Media{
    constructor(name,auther,publisher,publishDate){
        super(name,auther);
        this.publisher= publisher.toUpperCase();
        this.publishDate=publishDate;
    }
}

class Film extends Media{
    constructor(name,auther,actor){
        super(name,auther)
        this.actor=actor
    }
}

const mybook = new Book('Clean Code', 'Martin c','Prentice Hall',2008)
console.log(mybook);

const myfilm=new Film("Spider-Man",'Stan Lee','Tobey Maguire')
console.log(myfilm);
