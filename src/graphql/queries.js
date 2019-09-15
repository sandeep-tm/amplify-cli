/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDepartment = `query GetDepartment($id: ID!) {
  getDepartment(id: $id) {
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
export const listDepartments = `query ListDepartments(
  $filter: ModelDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
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
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      employees {
        nextToken
      }
    }
    nextToken
  }
}
`;
