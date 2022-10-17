import trelloApi from '../apiTrello/api';

const trelloController = {
    getAll: async (_req: any, res: any) => {
        const rows = await trelloApi();
        res.status(200).json(rows);
    },

};

export default trelloController;