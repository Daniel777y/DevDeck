import { myFirebase } from "./MyFirebase.js";

const SelectedTechManager = () => {
  return {
    getAll: async () => {
      const selectedTechs = await myFirebase.getAllSelectedTechs();
      return selectedTechs;
    },
    selectTech: async (tech) => {
      await myFirebase.selectTech(tech);
    },
    removeTech: async (tech) => {
      await myFirebase.removeTech(tech);
    },
    clearTechs: async (selectedTechs) => {
      await selectedTechs.forEach(async (tech) => {
        await myFirebase.removeTech(tech);
      });
    },
  };
};

export const selectedTechManager = SelectedTechManager();
