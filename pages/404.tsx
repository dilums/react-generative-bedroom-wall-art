import SEO from "components/common/Head";

export default function NotFound() {
  return (
    <>
      <SEO title="Not Found" slug="/404" />
      <div className="max-w-7xl mx-auto p-4">404 | Not Found</div>
    </>
  );
}
