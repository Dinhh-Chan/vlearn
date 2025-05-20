"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function () { return ({
    email: {
        logger: {
            debug: console.log,
            info: console.info,
            warn: console.warn,
            error: console.error
        },
        config: {
            provider: 'sendmail',
            settings: {
                defaultFrom: 'dinhtran29092005@gmail.com',
                defaultReplyTo: 'dinhtran29092005@gmail.com',
            },
        },
    },
}); });
