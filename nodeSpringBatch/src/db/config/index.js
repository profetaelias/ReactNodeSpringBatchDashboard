/* eslint-disable indent */
const Sequelize = require('sequelize');

module.exports = new Sequelize('hml_sisbajud', 'sisbajud_intranet', 'dataprev00', {
    host: 'n211h021567.fast.prevnet',
    port: '55432',
    dialect: 'postgres',
    schema: 'sisbajud_spgbat',
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
