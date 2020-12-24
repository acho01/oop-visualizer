class Clazz {

    constructor(name, type, parent, method_list, var_list,content ) {
        this._name = name;
        this._type = type;
        this._method_list = method_list;
        this._var_list = var_list;
        this._content = content;
    }


    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get method_list() {
        return this._method_list;
    }

    get var_list() {
        return this._var_list;
    }

    get content() {
        return this._content;
    }
}