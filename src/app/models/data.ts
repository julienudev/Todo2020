// export interface Data {
//   utilisateur: string;
//   password: string;
//   todoListes: string[];

// }

export interface Data {
  utilisateur: string;
  password: string;
  todoListes: {
    List: List[];
  };
}

export interface List {
  //id: number;
  name: string;
  TodoItem: string[];
}

export interface TodoItem {
  task: string;
}
