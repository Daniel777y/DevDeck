import { myFirebase } from "./MyFirebase.js";

const SelectedTechManager = () => {
  return {
    getAll: () => {
      return myFirebase.getAllSelectedTechs();
    },
    selectTech: ({ id, name, url, description }) => {
      myFirebase.selectTech({ id, name, url, description });
    },
    removeTech: ({ id, name, url, description }) => {
      myFirebase.removeTech({ id, name, url, description });
    },
  };
};

export const selectedTechManager = SelectedTechManager();
