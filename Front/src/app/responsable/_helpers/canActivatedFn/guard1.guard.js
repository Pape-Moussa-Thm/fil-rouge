"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guard1Guard = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("src/app/services/auth/auth.service");
const guard1Guard = (route, state) => {
    const router = (0, core_1.inject)(router_1.Router);
    const service = (0, core_1.inject)(auth_service_1.AuthService);
    const token = service.getAccessToken();
    if (token) {
        router.navigateByUrl('/responsable');
        return false;
    }
    else {
        return true;
    }
};
exports.guard1Guard = guard1Guard;
