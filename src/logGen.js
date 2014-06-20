var strftime = require('strftime');

function logGen(logFormatList , logExpList){
	this.logFormatList = logFormatList;
	this.logExpList = logExpList;
}

logGen.prototype.setLogFormatList = function(logFormatList){
	this.logFormatList = logFormatList;
};

logGen.prototype.getLogFormatList = function(){
	return this.logFormatList;
};

logGen.prototype.getLogFormat = function(logFormatList){
	//console.log("log Length : " + logFormatList.length);
	return logFormatList[this.getRandomIndex(logFormatList.length)]+'\n';
};

logGen.prototype.getLogExpList = function(){
	return this.logExpList;
};

logGen.prototype.getTimeStamp = function(){
	return new Date().getTime();
};

logGen.prototype.getRegExp = function(regExp){
	return new RegExp(regExp);
};

logGen.prototype.getTime = function(timePattern){
	//console.log(timePattern);
	//console.log(strftime(timePattern));
	return strftime(timePattern);
};

//make final Log Message to write Local File System
logGen.prototype.getLogMessage = function(){
	//generate Log Message (param : sample Log List, regular token List)
	return this.generateMessage(this.getLogFormatList(), this.getLogExpList());
};

//Generate Final Log Message
logGen.prototype.generateMessage = function(logFormatList , logExpList){
	
	//choose (random) a sample message from a sample Log List.
	var finalLogMessage = this.getLogFormat(logFormatList);

	//replace sample-Log-time to currentTime (use all regular expression written in config file)
	for(var count = 0 ; count < logExpList.length ; count++){
		
		if(logExpList[count].replacementType === 'timestamp' ){
			finalLogMessage = finalLogMessage.replace(this.getRegExp(logExpList[count].token), this.getTime(logExpList[count].replacement));
		}
	}
	
	//console.log("final logMessage : " + finalLogMessage);	
	return finalLogMessage;
};

logGen.prototype.getRandomIndex = function(maxIndex){
	return (Math.random() *100000000 ).toFixed(0) % maxIndex;
};

module.exports = logGen;


