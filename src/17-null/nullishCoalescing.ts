function printMileage(mileage: number | null | undefined) {
  console.log(`Mileage: ${mileage ?? "Not Available"}`);
}

printMileage(null);
printMileage(0);
