import { myFirebase } from "./MyFirebase.js";

const TechManager = () => {
  return {
    getAllTechs: () => {
      return myFirebase.getAllTechs();
    },
    addTech: ({name = "", url = "", description = "" } = {}) => {
      if (!name || !description || !url || name.length === 0 || url.length === 0 || description.length === 0) {
        alert('You did not input anything!');
        return;
      }
    },
    createTech: ({ name, url, description, tags }) => {
    },
  };
};

export const techManager = TechManager();
