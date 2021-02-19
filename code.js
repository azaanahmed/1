var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ab3a344d-7472-46b0-aa66-94966a0d44dd","4c8e6940-f7d0-4b75-a249-aae5f7359e0b","fb78f2df-712b-4ebf-9765-302569d9ce2f","1c41db3e-3773-451a-9fd1-af5ae5d8b9e0","828c6e4e-2b68-4565-ab08-651fe91fa5e1","70e0fe00-e279-4d27-86dc-9b9b2af2e351","d9636ba0-cba0-445c-9d42-90a35acb9a74","759d323e-f7d2-4765-ad27-3d2a388c9711","433039d5-91d2-43a5-8540-bcdf85e42a82","8b7f59a9-cc61-4934-909f-c81e2affd33b"],"propsByKey":{"ab3a344d-7472-46b0-aa66-94966a0d44dd":{"name":"e.png","sourceUrl":null,"frameSize":{"x":3725,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"wGBuBUi9rP.DOkP0N6WqQo_a.03oE8sN","loadedFromSource":true,"saved":true,"sourceSize":{"x":3725,"y":390},"rootRelativePath":"assets/ab3a344d-7472-46b0-aa66-94966a0d44dd.png"},"4c8e6940-f7d0-4b75-a249-aae5f7359e0b":{"name":"d","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"TqX5_.sB1Gv4mUQj2L12WJG8bGR_M7F2","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4c8e6940-f7d0-4b75-a249-aae5f7359e0b.png"},"fb78f2df-712b-4ebf-9765-302569d9ce2f":{"name":"g","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":4,"version":"uGvNoVD2KtUf5Pdr2UBXeUVUynfUmEwE","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/fb78f2df-712b-4ebf-9765-302569d9ce2f.png"},"1c41db3e-3773-451a-9fd1-af5ae5d8b9e0":{"name":"k","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":6,"looping":true,"frameDelay":4,"version":"0htUue20tifQJ3gv3Cw7WePz1GnIiJR_","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/1c41db3e-3773-451a-9fd1-af5ae5d8b9e0.png"},"828c6e4e-2b68-4565-ab08-651fe91fa5e1":{"name":"s","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":5,"looping":true,"frameDelay":4,"version":"_9K0_yVQkUzTYe1MhtakrsMNjv6Io7Ng","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":300},"rootRelativePath":"assets/828c6e4e-2b68-4565-ab08-651fe91fa5e1.png"},"70e0fe00-e279-4d27-86dc-9b9b2af2e351":{"name":"r","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":3,"version":"fJiBN5OoETuELbOBcaLrOsOqoTp7f6ho","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/70e0fe00-e279-4d27-86dc-9b9b2af2e351.png"},"d9636ba0-cba0-445c-9d42-90a35acb9a74":{"name":"sp","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"v9SkyrftgC7Ki.RmBcNiEnWM5w38pr6K","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/d9636ba0-cba0-445c-9d42-90a35acb9a74.png"},"759d323e-f7d2-4765-ad27-3d2a388c9711":{"name":"q","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"PZZA_KflW3EhV1jpJsCpXet4yrlAEkrC","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/759d323e-f7d2-4765-ad27-3d2a388c9711.png"},"433039d5-91d2-43a5-8540-bcdf85e42a82":{"name":"a2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":12,"looping":true,"frameDelay":4,"version":"OsbXXsf54Uc86swdTgZXq8CMjcESBw7P","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":400},"rootRelativePath":"assets/433039d5-91d2-43a5-8540-bcdf85e42a82.png"},"8b7f59a9-cc61-4934-909f-c81e2affd33b":{"name":"a3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":14,"looping":true,"frameDelay":3,"version":".94weha7ttsvqBXcoj39S9qUazhS_F2e","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/8b7f59a9-cc61-4934-909f-c81e2affd33b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var rightEdge = createSprite(400, 200,5,400);
rightEdge.visible= false;



var g = createSprite(200, 200,400,400);
g.setAnimation("e.png")
g.scale-1.5


var i = createSprite(200,420,400,5 );
i.visible= true
var w = createSprite(41, 377);
w.visible=false;

var v = createSprite(190, 377);
v.setAnimation("d")







var score = 0;


function draw() {
background("white");

w.velocityX=v.velocityX;
w.velocityY=v.velocityY;
v.collide(i);
w.collide(i);
v.velocityY = v.velocityY + 0.8;

    if (keyDown(RIGHT_ARROW)) {
       v.velocityX=0;
        v.velocityY=0;
      v.setAnimation("g");
      g.velocityX=-4
          
 } else 
      if(keyWentUp(RIGHT_ARROW)){
        v.velocityX=0;
        v.velocityY=0;
        v.setAnimation("d");
          g.velocityX=0;
      }
         if (keyDown(LEFT_ARROW)) {
       v.velocityX=-4;
        v.velocityY=0;
      v.setAnimation("r");
      g.velocityX=4
          
 } else 
      if(keyWentUp(LEFT_ARROW)){
        v.velocityX=0;
        v.velocityY=0;
        v.setAnimation("d");
          g.velocityX=0;
      }
    if (keyDown("s")) {
       v.velocityX=7;
        v.velocityY=0;
      v.setAnimation("sp");
          
 } else 
      if(keyWentUp("s")){
        v.velocityX=0;
        v.velocityY=0;
        v.setAnimation("d");
          
      }
       if (keyDown("a")) {
    
      v.setAnimation("k");
          
 } else 
      if(keyWentUp("a")){
        v.velocityX=0;
        v.velocityY=0;
        v.setAnimation("d");
          
      }
   
    if(keyDown("space")&& v.y >= 300) {
        v.velocityY = -5;
       v.setAnimation("s");
    
 } else 
      if(keyWentUp("space")){
      
        v.setAnimation("q");
          
      }
   
  if (v.isTouching(rightEdge)) {
    
   
    v.x=22;
  }
     
  if (v.isTouching(rightEdge)) {
    g.setAnimation("e.png");
    g.scale=1.3;
    v.x=22;
  }
  

 if (g.x===g.width/2) {
    g.x=200;
    g.y=200;
  }
  if (keyDown("q")) {
    v.setAnimation("a2")
  }else{
  if (keyWentUp("q")) {
    v.setAnimation("d")
  }
  
  }
  if (keyDown("h")) {
    v.setAnimation("a3")
    v.velocityX=3;
    g.velocityX=-4;
  } else {
    if (keyWentUp("h")) {
      v.setAnimation("d")
         v.velocityX=0;
          g.velocityX=-0;
    }
    if (w.x===1813) {
      
    }
    
  }
  
  
 
 createEdgeSprites();
   
    drawSprites();
  showScore();
   console. log(w.x)
  
}


function showScore(){
  textSize(20);
  fill("orange");
  text("Score:", 10, 25);
  text(score, 70, 25);

  
}





// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
