const AgendaRepository = require("../repository/AgendaRepository");

class AgendaService {
  static async listAll() {
    return await AgendaRepository.getAll();
  }

  static async getOne(id) {
    return await AgendaRepository.getById(id);
  }

  static async create(data) {
    return await AgendaRepository.save(data);
  }

  static async update(id, data) {
    const agenda = await AgendaRepository.getById(id);
    if (!agenda) return null;
    Object.assign(agenda, data);
    return await AgendaRepository.save(agenda);
  }

  static async delete(id) {
    return await AgendaRepository.remove(id);
  }
}

module.exports = AgendaService;
