"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};
// 数字枚举
var a;
(function (a) {
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Right"] = 2] = "Right";
        Direction[Direction["Bottom"] = 3] = "Bottom";
        Direction[Direction["Left"] = 4] = "Left";
    })(Direction || (Direction = {}));
    let HttpsStatusCode;
    (function (HttpsStatusCode) {
        HttpsStatusCode[HttpsStatusCode["OK"] = 200] = "OK";
        HttpsStatusCode[HttpsStatusCode["ServerError"] = 500] = "ServerError";
        HttpsStatusCode[HttpsStatusCode["NotFound"] = 404] = "NotFound";
    })(HttpsStatusCode || (HttpsStatusCode = {}));
    function formatDate(res) {
        switch (res.data.code) {
            case HttpsStatusCode.OK:
                console.log("success!");
                break;
            case HttpsStatusCode.NotFound:
                console.log("not found source files!");
                break;
            case HttpsStatusCode.ServerError:
                console.log("server error!");
                break;
        }
    }
    let res = { code: 200, data: true };
    formatDate(res);
})(a || (a = {}));
