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
exports.ProfesseurComponent = void 0;
const core_1 = require("@angular/core");
const flowbite_1 = require("flowbite");
let ProfesseurComponent = exports.ProfesseurComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-professeur',
            templateUrl: './professeur.component.html',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProfesseurComponent = _classThis = class {
        constructor(toastr, router, breukh) {
            this.toastr = toastr;
            this.router = router;
            this.breukh = breukh;
            this.name = '';
            this.role = '';
            this.img = '';
            this.id = 0;
            this.cours = [];
            this.count = 0;
            this.times = 0;
            this.display = true;
            this.num = 0;
            const userTo = localStorage.getItem('user');
            if (userTo) {
                const user = JSON.parse(userTo);
                this.id = user.id;
                this.name = user.name;
                this.img = 'http://localhost:8000/storage/' + user.photo;
                if (user.role == 'prof') {
                    this.role = 'professeur';
                }
            }
        }
        ngOnInit() {
            (0, flowbite_1.initFlowbite)();
            localStorage.removeItem('cour');
            this.breukh.courProf(this.id).subscribe((res) => {
                this.cours = res.data;
                this.count = res.data.length;
                // console.log(this.cours);
                this.cours.forEach(element => {
                    this.times += element.time_restant;
                });
            });
        }
        convertirEnHeures(secondes) {
            const heures = Math.floor(secondes / 3600);
            const minutes = Math.floor((secondes % 3600) / 60);
            if (minutes == 0) {
                return `${heures}h`;
            }
            return `${heures}h ${minutes}min`;
        }
        deconnecter() {
            this.toastr.success('See you soon!');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
        }
        sessions(cour) {
            this.display = false;
            // console.log(cour);
            this.module = cour.module_id.libelle;
            this.heures = this.convertirEnHeures(cour.time_restant);
            this.num = cour.session.length;
            localStorage.setItem('cour', JSON.stringify(cour));
        }
        allCours() {
            this.display = true;
            localStorage.removeItem('cour');
        }
    };
    __setFunctionName(_classThis, "ProfesseurComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ProfesseurComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfesseurComponent = _classThis;
})();
