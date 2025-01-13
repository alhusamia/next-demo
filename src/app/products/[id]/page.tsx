export default async function Product({params}:{params:{id:string}}) {
    const {id} =  params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="mt-6 text-3xl font-bold">Product {id}</h1>
        <p className="mt-4 text-lg">This is the Product page.</p>
      </div>
    </main>
  );
}
