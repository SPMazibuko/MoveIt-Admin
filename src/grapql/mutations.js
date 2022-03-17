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
      userId
    }
  }
`;
