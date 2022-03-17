export const getVehicleId = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
    }
  }
`;

export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
      RegistrationNumber
      VINNumber
      Manufacture
      Model
      Year
      type
      createdAt
      isActive
      userId
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
