export default function LoadingProducts() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="animate-pulse">
        <div className="h-8 w-48 bg-gray-200 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-200 h-64 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
