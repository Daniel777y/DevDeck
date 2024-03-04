import { myFirebase } from "./MyFirebase.js";

const SelectedTechManager = () => {
  return {
    getAll: () => {
      return myFirebase.getAllSelectedTechs();
    },
    selectedTech: ({ id, name, url, description }) => {
      myFirebase.addSelectedTech({ id, name, url, description });
    },
    removeTech: ({ id, name, url, description }) => {
      myFirebase.deleteSelectedTech({ id, name, url, description });
    },
  };
};

export const selectedTechManager = SelectedTechManager();
