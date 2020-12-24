let classMap = new Map();


function getClassMap() {
    classMap.set("Transports", getTransportClassesMap());
    classMap.set("Products", getProductClasses());

    return classMap;
}

function getTransportClassesMap() {
    let class_list = ['', '', '', ''];
    let car_vars = ['model', 'year'];
    let car_methods = ['getModel()', 'setModel()', 'getYear()', 'setYear()',];
    let car_code = 'class Car {\n' +
    '    private String model;\n' +
    '    private String year;\n' +
    '\n' +
    '    public Car(String model, String year) {\n' +
    '        this.model = model;\n' +
    '        this.year = year;\n' +
    '    }\n' +
    '\n' +
    '    public String getModel() {\n' +
    '        return model;\n' +
    '    }\n' +
    '\n' +
    '    public Car setModel(String model) {\n' +
    '        this.model = model;\n' +
    '        return this;\n' +
    '    }\n' +
    '\n' +
    '    public String getYear() {\n' +
    '        return year;\n' +
    '    }\n' +
    '\n' +
    '    public Car setYear(String year) {\n' +
    '        this.year = year;\n' +
    '        return this;\n' +
    '    }\n' +
    '}';
    class_list[0] = new Clazz('Car', 'class', '', car_methods, car_vars, car_code);
    return class_list;
}



function getProductClasses() {
    return undefined;
}
