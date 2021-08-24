import Vuex from "vuex";
import skills from "./modules/skills";
import projects from "./modules/projects";
import contacts from "./modules/contacts";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      skills,
      projects,
      contacts
    }
  });
};

export default createStore;
