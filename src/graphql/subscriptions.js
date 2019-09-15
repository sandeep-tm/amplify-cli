/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDepartment = `subscription OnCreateDepartment {
  onCreateDepartment {
    id
    name
    manager {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        age
      }
      nextToken
    }
  }
}
`;
export const onUpdateDepartment = `subscription OnUpdateDepartment {
  onUpdateDepartment {
    id
    name
    manager {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        age
      }
      nextToken
    }
  }
}
`;
export const onDeleteDepartment = `subscription OnDeleteDepartment {
  onDeleteDepartment {
    id
    name
    manager {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    employees {
      items {
        id
        name
        age
      }
      nextToken
    }
  }
}
`;
export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
    id
    name
    age
    department {
      id
      name
      manager {
        id
        name
        age
      }
      employees {
        nextToken
      }
    }
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
    id
    name
    age
    department {
      id
      name
      manager {
        id
        name
        age
      }
      employees {
        nextToken
      }
    }
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
    id
    name
    age
    department {
      id
      name
      manager {
        id
        name
        age
      }
      employees {
        nextToken
      }
    }
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateEmployeeProjects = `subscription OnCreateEmployeeProjects {
  onCreateEmployeeProjects {
    id
    employee {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    project {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onUpdateEmployeeProjects = `subscription OnUpdateEmployeeProjects {
  onUpdateEmployeeProjects {
    id
    employee {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    project {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onDeleteEmployeeProjects = `subscription OnDeleteEmployeeProjects {
  onDeleteEmployeeProjects {
    id
    employee {
      id
      name
      age
      department {
        id
        name
      }
      projects {
        nextToken
      }
    }
    project {
      id
      name
      employees {
        nextToken
      }
    }
  }
}
`;
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    employees {
      items {
        id
      }
      nextToken
    }
  }
}
`;
