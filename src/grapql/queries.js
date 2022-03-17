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

export const listVehicleBookings = /* GraphQL */ `
  query ListVehicleBookings(
    $filter: ModelVehicleBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVehicleBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          userVehiclesId
        }
        vehicleId
        vehicle {
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
          updatedAt
        }
        createdAt
        type
        status
        originLatitude
        originLongitude
        destLatitude
        destLongitude
        updatedAt
      }
      nextToken
    }
  }
`;
