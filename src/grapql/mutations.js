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
