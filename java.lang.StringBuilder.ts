import * as Java from "java";

const _className = "java.lang.StringBuilder";
const _class = Java.import(_className);

export namespace java {
    export namespace lang {
        export class StringBuilder {
            _obj = null;

            constructor(...args) {
                this._obj = new _class(...args);
            }

            public append(str: String): StringBuilder {
                return Java.callMethodSync(this._obj, "append", str)
            }

            public toString(): String {
                return Java.callMethodSync(this._obj, "toString");
            }
        }
    }
}
