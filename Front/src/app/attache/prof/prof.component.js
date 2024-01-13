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
exports.ProfComponent = void 0;
const core_1 = require("@angular/core");
const salle_pipe_1 = require("../pipes/salle.pipe");
const classe_pipe_1 = require("../pipes/classe.pipe");
const date_pipe_1 = require("../pipes/date.pipe");
let ProfComponent = exports.ProfComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-prof',
            templateUrl: './prof.component.html',
            styleUrls: ['./prof.component.css'],
            providers: [salle_pipe_1.SallePipe, classe_pipe_1.ClassePipe, date_pipe_1.DatePipe]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ProfComponent = _classThis = class {
        constructor(breukh) {
            this.breukh = breukh;
            this.selectedSalle = '';
            this.selectedClasse = '';
            this.selectedModule = '';
            this.selectedDate = '';
            this.display = 'prof';
            this.profName = '';
            this.allSessions = [];
            this.jems = false;
        }
        ngOnInit() {
            this.breukh.getProfs().subscribe((res) => {
                this.profs = res;
                // console.log(this.profs);
            });
            this.breukh.getResources().subscribe((res) => {
                this.salle = res.salles;
                // console.log(this.salles);
            });
            this.breukh.getResources().subscribe((res) => {
                this.classes = res.classes;
                //console.log(this.classes);
            });
            this.breukh.mod().subscribe((res) => {
                this.modules = res;
            });
        }
        coursProf(prof) {
            this.display = 'cours';
            this.profName = prof.name;
            this.idProf = prof.id;
            this.cours = prof.cour;
            // console.log(this.cours);
            this.cours.forEach((element) => {
                // console.log(element.session);
                if (element.session.length > 0) {
                    element.session.forEach((elt) => {
                        this.allSessions.push(elt);
                    });
                }
            });
            // console.log(this.allSessions);
        }
        separer(chaine) {
            const elements = chaine.split(" ");
            return elements[0];
        }
        convertirEnHeures(secondes) {
            const heures = Math.floor(secondes / 3600);
            const minutes = Math.floor((secondes % 3600) / 60);
            if (minutes == 0) {
                return `${heures}h`;
            }
            return `${heures}h ${minutes}min`;
        }
        recup() {
            // console.log(this.selectedModule, this.idProf);
            if (this.selectedModule != 'un') {
                this.breukh.time(this.selectedModule, this.idProf).subscribe((res) => {
                    // console.log(res);
                    if (res != null) {
                        this.jems = true;
                        this.time = res.time;
                        this.time_restant = res.time_restant;
                    }
                    else {
                        this.jems = false;
                    }
                });
            }
            else {
                this.jems = false;
            }
        }
        allProfs() {
            this.display = 'prof';
            this.allSessions = [];
        }
    };
    __setFunctionName(_classThis, "ProfComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ProfComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProfComponent = _classThis;
})();
