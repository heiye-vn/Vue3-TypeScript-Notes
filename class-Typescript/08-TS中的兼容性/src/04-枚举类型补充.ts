export default {};

// 数字枚举
namespace a {
    enum Direction {
        Up = 1,
        Right,
        Bottom,
        Left
    }

    enum HttpsStatusCode {
        OK = 200,
        ServerError = 500,
        NotFound = 404
    }

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

    let res = {code: 200, data:true};

    formatDate(res);
}
