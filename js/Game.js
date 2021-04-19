class Game {
constructor(){}

getState(){
var gcount = database.ref('gameState')
gcount.on("value", function(data){gameState=data.val()})
}

update(state){
 database.ref('/').update({gameState:state})
}


start(){

if(gameState===0){
form=new Form();
form.display(); 

player=new Player();
player.getCount();
}
car1=createSprite(100,200)
car1.addImage("car1",car1image);
car2=createSprite(300,200)
car2.addImage("car2",car2image);
car3=createSprite(500,200)
car3.addImage("car3",car3image);
car4=createSprite(700,200)
car4.addImage("car4",car4image);
cars=[car1,car2,car3,car4]
}

play(){
    form.hide();
    player.getcarsposition();
    text ("game start",420,300)
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        background("#c68767")
        image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index=0;
        var x =175;
        var y ;
        for(var plr in allPlayers){
        index=index+1
        
        x=x+230
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x 
        cars[index-1].y=y
        if(index===player.index){
       // cars[index-1].shapeColor="red"
       stroke(10)
       fill("red")
       ellipse(x,y,60,60);
        camera.position.x=displayWidth/2;
        camera.position.y=cars[index-1].y
        }   
    }

    }
    if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update();
    }
    if(player.distance>3860){
        player.rank=player.rank+1;
        Player.updatecarPosition(player.rank)
        gameState=2;
        }
drawSprites();
}
end(){
    console.log ("game ended")
    console.log (player.rank)
}

}