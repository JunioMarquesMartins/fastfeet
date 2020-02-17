import Recipient from '../models/Recipient';

class RecipientsController {
  async store(req, res) {
    const {
      id,
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}

export default new RecipientsController();
