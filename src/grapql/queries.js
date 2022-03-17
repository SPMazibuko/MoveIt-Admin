export const getVehicle = /* GraphQL */ `
  query GetVehicle($id: ID!) {
    getVehicle(id: $id) {
      id
    }
  }
`;
