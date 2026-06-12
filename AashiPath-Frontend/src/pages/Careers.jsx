import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const Careers = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Careers"
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Coming Soon</h2>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
