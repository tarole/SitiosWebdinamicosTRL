const AgendaService = require("../service/AgendaService");

class AgendaController {
  static async list(req, res) {
    const agendas = await AgendaService.listAll();
    res.render("index", { agendas });
  }

  static async createForm(req, res) {
    res.render("create");
  }

  static async create(req, res) {
    await AgendaService.create(req.body);
    res.redirect("/");
  }

  static async editForm(req, res) {
    const agenda = await AgendaService.getOne(req.params.id);
    res.render("edit", { agenda});
  }

  static async update(req, res) {
    await AgendaService.update(req.params.id, req.body);
    res.redirect("/");
  }

  static async delete(req, res) {
    await AgendaService.delete(req.params.id);
    res.redirect("/");
  }
}

module.exports = AgendaController;
