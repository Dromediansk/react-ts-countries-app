export const getAllCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const responseCountries = await response.json();
    return responseCountries;
  } catch (err) {
    console.log(err);
  }
};
