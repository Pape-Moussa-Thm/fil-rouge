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
exports.ListeSessionComponent = void 0;
const core_1 = require("@angular/core");
const salle_pipe_1 = require("src/app/responsable/_helpers/pipes/sessions/salle.pipe");
const classe_pipe_1 = require("src/app/responsable/_helpers/pipes/sessions/classe.pipe");
const duree_pipe_1 = require("src/app/responsable/_helpers/pipes/sessions/duree.pipe");
const date_pipe_1 = require("src/app/responsable/_helpers/pipes/sessions/date.pipe");
let ListeSessionComponent = exports.ListeSessionComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-liste-session',
            templateUrl: './liste-session.component.html',
            styleUrls: ['./liste-session.component.css'],
            providers: [salle_pipe_1.SallePipe, classe_pipe_1.ClassePipe, duree_pipe_1.DureePipe, date_pipe_1.DatePipe]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ListeSessionComponent = _classThis = class {
        ngOnInit() {
            this.session();
            this.salles();
        }
        constructor(breukh, toastr) {
            this.breukh = breukh;
            this.toastr = toastr;
            this.sessions = [];
            this.module = '';
            this.prof = '';
            this.selectedSalle = '';
            this.selectedClasse = '';
            this.selectedDuree = '';
            this.selectedDate = '';
            this.idClasses = [];
        }
        session() {
            const ses = localStorage.getItem('idSession');
            if (ses) {
                const session = JSON.parse(ses);
                // console.log(session);
                this.breukh.sessCour(session).subscribe((res) => {
                    this.sessions = res.data;
                    // console.log(this.sessions);
                });
            }
        }
        convertirEnHeures(secondes) {
            const heures = Math.floor(secondes / 3600);
            const minutes = Math.floor((secondes % 3600) / 60);
            if (minutes == 0) {
                return `${heures}h`;
            }
            return `${heures}h ${minutes}min`;
        }
        separer(chaine) {
            const elements = chaine.split(" ");
            return elements[0];
        }
        salles() {
            this.breukh.getResources().subscribe((res) => {
                this.salle = res.salles;
                // console.log(this.salles);
            });
            this.breukh.getResources().subscribe((res) => {
                this.classes = res.classes;
                //console.log(this.classes);
            });
        }
        deleteSession(session) {
            // console.log(session.id);
            this.breukh.delete(session.id).subscribe((res) => {
                // console.log(res.message);
                this.toastr.success('la session est annulée !!');
                this.session();
            });
        }
        viewEleve(session) {
            const modal = document.getElementById('modal');
            if (modal) {
                modal.style.display = 'block';
            }
            //console.log(session.classes);
            session.classes.forEach((element) => {
                this.idClasses.push(element.id);
            });
            // console.log(this.idClasses);
            this.breukh.eleves(this.idClasses).subscribe((res) => {
                // console.log(res);
                this.eleves = res;
            });
            this.idClasses = [];
        }
        closeModal() {
            const modal = document.getElementById('modal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
    };
    __setFunctionName(_classThis, "ListeSessionComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ListeSessionComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ListeSessionComponent = _classThis;
})();
