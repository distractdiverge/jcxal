/*jslint sloppy: true*/
/*global desc, task, jake, console*/

desc("Run require.js optimizer");
task("default", function (params) {
	var cmds = ["r.js -o build.js"];

	jake.exec(cmds, function () {

		console.log("require.js optimizer complete.");

	}, {printStdOut: true});

});

desc("Remove minified/generated files");
task("clean", function (params) {

	jake.rmRf("./jcx.compiled.js");
	jake.rmRf("./build.js");

});
