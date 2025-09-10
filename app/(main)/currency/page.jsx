import CurrencyConverter from "./_components/currency-convertor";

function currency() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold tracking-tight gradient-title">
          Currency Converter
        </h1>
      </div>
      <div className="container">
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default currency;
