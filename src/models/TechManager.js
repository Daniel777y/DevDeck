import { myFirebase } from "./MyFirebase.js";

const TechManager = () => {
  return {
    getAll: () => {
      return myFirebase.getAllTechs();
    },
    addTech: ({name = "", url = "", description = "" } = {}) => {
      if (!name || !description || !url || name.length === 0 || url.length === 0 || description.length === 0) {
        alert('You did not input anything!');
        return;
      }
    },
  };
};

export const techManager = TechManager();
