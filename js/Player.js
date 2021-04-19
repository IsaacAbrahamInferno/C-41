
class Player{

    constructor(){ 
        this.index=null;
        this.distance=0;
        this.name=null;
        this.rank=null;
    }

    getCount(){
        var pcount = database.ref('playerCount')
        pcount.on("value", (data)=>{playerCount=data.val()})
    }

    updateCount(count){
        
        database.ref('/').update({playerCount:count})
    }

    update(){
       var playerIndex="players/player"+this.index;
       database.ref(playerIndex).set({Name:this.name,distance:this.distance})
    }

    static getPlayerInfo(){
        var PlayerInfo=database.ref('players')
        PlayerInfo.on("value",(data)=>{allPlayers=data.val()})
    }
    getcarsposition(){
    database.ref('carPosition').on("value", (data)=>{this.rank=data.val()})    
    }
    static updatecarPosition(rank){
    database.ref('/').update({carPosition:rank})    
    }
}