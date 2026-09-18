function BillingCard({ name, company, email, vat }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 mb-6">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-slate-700">
          {name}
        </h2>

        <div className="flex gap-6">
          <button className="text-red-600 font-semibold">
            🗑 DELETE
          </button>

          <button className="text-slate-600 font-semibold">
            ✎ EDIT
          </button>
        </div>
      </div>

      <div className="space-y-2 text-slate-600">
        <p>
          <span className="mr-4">Company Name:</span>
          <strong>{company}</strong>
        </p>

        <p>
          <span className="mr-4">Email Address:</span>
          <strong>{email}</strong>
        </p>

        <p>
          <span className="mr-4">VAT Number:</span>
          <strong>{vat}</strong>
        </p>
      </div>

    </div>
  );
}

export default BillingCard;

