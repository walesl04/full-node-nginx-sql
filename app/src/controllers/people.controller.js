import { listPeople, insertPeople } from '../models/index.js';
import { headerView, indexView } from '../templates/index.js';

export const getPeople = async (req, res) => {
  let template = headerView();
  
  try {
    await insertPeople('John doe');
    const data = await listPeople();
    template = template.concat(indexView(data))
  } catch (exception) {
    console.error(exception);
  }
  return res.send(template)
};
