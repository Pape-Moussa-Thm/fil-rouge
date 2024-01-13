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
exports.SessionComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
let SessionComponent = exports.SessionComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-session',
            templateUrl: './session.component.html',
            styleUrls: ['./session.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SessionComponent = _classThis = class {
        constructor(breukh, fb, toastr) {
            var _a, _b;
            this.breukh = breukh;
            this.fb = fb;
            this.toastr = toastr;
            this.mod_id = 0;
            this.prof_id = 0;
            this.sm_id = 0;
            this.rightClasses = [];
            this.classe = false;
            this.effectif = 0;
            this.isSalle = false;
            this.sessionForm = this.fb.group({
                semestre: ['humm'],
                module: ['hum'],
                prof: ['hop'],
                date: ['', [this.validateDate.bind(this)]],
                start: ['', [this.validateStartTime.bind(this)]],
                end: ['', [this.validateEndTime.bind(this)]]
            });
            // this.sessionForm.valueChanges.subscribe(res=>{
            //   this.recupCours()
            // })
            this.sessionForm.valueChanges.subscribe(res => {
                const session = JSON.stringify(res);
                localStorage.setItem('session', session);
            });
            (_a = this.sessionForm.get('semestre')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe(res => {
                if (!isNaN(res)) {
                    this.breukh.allModule(res).subscribe((res) => {
                        this.modules = res;
                    });
                }
                else {
                    this.modules = [];
                }
            });
            (_b = this.sessionForm.get('module')) === null || _b === void 0 ? void 0 : _b.valueChanges.subscribe(res => {
                var _a;
                const sm_id = (_a = this.sessionForm.get('semestre')) === null || _a === void 0 ? void 0 : _a.value;
                this.breukh.profSession(sm_id, res).subscribe((res) => {
                    this.profs = res;
                });
            });
        }
        ngOnInit() {
            this.minDate = (0, common_1.formatDate)(new Date(), 'yyyy-MM-dd', 'en-US');
            this.recupSm();
            // this.recupCours()
            // this.sessionForm.get('date')?.setValidators(this.validateDate.bind(this));
            // this.sessionForm.get('date')?.updateValueAndValidity();
            const s = localStorage.getItem('session');
            if (s) {
                const so = JSON.parse(s);
                // console.log(co);
                this.sessionForm.patchValue({
                    semestre: so.semestre,
                    module: so.module,
                    prof: so.prof,
                    date: so.date,
                    start: so.start,
                    end: so.end
                });
            }
        }
        validateDate(control) {
            const selectedDate = new Date(control.value);
            const dayOfWeek = selectedDate.getDay();
            if (dayOfWeek === 6 || dayOfWeek === 0) { // 6 pour samedi, 0 pour dimanche
                return { weekend: true };
            }
            return null;
        }
        validateStartTime(control) {
            const startTime = control.value;
            if (startTime) {
                const hours = parseInt(startTime.split(':')[0], 10);
                if (hours < 8 || hours >= 16) {
                    return { invalidStartTime: true };
                }
            }
            return null;
        }
        validateEndTime(control) {
            const startTime = control.value;
            if (startTime) {
                const hours = parseInt(startTime.split(':')[0], 10);
                if (hours < 9 || hours >= 17) {
                    return { invalidEndTime: true };
                }
            }
            return null;
        }
        recupMod() {
            var _a, _b;
            const mod_id = (_a = this.sessionForm.get('module')) === null || _a === void 0 ? void 0 : _a.value;
            const sm_id = (_b = this.sessionForm.get('semestre')) === null || _b === void 0 ? void 0 : _b.value;
            // console.log(mod_id);
            this.breukh.profSession(sm_id, mod_id).subscribe((res) => {
                // console.log(res);
                this.profs = res;
            });
        }
        recupSm() {
            var _a;
            const sm = (_a = this.sessionForm.get('semestre')) === null || _a === void 0 ? void 0 : _a.value;
            // console.log(sm);
            if (!isNaN(sm)) {
                this.breukh.allModule(sm).subscribe((res) => {
                    this.modules = res;
                });
            }
            else {
                this.modules = [];
            }
        }
        recupCours() {
            var _a, _b, _c;
            this.sm_id = (_a = this.sessionForm.get('semestre')) === null || _a === void 0 ? void 0 : _a.value;
            this.mod_id = (_b = this.sessionForm.get('module')) === null || _b === void 0 ? void 0 : _b.value;
            this.prof_id = (_c = this.sessionForm.get('prof')) === null || _c === void 0 ? void 0 : _c.value;
            if (!isNaN(this.prof_id)) {
                // console.log(this.mod_id, this.prof_id);
                this.breukh.existingCours(this.sm_id, this.mod_id, this.prof_id).subscribe(res => {
                    this.coursChoisi = res;
                    // console.log(this.coursChoisi);
                    if (res) {
                        this.breukh.getResources().subscribe((res) => {
                            // console.log(res.classes);
                            this.classes = res.classes;
                            this.classes.forEach((element) => {
                                // console.log(element.filiere.id);
                                const fil_id = element.filiere.id;
                                if (!isNaN(fil_id) && !isNaN(this.mod_id)) {
                                    this.breukh.filMod(fil_id, this.mod_id).subscribe(res => {
                                        // console.log(res);
                                        if (res) {
                                            this.classe = true;
                                            // console.log(element);
                                            this.rightClasses.push(element);
                                        }
                                    });
                                }
                            });
                            // console.log(this.rightClasses);
                        });
                    }
                });
            }
            else {
            }
        }
        getSelectedClasses(selectedClass) {
            selectedClass.isSelected = !selectedClass.isSelected;
            this.effectif = 0;
            const selectedClasses = this.rightClasses.filter(selectedClass => {
                return selectedClass.isSelected;
            });
            const selectedIds = selectedClasses.map(selectedClass => {
                return { 'id': selectedClass.id, 'effectif': selectedClass.effectif };
            });
            selectedIds.forEach(element => {
                this.effectif += +element.effectif;
            });
            this.breukh.getResources().subscribe((res) => {
                this.salles = res.salles;
                this.newSalles = this.salles.filter((element) => element.places >= this.effectif);
                if (this.newSalles.length == 0) {
                    this.isSalle = true;
                }
                else {
                    this.isSalle = false;
                }
            });
        }
        // getSelectedSalles(selectedSalle: any) {
        //   this.newSalles.forEach((salle:any) => {
        //     return salle.isSelected = (salle === selectedSalle)? true : false;
        //   });
        // }
        selectSalle(salle) {
            this.selectedSalle = salle;
        }
        addSession() {
            // console.log(this.selectedSalle);
            const hey = this.rightClasses.filter((salle) => salle.isSelected);
            this.trueClasse = hey.map((salle) => salle.id);
            const data = this.sessionForm.value;
            data.classes = this.trueClasse;
            if (this.selectedSalle) {
                data.salle = this.selectedSalle.id;
            }
            this.breukh.addSes(data).subscribe((res) => {
                console.log(res);
                this.toastr.success(res.message);
            });
            localStorage.removeItem('session');
            // this.sessionForm.reset()
        }
    };
    __setFunctionName(_classThis, "SessionComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        SessionComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SessionComponent = _classThis;
})();
