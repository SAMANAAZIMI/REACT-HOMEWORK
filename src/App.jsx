import BillingCard from "./component/Home-Work/BillingCard";

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-xl font-bold text-slate-700 mb-8">
          Billing Information
        </h1>

        <BillingCard
          name="Oliver Liam"
          company="Viking Burrito"
          email="oliver@burrito.com"
          vat="FRB1235476"
        />

        <BillingCard
          name="Lucas Harper"
          company="Stone Tech Zone"
          email="lucas@stone-tech.com"
          vat="FRB1235476"
        />

        <BillingCard
          name="Ethan James"
          company="Fiber Notion"
          email="ethan@fiber.com"
          vat="FRB1235476"
        />

      </div>
    </div>
  );
}

export default App;