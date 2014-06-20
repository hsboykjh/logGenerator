function timer(interval, callbackFunction){
	
	this.interval = interval;
	this.callbackFunction = callbackFunction;
}

timer.prototype.getInterval = function() {
	return this.interval;
};

timer.prototype.getCallbackFunction = function() {
	return this.callbackFunction;
};

timer.prototype.startTimer = function() {
	setInterval( this.getCallbackFunction(), this.getInterval());
};

module.exports = timer;


