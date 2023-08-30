import {Loading} from "element-ui";
/*
*   装饰器：加载效果
* */

export const loading = (text: string = "加载中") => {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            const loading = Loading.service({
                text
            });
            try {
                return await fn.apply(this, args);
            } finally {
                loading.close();
            }
        };
    };
};
