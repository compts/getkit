const list_package_utility_js = [
    "src/*.js",
    "src/*/*.js",
    "src/*/*/*.js",
    "src/*/*/*/*.js"
];
const list_iife_js = ["src/module/main.js"];


exports.module=function (grassconf) {

    const grass_concat = grassconf.require("grass_concat");

    const packpier = grassconf.require("packpier");

    grassconf.load("esm", function () {

        return packpier(
            grassconf.event(),
            {
                "input": {
                    "path": list_package_utility_js
                },
                "output": {
                    "type": "esm" //,esm,cjs,iife,
                },
                "plugin": []
            }
        )
            .pipe(grassconf.dest("dist/esm", {
                "lsFileType": "path"
            }));

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
            }));

    });

};

exports.execute=function (lib) {

    lib.default=function (strm) {

        strm.series("web_iife");
        strm.series("esm");

    };

    return lib;

};

