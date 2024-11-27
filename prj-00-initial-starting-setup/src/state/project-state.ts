namespace App {
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class ProjectState extends State<Project> {
    // private listeners: Listener[] = [];
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }

      this.instance = new ProjectState();
      return this.instance;
    }

    // addListener(listenerFn: Listener) {
    //   this.listeners.push(listenerFn);
    // }

    addProject(title: string, description: string, numOfPeople: number) {
      // const newProject = {
      //   id: Math.random().toString(),
      //   title: title,
      //   description: description,
      //   people: numOfPeople,
      // };

      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );

      this.projects.push(newProject);
      // for (const listenerFn of this.listeners) {
      //   listenerFn(this.projects.slice());
      // }
      this.updateListeners();
    }

    moveProject(projectid: String, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectid);

      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }

  export const projectState = ProjectState.getInstance();
}
