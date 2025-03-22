const AppDataSource = require("../config/database");
const Agenda = require("../entity/Agenda");

// Verificar que la conexión esté inicializada antes de acceder al repositorio
const getRepository = () => {
    if (!AppDataSource.isInitialized) {
        throw new Error("❌ AgendaRepository.js - La base de datos no está conectada");
    }
    return AppDataSource.getRepository(Agenda);
};

const getAll = async () => {
    return await getRepository().find();
};

const getById = async (id) => {
    return await getRepository().findOneBy({ id });
};

const save = async (data) => {
    const newAgenda = getRepository().create(data);
    return await getRepository().save(newAgenda);
};

const update = async (id, data) => {
    await getRepository().update(id, data);
    return getById(id);
};

const remove = async (id) => {
    return await getRepository().delete(id);
};

module.exports = { getAll, getById, save, update, remove };
