import SEO from "components/common/Head";
import dynamic from "next/dynamic";

const Generator = dynamic(() => import("components/Generator"), { ssr: false });

export default function Home() {
  return (
    <>
      <SEO title="React Bedroom wall art generator" slug="/" />
      <Generator />
    </>
  );
}
