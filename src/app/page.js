export default async function Home() {
  const date = new Date().toLocaleDateString();
  return (
    <>
      <h1>Check{date}</h1>
    </>
  );
}
