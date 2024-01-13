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
exports.CoursComponent = void 0;
const core_1 = require("@angular/core");
let CoursComponent = exports.CoursComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-cours',
            templateUrl: './cours.component.html',
            styleUrls: ['./cours.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var CoursComponent = _classThis = class {
        constructor(breukh, fb, toastr) {
            var _a, _b;
            this.breukh = breukh;
            this.fb = fb;
            this.toastr = toastr;
            this.photo = "assets/luffy.jpg";
            this.modules = [];
            this.profs = [];
            this.name = "";
            this.specialite = "";
            this.prof_id = 0;
            this.coursForm = this.fb.group({
                semestre: ['un'],
                filiere: ['deux'],
                module: ['hop'],
                timing: [''],
            });
            this.coursForm.valueChanges.subscribe(res => {
                const cours = JSON.stringify(res);
                localStorage.setItem('cours', cours);
            });
            (_a = this.coursForm.get('filiere')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(res => {
                // console.log(res);
                this.breukh.getModule(res).subscribe((res) => {
                    this.modules = res;
                    // console.log(this.modules);
                });
            });
            (_b = this.coursForm.get('module')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(res => {
                // console.log(res);
                this.breukh.getProf(res).subscribe((res) => {
                    // console.log(res);
                    this.profs = res;
                });
            });
        }
        ngOnInit() {
            this.getData();
            this.recupMod();
            const c = localStorage.getItem('cours');
            if (c) {
                const co = JSON.parse(c);
                // console.log(co);
                this.coursForm.patchValue({
                    semestre: co.semestre,
                    filiere: co.filiere,
                    module: co.module,
                    timing: co.timing
                });
            }
        }
        getData() {
            this.breukh.getFiliere().subscribe(data => {
                this.filieres = data;
                // console.log(this.filieres);
            });
        }
        recupFil() {
            var _a;
            const fil_id = (_a = this.coursForm.get('filiere')) === null || _a === void 0 ? void 0 : _a.value;
            this.breukh.getModule(fil_id).subscribe((res) => {
                this.modules = res;
                // console.log(this.modules);
            });
        }
        recupMod() {
            var _a;
            const mod_id = (_a = this.coursForm.get('module')) === null || _a === void 0 ? void 0 : _a.value;
            // console.log(mod_id);
            this.breukh.getProf(mod_id).subscribe((res) => {
                // console.log(res);
                this.profs = res;
            });
        }
        toggleButtonState(prof) {
            if (prof.isAdding) {
                prof.isAdding = false;
            }
            else {
                const profEnCours = this.profs.find(p => p.isAdding);
                if (!profEnCours) {
                    prof.isAdding = true;
                    this.prof_id = prof.id;
                }
            }
            // console.log(prof);
        }
        addCours() {
            const data = this.coursForm.value;
            data.prof = this.prof_id;
            // console.log(data);
            this.breukh.addCour(data).subscribe((res) => {
                // console.log(res);
                this.toastr.success(res.message);
            });
            localStorage.removeItem('cours');
            // this.coursForm.reset();
        }
    };
    __setFunctionName(_classThis, "CoursComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        CoursComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CoursComponent = _classThis;
})();
