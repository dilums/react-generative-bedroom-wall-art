import SEO from "components/common/Head";

export default function ServerError() {
  return (
    <>
      <SEO title="Server Error" slug="/500" />
      <div className="max-w-7xl mx-auto p-4">500 | Server Error</div>
    </>
  );
}
