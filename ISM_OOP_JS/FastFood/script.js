class Hamburger {

    // Контсанты
    static SIZE_SMALL = {
        category: 'size',
        name: 'small',
        price: 50,
        calories: 20,
    };
    static SIZE_BIG = {
        category: 'size',
        name: 'big',
        price: 100,
        calories: 40,
    };
    static STUFFING_CHEESE = {
        category: 'stuffing',
        name: 'cheese',
        price: 10,
        calories: 20,
    };
    static STUFFING_SALAD = {
        category: 'stuffing',
        name: 'salad',
        price: 20,
        calories: 5,
    };
    static STUFFING_POTATO = {
        category: 'stuffing',
        name: 'potato',
        price: 15,
        calories: 10,
    };
    static TOPPING_MAYO = {
      category: 'topping',
      name: 'mayo',
      price: 20,
      calories: 5,
    };
    static TOPPING_SAUCE = {
        category: 'topping',
        name: 'sauce',
        price: 15,
        calories: 0,
    };

    constructor (size, stuffing) {
        // Валидация переданых параметров
        if(!size)
            throw new Error('no size given!!!');

        if(!stuffing)
            throw new Error('no stuffing given!!!');

        if(size.category != 'size')
            throw new Error(`invalid size '${size.category.toUpperCase()}_${size.name.toUpperCase()}'`);

        if(stuffing.category != 'stuffing')
            throw new Error(`invalid stuffing '${stuffing.category.toUpperCase()}_${stuffing.name.toUpperCase()}'`);

        this.size = size;
        this.stuffing = stuffing;
        this.toppings = {};
    }

    // Метод добавление приправы
    addTopping(topping) {
        if(!topping)
            throw new Error('no given topping');

        if(topping.category != 'topping')
            throw new Error(`invalid topping '${topping.category.toUpperCase()}_${topping.name.toUpperCase()}'`);

        if(this.toppings.hasOwnProperty(topping.name))
            throw new Error(`dublicate topping ${topping.category.toUpperCase()}_${topping.name.toUpperCase()}`);

        this.toppings[topping.name] = topping;
    }

    // Метод подсчитывания цены за Гамбургер
    calculatePrice() {
        let price = 0;
        price += this.size.price + this.stuffing.price;
        // Если есть добавки приклюсуем к суме
        if (this.toppings) {
            for(let key in this.toppings) {
                price += this.toppings[key].price;
            }
        }
        return price;
    }


    // Метод подсчитывания калорийности
    countCalories() {
        let calories = 0;
        calories += this.size.calories + this.stuffing.calories;
        // Если есть добавки приклюсуем к калориям
        if (this.toppings) {
            for(let key in this.toppings) {
                calories += this.toppings[key].calories;
            }
        }
        return calories;
    }
}
try {

    let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);

    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
    hamburger.addTopping(Hamburger.TOPPING_MAYO);
    console.log("Price: %f tugriks", hamburger.calculatePrice());
    console.log("Calories: %f", hamburger.countCalories());

    let ham = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);

    ham.addTopping(Hamburger.TOPPING_SAUCE);
    ham.addTopping(Hamburger.TOPPING_SAUCE);
    ham.addTopping(Hamburger.TOPPING_MAYO);
    console.log("Price: %f tugriks", ham.calculatePrice());
    console.log("Calories: %f", ham.countCalories());

}catch (e) {
    console.log(e);
}
