import Card from "@/components/ui/Card";

import { Car } from "@/lib/types";

interface CardWrapperProps {
  title?: string;
  items: Car[];
}

const CardWrapper = ({ title, items }: CardWrapperProps) => {
  return (
    <div className="mb-8">
      {title && (
        <h2 className="text-gray-400 leading-none tracking-tight mb-4">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {items?.length > 0 ? (
          items.map((car) => <Card key={car.id} car={car} />)
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
};

export default CardWrapper;
