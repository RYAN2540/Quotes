export class Quote {
    upvotes:number;
    downvotes:number;
    showDescription: boolean;
    currentTime:Date;
    date:Date;
    constructor(public yourName:string, public author:string, public quote:string){
        this.upvotes=0;
        this.downvotes=0;
        this.showDescription=false;
        this.date=new Date();
        setInterval(() => {
            this.currentTime=new Date(); 
        }, 1000);
    }
}
