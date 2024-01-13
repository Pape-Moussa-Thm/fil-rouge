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
exports.AttacheModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const attache_component_1 = require("./attache.component");
const attache_routing_module_1 = require("./attache-routing.module");
const router_1 = require("@angular/router");
const prof_component_1 = require("./prof/prof.component");
const salle_pipe_1 = require("./pipes/salle.pipe");
const classe_pipe_1 = require("./pipes/classe.pipe");
const date_pipe_1 = require("./pipes/date.pipe");
const module_pipe_1 = require("./pipes/module.pipe");
const month_pipe_1 = require("./pipes/month.pipe");
const ngx_toastr_1 = require("ngx-toastr");
const sesdone_component_1 = require("./prof/sesdone/sesdone.component");
let AttacheModule = exports.AttacheModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                attache_component_1.AttacheComponent,
                prof_component_1.ProfComponent,
                salle_pipe_1.SallePipe,
                classe_pipe_1.ClassePipe,
                date_pipe_1.DatePipe,
                module_pipe_1.ModulePipe,
                month_pipe_1.MonthPipe,
                sesdone_component_1.SesdoneComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_toastr_1.ToastrModule,
                attache_routing_module_1.AttacheRoutingModule,
                router_1.RouterModule.forChild([])
            ]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AttacheModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AttacheModule");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        AttacheModule = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AttacheModule = _classThis;
})();
