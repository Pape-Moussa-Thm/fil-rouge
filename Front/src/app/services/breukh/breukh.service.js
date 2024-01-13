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
exports.BreukhService = void 0;
const core_1 = require("@angular/core");
let BreukhService = exports.BreukhService = (() => {
    let _classDecorators = [(0, core_1.Injectable)({
            providedIn: 'root'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var BreukhService = _classThis = class {
        constructor(breukh) {
            this.breukh = breukh;
        }
        getFiliere() {
            return this.breukh.get("http://127.0.0.1:8000/api/filiere");
        }
        getModule(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/filiere/${id}/module`);
        }
        getProf(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/module/${id}/prof`);
        }
        addCour(data) {
            return this.breukh.post("http://127.0.0.1:8000/api/cour", data);
        }
        allModule(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/module/${id}`);
        }
        existingCours(sm, modId, profId) {
            return this.breukh.get(`http://127.0.0.1:8000/api/sm/${sm}/module/${modId}/prof/${profId}`);
        }
        profSession(sm, id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/sm/${sm}/module/${id}/prof`);
        }
        getResources() {
            return this.breukh.get("http://127.0.0.1:8000/api/cour");
        }
        filMod(fil, mod) {
            return this.breukh.get(`http://127.0.0.1:8000/api/fil/${fil}/mod/${mod}`);
        }
        addSes(data) {
            return this.breukh.post("http://127.0.0.1:8000/api/session", data);
        }
        sessCour(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/cours/${id}/sessions`);
        }
        addEtudiant(data) {
            return this.breukh.post("http://127.0.0.1:8000/api/import", data);
        }
        courProf(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/prof/${id}/cours`);
        }
        canceled(id, motif) {
            return this.breukh.post("http://127.0.0.1:8000/api/canceledSes", { id, motif });
        }
        getNotif() {
            return this.breukh.get("http://127.0.0.1:8000/api/notif");
        }
        response(id, res) {
            return this.breukh.post("http://127.0.0.1:8000/api/responseDemande", { id, res });
        }
        getProfs() {
            return this.breukh.get("http://127.0.0.1:8000/api/profs");
        }
        mod() {
            return this.breukh.get("http://127.0.0.1:8000/api/module");
        }
        time(module, prof) {
            return this.breukh.get(`http://127.0.0.1:8000/api/mod/${module}/prof/${prof}`);
        }
        delete(session) {
            return this.breukh.delete(`http://127.0.0.1:8000/api/session/${session}`);
        }
        eleves(classes) {
            return this.breukh.post("http://127.0.0.1:8000/api/eleves", { classes });
        }
        toValidate() {
            return this.breukh.get("http://127.0.0.1:8000/api/toValidate");
        }
        valider(id) {
            return this.breukh.post("http://127.0.0.1:8000/api/valider", { id });
        }
        invalider(id) {
            return this.breukh.post("http://127.0.0.1:8000/api/invalider", { id });
        }
        eles(id) {
            return this.breukh.get(`http://127.0.0.1:8000/api/classe/${id}/eleves`);
        }
    };
    __setFunctionName(_classThis, "BreukhService");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        BreukhService = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BreukhService = _classThis;
})();
