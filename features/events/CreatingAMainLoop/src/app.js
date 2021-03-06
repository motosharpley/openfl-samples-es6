"use strict";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";
import Event from "openfl/events/Event";
import Lib from "openfl/Lib";


class App extends Sprite {
	
	
	constructor () {
		
		super ();
		
		this.sprite = new Sprite ();
		this.sprite.graphics.beginFill (0x24AFC4);
		this.sprite.graphics.drawRect (0, 0, 100, 100);
		this.sprite.y = 50;
		this.addChild (this.sprite);
		
		this.speed = 0.3;
		this.cacheTime = Lib.getTimer ();
		
		this.addEventListener (Event.ENTER_FRAME, this.this_onEnterFrame);
		
	}
	
	
	update (deltaTime) {
		
		if (this.sprite.x + this.sprite.width >= stage.stageWidth || this.sprite.x < 0) {
			
			this.speed *= -1;
			
		}
		
		this.sprite.x += this.speed * deltaTime;
		
	}
	
	
	
	
	// Event Handlers
	
	
	
	
	this_onEnterFrame = (event) => {
		
		var currentTime = Lib.getTimer ();
		this.update (currentTime - this.cacheTime);
		this.cacheTime = currentTime;
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);