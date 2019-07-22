class StringBuilder {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }

    append(string) {
         return this._value += string; 
    }

    prepend(string) {
        return this._value = string + this._value;
    }

    pad(string) {
        return this._value = string + this._value + string;
    }
}

const builder = new StringBuilder('.');
console.log(builder);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='