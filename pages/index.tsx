import SEO from "components/common/Head";

export default function Home() {
  return (
    <>
      <SEO title="Home" slug="/" />
      <div className="max-w-7xl mx-auto p-4">This is Home page</div>
    </>
  );
}
