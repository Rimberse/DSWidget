define("HelloModule/Toto", function(d) {
	var toto = {
        hello: "Test Module",
        textHello: "Bonjour",
        fctHello: function(name) {
            return "Hello, " + name;
        }
    };
	return toto;
});