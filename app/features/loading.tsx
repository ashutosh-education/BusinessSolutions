export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-12 bg-gray-200 rounded w-1/3 mx-auto"/>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/3 h-[300px] bg-gray-200 rounded"/>
              <div className="md:w-2/3 space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"/>
                <div className="h-4 bg-gray-200 rounded"/>
                <div className="h-4 bg-gray-200 rounded w-5/6"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}