"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUserGuard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("src/app/services/auth/auth.service");
const authUserGuard = (route, state) => {
    const router = (0, core_1.inject)(router_1.Router);
    const service = (0, core_1.inject)(auth_service_1.AuthService);
    const user = localStorage.getItem('user');
    if (user) {
        const use = JSON.parse(user);
        if (use.role == 'prof') {
            return true;
        }
        return false;
    }
    else {
        return false;
    }
};
exports.authUserGuard = authUserGuard;
