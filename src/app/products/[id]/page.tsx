import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) =>
    setTimeout(() => resolve(`Product ${id}`), 1000)
  );
  return {
    title: `Product ${title}`,
  };
};

function getRandomInteger(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Product({ params }: Props) {
  const { id } = await params;
  const random = getRandomInteger(2);

  if (random === 1) {
    throw new Error("Something went wrong");
  }
  if (parseInt(id) > 10) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="mt-6 text-3xl font-bold">Product {id}</h1>
        <p className="mt-4 text-lg">This is the Product page.</p>
      </div>
    </main>
  );
}
