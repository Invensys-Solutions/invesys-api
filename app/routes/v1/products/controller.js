import service from "./service.js";

const getAll = async (_req, _res) => {
  const data = await service.getAll();
  _res.send({ data, status: "success", message: "Get products success" });
};

const getById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({
    data: [data],
    status: "success",
    message: "Get products success",
  });
};

const add = async (_req, _res) => {
  const data = await service.add(_req.body);
  _res.send({
    data: [data],
    status: "success",
    message: "Create products success",
  });
};

const update = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({
    data: [data],
    status: "success",
    message: "Update products success",
  });
};

const deleteById = async (_req, _res) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({
    data: [data],
    status: "success",
    message: "Delete products success",
  });
};

export { getAll, getById, add, update, deleteById };
