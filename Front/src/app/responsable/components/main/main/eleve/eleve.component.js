"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EleveComponent = void 0;
const core_1 = require("@angular/core");
let EleveComponent = exports.EleveComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-eleve',
            templateUrl: './eleve.component.html',
            styleUrls: ['./eleve.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var EleveComponent = _classThis = class {
        constructor(breukh, toastr) {
            this.breukh = breukh;
            this.toastr = toastr;
            this.formData = new FormData();
            this.fileSelected = false;
        }
        ngOnInit() {
            this.addStudent();
        }
        addStudent() {
            this.breukh.getResources().subscribe((res) => {
                this.classes = res.classes;
                // console.log(this.classes);
            });
        }
        onFileSelected(event) {
            var _a;
            const inputElement = event.target;
            const selectedFile = (_a = inputElement.files) === null || _a === void 0 ? void 0 : _a[0];
            if (selectedFile) {
                this.formData.append('file', selectedFile);
                this.formData.append('classe_id', this.id);
                this.formData.append('annee_id', '1');
                this.fileSelected = true;
            }
        }
        save() {
            console.log(this.formData);
            if (this.fileSelected) {
                this.breukh.addEtudiant(this.formData).subscribe((res) => {
                    // console.log(res);
                    this.toastr.success(res.message);
                    this.addStudent();
                });
            }
            const modal = document.getElementById('modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        eleves(id) {
            this.eleve = [];
            console.log(id);
            this.breukh.eles(id).subscribe(res => {
                this.eleve = res;
            });
            const modal = document.getElementById('modalb');
            if (modal) {
                modal.style.display = 'block';
            }
        }
        inscrire(id) {
            // console.log(id);
            this.id = id;
            const modal = document.getElementById('modal');
            if (modal) {
                modal.style.display = 'block';
            }
        }
        closeModa() {
            const modal = document.getElementById('modalb');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        closeModal() {
            const modal = document.getElementById('modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
    };
    __setFunctionName(_classThis, "EleveComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        EleveComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EleveComponent = _classThis;
})();
