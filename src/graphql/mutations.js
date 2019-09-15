/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDepartment = `mutation CreateDepartment($input: CreateDepartmentInput!) {
  createDepartment(input: $input) {
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
export const updateDepartment = `mutation UpdateDepartment($input: UpdateDepartmentInput!) {
  updateDepartment(input: $input) {
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
export const deleteDepartment = `mutation DeleteDepartment($input: DeleteDepartmentInput!) {
  deleteDepartment(input: $input) {
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
export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
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
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
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
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
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
export const createEmployeeProjects = `mutation CreateEmployeeProjects($input: CreateEmployeeProjectsInput!) {
  createEmployeeProjects(input: $input) {
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
export const updateEmployeeProjects = `mutation UpdateEmployeeProjects($input: UpdateEmployeeProjectsInput!) {
  updateEmployeeProjects(input: $input) {
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
export const deleteEmployeeProjects = `mutation DeleteEmployeeProjects($input: DeleteEmployeeProjectsInput!) {
  deleteEmployeeProjects(input: $input) {
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
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
