/* eslint-disable indent */
const Sequelize = require('sequelize');
require('dotenv').config();

module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    schema: process.env.DB_SCHEMA,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

/* #Banco de dados (POSTGRESQL)
#Host: n211h021567.fast.prevnet:55432
#Banco de dados : hml_sisbajud
#Esquema : sisbajud
#Usuário: sisbajud_intranet
#Senha: dataprev00
#HOMOL
spring.datasource.url=jdbc:postgresql://n211h021567.fast.prevnet:55432/hml_sisbajud
spring.datasource.username=sisbajud_intranet
spring.datasource.password=dataprev00
spring.batch.tablePrefix=sisbajud_spgbat.batch_ */
