import { myFirebase } from "./MyFirebase.js";

const TechManager = () => {
  return {
    getAll: async () => {
      const techs = await myFirebase.getAllTechs();
      return techs;
    },
    addTech: async (tech) => {
      await myFirebase.addTech(tech);
    },
    updateTech: async (tech) => {
      await myFirebase.updateTech(tech);
    },
  };
};

export const techManager = TechManager();
