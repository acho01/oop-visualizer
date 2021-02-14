let classMap = new Map();


function getClassMap() {
    classMap.set("Transports", getTransportClassesMap());
    classMap.set("Products", getProductClassesMap());

    return classMap;
}

function getTransportClassesMap() {
    let class_list = ['', '', '', ''];
    class_list[0] = getCar();
    class_list[1] = getDrivable();
    class_list[2] = getBike();
    class_list[3] = getTransport();
    return class_list;
}

function getCar() {
    let car_vars = ['model', 'year'];
    let car_methods = ['getModel()', 'setModel()', 'getYear()', 'setYear()', 'drive()'];
    let car_code = 'class Car extends Transport{\n' +
        '    private String engine;\n' +
        '    private String year;\n' +
        '\n' +
        '\tpublic String getEngine() {\n' +
        '\t\treturn engine;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Car setEngine(String engine) {\n' +
        '\t\tthis.engine = engine;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic String getYear() {\n' +
        '\t\treturn year;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Car setYear(String year) {\n' +
        '\t\tthis.year = year;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '\n' +
        '\t@Override\n' +
        '\tpublic void drive() {\n' +
        '\n' +
        '\t}\n' +
        '}';
    return new Clazz('Car', 'C', 'Transport', car_methods, car_vars, car_code);
}

function getDrivable() {
    let code = 'interface Drivable {\n' +
        '    void drive();\n' +
        '}';
    return new Clazz('Drivable', 'I', '', [], [], code);
}

function getBike() {
    let bike_vars = ['model', 'speed'];
    let bike_methods = ['getModel()', 'setModel()', 'getSpeed()', 'setSpeed()', 'drive()'];
    let bike_code = 'public class Bike extends Transport{\n' +
        '\n' +
        '\tString model;\n' +
        '\tString speed;\n' +
        '\n' +
        '\tpublic String getModel() {\n' +
        '\t\treturn model;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Bike setModel(String model) {\n' +
        '\t\tthis.model = model;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic String getSpeed() {\n' +
        '\t\treturn speed;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Bike setSpeed(String speed) {\n' +
        '\t\tthis.speed = speed;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '\n' +
        '\t@Override\n' +
        '\tpublic void drive() {\n' +
        '\n' +
        '\t}\n' +
        '}\n';
    return new Clazz('Bike', 'C', 'Transport', bike_methods, bike_vars, bike_code);
}

function getTransport() {
    let tr_vars = ['brand'];
    let tr_methods = ['getBrand()', 'setBrand()'];
    let tr_code = 'abstract class Transport implements Drivable{\n' +
        '\tString brand;\n' +
        '\n' +
        '\tpublic String getBrand() {\n' +
        '\t\treturn brand;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Transport setBrand(String brand) {\n' +
        '\t\tthis.brand = brand;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '}\n'
    return new Clazz('Transport', 'AC', 'Drivable', tr_vars, tr_methods, tr_code);
}

function getProductClasses() {
}
function getProductClassesMap() {
    let class_list = ['', '', '', ''];
    class_list[0] = getDrinkable();
    class_list[1] = getWine();
    class_list[2] = getCandy();
    class_list[3] = getProduct();
    return class_list;
}
function getDrinkable() {
    let tr_vars = [];
    let tr_methods = ['drink()'];
    let tr_code = 'public interface Drinkable {\n' +
        '\tvoid drink();\n' +
        '}\n';
    return new Clazz('Drinkable', 'I', '', tr_vars, tr_methods, tr_code);
}

function getWine() {
    let tr_vars = [];
    let tr_methods = ['drink()'];
    let tr_code = 'public class Wine extends Product implements Drinkable{\n' +
        '\t@Override\n' +
        '\tpublic void drink() {\n' +
        '\n' +
        '\t}\n' +
        '}\n';
    return new Clazz('Wine', 'C', 'Drinkable, Product', tr_vars, tr_methods, tr_code);
}

function getCandy() {
    let tr_vars = [];
    let tr_methods = ['setSweetness()', 'getSweetness()'];
    let tr_code = 'public class Candy extends Product{\n' +
        '\tString sweetness;\n' +
        '\n' +
        '\tpublic String getSweetness() {\n' +
        '\t\treturn sweetness;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Candy setSweetness(String sweetness) {\n' +
        '\t\tthis.sweetness = sweetness;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '}\n';
    return new Clazz('Candy', 'C', 'Product', tr_vars, tr_methods, tr_code);
}

function getProduct() {
    let tr_vars = [];
    let tr_methods = ['getName()', 'setName()'];
    let tr_code = 'public class Product {\n' +
        '\tString name;\n' +
        '\tString price;\n' +
        '\n' +
        '\tpublic String getName() {\n' +
        '\t\treturn name;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Product setName(String name) {\n' +
        '\t\tthis.name = name;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic String getPrice() {\n' +
        '\t\treturn price;\n' +
        '\t}\n' +
        '\n' +
        '\tpublic Product setPrice(String price) {\n' +
        '\t\tthis.price = price;\n' +
        '\t\treturn this;\n' +
        '\t}\n' +
        '}\n';
    return new Clazz('Product', 'C', '', tr_vars, tr_methods, tr_code);
}
