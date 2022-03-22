export const createVehicle = /* GraphQL */ `
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
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
    }
  }
`;

export const updateVehicle = /* GraphQL */ `
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
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
    }
  }
`;

export const updateVehicleBooking = /* GraphQL */ `
  mutation UpdateVehicleBooking(
    $input: UpdateVehicleBookingInput!
    $condition: ModelVehicleBookingConditionInput
  ) {
    updateVehicleBooking(input: $input, condition: $condition) {
      id
      createdAt
      type
      status
      originLatitude
      originLongitude
      destLatitude
      destLongitude
      userId
      vehicleId
      updatedAt
      user {
        id
        username
      }
    }
  }
`;

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
  }
`;

export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
  }
`;
