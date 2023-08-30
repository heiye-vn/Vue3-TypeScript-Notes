import {MessageBox} from "element-ui";
/*
*   装饰器：确认弹窗
* */

export const confirmBox = (msg: string = "确认删除吗?") => {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = async (...rest: any[])=> {
            await MessageBox.confirm(msg || "确认删除吗？");
            return await fn.apply(this, rest)
        };
    };
};
