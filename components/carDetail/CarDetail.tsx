import { Car } from "@/lib/types";
import Image from "next/image";

interface CarDetailProps {
  car: Car;
}

const CarDetail = ({ car }: CarDetailProps) => {
  return (
    <section className="container m-auto my-10 px-4">
      <div className="bg-white">
        <div className="px-4 py-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold leading-none tracking-tight mb-4">
            Description
          </h2>
          <p className="text-gray-400">{car.description}</p>
        </div>

        <div className="px-4 py-8 grid grid-cols-1 lg:grid-cols-2">
          <div className="mb-8">
            <h2 className="text-lg font-semibold leading-none tracking-tight mb-4">
              Technical Details
            </h2>
            <table className="border-collapse border border-gray-200">
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2 min-w-56">
                    <span className="text-gray-400">Type Car</span>
                    <span className="float-right">{car.category.name}</span>
                  </td>
                  <td className="border border-gray-200 p-2 min-w-56">
                    <span className="text-gray-400">Capacity</span>
                    <span className="float-right">{car.capacity}</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2 min-w-56">
                    <span className="text-gray-400">Steering</span>
                    <span className="float-right capitalize">
                      {car.transmission.toLocaleLowerCase()}
                    </span>
                  </td>
                  <td className="border border-gray-200 p-2 min-w-56">
                    <span className="text-gray-400">Gasoline</span>
                    <span className="float-right">{car.fuelTank}L</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="text-lg font-semibold leading-none tracking-tight mb-4">
              {`More info about ${car.title}`}
            </h2>
            <a href={car.officialWebsite} target="_blank">
              <Image
                src={`/${car.brand.logo}`}
                alt={car.brand.title}
                height={0}
                width={0}
                sizes="100vw"
                className="w-full h-auto max-w-24"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetail;
