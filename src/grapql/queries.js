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
      latitude
      longitude
      heading
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
          userVehicleId
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
          latitude
          longitude
          heading
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

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      province
      town
      houseNumber
      streetNumber
      suburb
      zipCode
      price
      type
      description
      isActive
      userId
      user {
        id
        username
        email
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const listRoomBookings = /* GraphQL */ `
  query ListRoomBookings(
    $filter: ModelRoomBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          userVehicleId
          userRoomId
        }
        roomId
        room {
          id
          province
          town
          houseNumber
          streetNumber
          suburb
          zipCode
          price
          type
          description
          isActive
          userId
          createdAt
          updatedAt
        }
        createdAt
        type
        status
        updatedAt
      }
      nextToken
    }
  }
`;
