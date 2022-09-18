"use strict";
exports.__esModule = true;
require("dotenv/config");
var getStrOrFail = function (envName) {
    var val = process.env[envName];
    if (!val) {
        throw new Error("Env variable with name ".concat(envName, " does not exists"));
    }
    return val;
};
exports["default"] = {
    type: 'postgres',
    host: getStrOrFail('POSTGRES_HOST'),
    port: Number(getStrOrFail('POSTGRES_PORT')),
    username: getStrOrFail('POSTGRES_USER'),
    password: getStrOrFail('POSTGRES_PASSWORD'),
    database: getStrOrFail('POSTGRES_DB'),
    synchronize: false,
    logging: false,
    entities: ['./src/**/*.entity.ts'],
    migrations: ['./src/db/migrations/**/*.ts']
};
