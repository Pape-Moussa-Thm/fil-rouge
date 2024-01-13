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
exports.ResponsableModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@fullcalendar/angular");
const router_1 = require("@angular/router");
const responsable_component_1 = require("./responsable.component");
const responsable_routing_module_1 = require("./responsable-routing.module");
const main_component_1 = require("./components/main/main/main.component");
const cours_component_1 = require("./components/main/main/cours/cours.component");
const session_component_1 = require("./components/main/main/session/session.component");
const home_component_1 = require("./components/main/main/home/home.component");
const eleve_component_1 = require("./components/main/main/eleve/eleve.component");
const liste_session_component_1 = require("./components/main/main/home/liste-session/liste-session.component");
const module_pipe_1 = require("./_helpers/pipes/module.pipe");
const professeur_pipe_1 = require("./_helpers/pipes/professeur.pipe");
const etat_cour_pipe_1 = require("./_helpers/pipes/etat-cour.pipe");
const salle_pipe_1 = require("./_helpers/pipes/sessions/salle.pipe");
const classe_pipe_1 = require("./_helpers/pipes/sessions/classe.pipe");
const duree_pipe_1 = require("./_helpers/pipes/sessions/duree.pipe");
const date_pipe_1 = require("./_helpers/pipes/sessions/date.pipe");
const ngx_toastr_1 = require("ngx-toastr");
let ResponsableModule = exports.ResponsableModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                responsable_component_1.ResponsableComponent,
                eleve_component_1.EleveComponent,
                main_component_1.MainComponent,
                cours_component_1.CoursComponent,
                session_component_1.SessionComponent,
                home_component_1.HomeComponent,
                liste_session_component_1.ListeSessionComponent,
                module_pipe_1.ModulePipe,
                professeur_pipe_1.ProfesseurPipe,
                etat_cour_pipe_1.EtatCourPipe,
                salle_pipe_1.SallePipe,
                classe_pipe_1.ClassePipe,
                duree_pipe_1.DureePipe,
                date_pipe_1.DatePipe
            ],
            imports: [
                common_1.CommonModule,
                responsable_routing_module_1.ResponsableRoutingModule,
                router_1.RouterModule.forChild([]),
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                angular_1.FullCalendarModule,
                ngx_toastr_1.ToastrModule
            ]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ResponsableModule = _classThis = class {
    };
    __setFunctionName(_classThis, "ResponsableModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        ResponsableModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ResponsableModule = _classThis;
})();
