export default {};

namespace ClassMinix {
    class MinixA {
        type: boolean = false;

        changeType() {
            this.type = !this.type;
        }
    }

    class MinixB {
        name: string = "张三";

        getName(): string {
            return this.name;
        }
    }

    class MinixC implements MinixA, MinixB {
        type: boolean;
        changeType: () => void;
        name: string;
        getName: () => string;
    }

    function MinixFunc(curCls: any, itemCls: Array<any>) {
        itemCls.forEach(item => {
            console.log(item);
            Object.getOwnPropertyNames(item).forEach(name => {
                console.log(name, "---name");
                curCls.prototype[name] = item.prototype[name];
            });
        });
    }

    MinixFunc(MinixC, [MinixA, MinixB]);

    let testMinix = new MinixC();

    console.log(testMinix);

    testMinix.changeType();
}
