export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "7b443611f6mshc12d2530ee7df96p1aceb7jsn9fe6bf1d683b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 70000; // 하루에 빌리는 기본료
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  // 백의 자리에서 내림하고 항상 XX,000 형식으로 출력
  const formattedRatePerDay = Math.floor(rentalRatePerDay / 100) * 100;

  return formattedRatePerDay.toLocaleString("en-US");
};
