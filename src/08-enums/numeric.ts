// Default
enum CardinalDirection {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirection.North;
console.log(currentDirection);
currentDirection = "North";

// Initialized
enum CardinalDirection2 {
  North = 1,
  East,
  South,
  West,
}
console.log(CardinalDirection2.North);
console.log(CardinalDirection2.West);

// Fully Initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
