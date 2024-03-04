import { myFirebase } from "./MyFirebase.js";

const TechManager = () => {
  return {
    getAll: async () => {
      const techs = await myFirebase.getAllTechs();
      return techs;
    },
    addTech: async ({ id, name, url, description }) => {
      await myFirebase.addTech({ id, name, url, description });
    },
  };
};

export const techManager = TechManager();
