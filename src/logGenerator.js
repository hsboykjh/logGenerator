var config = require("./config.js");
var timer = require("./timer.js");
var logGen = require("./logGen.js");
var fileWriter = require("./fileWriter.js");

console.log("===================================================");
console.log("Log Generator USAGE");
console.log("> node logGenerator.js config.json");
console.log("(config file name is Mandatory)");
console.log("===================================================");


//create configuration (parameter config-file name (ex: SDPLog.conf, WebOSLog.conf)) 
var Config = new config(process.argv[2]);

//create LogGen
var LogGen = new logGen(Config.getLogFormat(), Config.getLogExp());

//create FileWriter
var FileWriter = new fileWriter();

//create Timer with TimeInterval and CallBack-function to write LogMessages to file.
var Timer = new timer(Config.getLogInterval(),
		function(){
			FileWriter.writeLogMessage( Config.getLogType() , Config.getLogPath() , LogGen.getLogMessage());
		});
//run Timer
Timer.startTimer();

