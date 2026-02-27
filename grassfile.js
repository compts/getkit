const list_package_utility_js = [
    "src/*.js",
    "src/*/*.js",
    "src/*/*/*.js",
    "src/*/*/*/*.js"
];
const list_iife_js = ["src/main.js"];



exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");
    const rename = grassconf.require("gulp-rename");

    const packpier = grassconf.require("packpier");

    grassconf.load("esm", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js
                },
                "output": {
                    "type": "esm" // ,esm,cjs,iife,
                },
                "plugin": []
            }
        )
            .pipe(grassconf.dest("dist/esm", {
                "lsFileType": "path"
            }))
            .pipe(grassconf.dest("dist/esm", {
                "lsFileType": "path"
            }));

    });

    grassconf.load("esm_rewrite", function () {

        return grassconf.src([
            "dist/esm/src/lib/ws/platformNodeAdapters.js_copy"
        ])
        .pipe(rename({"extname": ".js"}))
            .pipe(grassconf.dest("dist/esm/src/lib/ws"));

    });

    grassconf.load("web_iife", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "modules": {
                        "replaces": {
                            "structkit": "_stk",
                            "url-assist": "urs"
                        }
                    },
                    "path": list_iife_js
                },
                "output": {
                    "globalName": "gtk",
                    "type": "iife"
                },
                "plugin": []
            }
        )

            //
            .pipe(grass_concat("dist/web/getkit-full.js", {
                "istruncate": true
            }))
            .pipe(grass_concat("test/packager/public/getkit-full.js", {
                "istruncate": true
            }))
            .pipe(grassconf.streamPipe(function (data) {

                let getData = data.readData();

                getData = getData.replace("(function(global){\nglobal.gtk={};", "const _stk = require('structkit');\nconst urs = require('url-assist');\nconst gtk = exports;");
                getData = getData.replace('})(typeof window !== "undefined" ? window : this);', "\n //end of file");
                data.writeData(getData);
                data.done();

            }))
            .pipe(grass_concat("dist/cjs/getkit-full.cjs.js", {
                "istruncate": true
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm.series("web_iife");
        strm.series("esm");
        strm.series("esm_rewrite");

    };

    return lib;

};

