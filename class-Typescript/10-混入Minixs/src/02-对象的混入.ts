export default {};

namespace ObjectMinix {
    // 对象的混入其实就是利用 es6 中的方法：Object.assign()

    interface Name {
        name: string;
    }

    interface Age {
        age: number;
    }

    interface Favorites {
        favorites: Array<string>;
    }

    let nameObj: Name = {name: "石昊"};
    let ageObj: Age = {age: 15};
    let favoriteObj: Favorites = {favorites: ["fight", "eat"]};

    let person = Object.assign(nameObj, ageObj, favoriteObj);
    console.log(person);
}
