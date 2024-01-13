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
exports.HomeComponent = void 0;
const core_1 = require("@angular/core");
const professeur_pipe_1 = require("src/app/responsable/_helpers/pipes/professeur.pipe");
const etat_cour_pipe_1 = require("src/app/responsable/_helpers/pipes/etat-cour.pipe");
let HomeComponent = exports.HomeComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css'],
            providers: [professeur_pipe_1.ProfesseurPipe, etat_cour_pipe_1.EtatCourPipe]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HomeComponent = _classThis = class {
        constructor(breukh) {
            this.breukh = breukh;
            this.cours = [];
            this.display = true;
            this.module = '';
            this.prof = '';
            this.selectedEtat = 'deux';
            const mod = localStorage.getItem('module');
            if (mod) {
                this.module = JSON.parse(mod);
            }
            const pro = localStorage.getItem('prof');
            if (pro) {
                this.prof = JSON.parse(pro);
            }
        }
        ngOnInit() {
            this.getModule();
        }
        getModule() {
            this.breukh.getResources().subscribe((res) => {
                this.cours = res.cours;
                // console.log(this.cours);
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
        allCours() {
            this.display = true;
        }
        sessionByCour(cour) {
            // console.log(id);
            localStorage.setItem('idSession', JSON.stringify(cour.id));
            this.prof = cour.prof_id.name;
            this.module = cour.module_id.libelle;
            localStorage.setItem('prof', JSON.stringify(this.prof));
            localStorage.setItem('module', JSON.stringify(this.module));
            this.display = false;
        }
    };
    __setFunctionName(_classThis, "HomeComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        HomeComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HomeComponent = _classThis;
})();
