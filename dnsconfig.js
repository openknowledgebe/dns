// Providers:

var REG_NONE = NewRegistrar("none"); // No registrar.
var DSP_DIGITALOCEAN = NewDnsProvider("digitalocean");
var DSP_TRANSIP = NewDnsProvider("transip");

// Domains:

require("./domains/openknowledge.js");

require("./domains/openbelgium.js");

require("./domains/bikedataproject.js");
require("./domains/irail.js");
require("./domains/openrecognition.js");

require("./domains/miscellaneous.js");

// For EqualStreetNames DNS, go to https://github.com/EqualStreetNames/dns
// For OpenStreetMap Belgium DNS, go to https://github.com/osmbe/dns
// For Open Summer of Code DNS, go to https://github.com/opensummerofcode/dns
