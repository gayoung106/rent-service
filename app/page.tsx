import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  console.log(allCars);

  // "use client"일 경우
  // const [allCars, setAllCars] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const [munufacturer, setManufacturer] = useState("");
  // const [model, setModel] = useState("");

  // const [fuel, setFuel] = useState("");
  // const [year, setYear] = useState(2022);

  // const [limit, setLimit] = useState(10);

  // const getCars = async () => {
  //   try {
  //     const result = await fetchCars({
  //       munufacturer: munufacturer || "",
  //       model: model || "",
  //       year: year || 2022,
  //       fuel: fuel || "",
  //       limit: limit || 10,
  //     });
  //     setAllCars(result);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     console.log(false);
  //   }
  // };

  // useEffect(() => {
  //   getCars();
  // }, [fuel, year, limit, munufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Search a Car</h1>
          <p>원하는 자동차를 선택하세요</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-gray-700 text-xl font-bold">
              이런, 해당 브랜드의 상품은 존재하지 않습니다(브랜드와 모델명을
              정확하게 입력해주세요).
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
