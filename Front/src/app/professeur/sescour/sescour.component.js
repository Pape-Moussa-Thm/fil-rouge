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
exports.SescourComponent = void 0;
const core_1 = require("@angular/core");
const angular_calendar_1 = require("angular-calendar");
const date_fns_1 = require("date-fns");
const fp_1 = require("date-fns/fp");
let SescourComponent = exports.SescourComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'app-sescour',
            templateUrl: './sescour.component.html',
            styleUrls: ['./sescour.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var SescourComponent = _classThis = class {
        constructor(breukh, toastr) {
            this.breukh = breukh;
            this.toastr = toastr;
            this.calendarEvents = [];
            this.motif = '';
            this.viewDate = new Date();
            this.view = angular_calendar_1.CalendarView.Week;
            this.wich = 'week';
            this.activeDayIsOpen = false;
        }
        ngOnInit() {
            const cour = localStorage.getItem('cour');
            if (cour) {
                const id = JSON.parse(cour);
                // console.log(id);
                this.breukh.sessCour(id.id).subscribe((res) => {
                    this.sessions = res.data;
                    // console.log(this.sessions);
                    this.calendarEvents = this.formatSessionsForCalendar(this.sessions);
                    console.log(this.sessions);
                });
            }
        }
        setView(view) {
            this.wich = view;
        }
        dayClicked({ date }) {
            // console.log('deux');
            if ((0, date_fns_1.isSameMonth)(date, this.viewDate)) {
                if ((0, fp_1.isSameDay)(this.viewDate, date) && this.activeDayIsOpen) {
                    this.activeDayIsOpen = false;
                }
                else {
                    this.activeDayIsOpen = true;
                }
                this.viewDate = date;
            }
        }
        formatSessionsForCalendar(sessions) {
            return sessions.map(session => {
                var _a;
                const startTime = new Date(session.date_session);
                const endTime = new Date(session.date_session);
                startTime.setSeconds(session.started_at);
                endTime.setSeconds(session.finished_at);
                return {
                    id: session.id,
                    title: `${session.module}`,
                    start: startTime,
                    end: endTime,
                    extendedProps: {
                        salle: ((_a = session.salle) === null || _a === void 0 ? void 0 : _a.nom) || 'En ligne',
                        etat: session.etat
                    }
                };
            });
        }
        convertToTime(time) {
            const hours = Math.floor(parseInt(time) / 3600);
            const minutes = Math.floor((parseInt(time) % 3600) / 60);
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
        eventClicked(event) {
            // console.log('un');
            const modal = document.getElementById('sessionModal');
            if (modal) {
                modal.style.display = 'block';
            }
            //console.log(event.event);
            const id = event.event.id;
            // console.log(this.sessions);
            this.sessionDetails = this.sessions.find((session) => session.id == id);
            // console.log(this.sessionDetails);
        }
        closeModal() {
            const modal = document.getElementById('sessionModal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        annuler(session) {
            // console.log(session);
            this.idSession = session.id;
            const modal = document.getElementById('annulationModal');
            if (modal) {
                modal.style.display = 'block';
            }
        }
        close() {
            const modal = document.getElementById('annulationModal');
            if (modal) {
                modal.style.display = 'none';
            }
        }
        annulerSession() {
            this.close();
            // console.log(this.idSession, this.motif);
            this.breukh.canceled(this.idSession, this.motif).subscribe((res) => {
                // console.log(res.message);
                this.toastr.success(res.message);
            });
        }
    };
    __setFunctionName(_classThis, "SescourComponent");
    (() => {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        SescourComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SescourComponent = _classThis;
})();
