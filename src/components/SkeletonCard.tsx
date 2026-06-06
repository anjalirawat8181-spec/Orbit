export const SkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-3 animate-pulse">
    <div className="flex gap-2">
      <div className="h-5 w-16 bg-gray-100 rounded-full" />
      <div className="h-5 w-20 bg-gray-100 rounded-full" />
    </div>
    <div className="h-5 bg-gray-100 rounded w-3/4" />
    <div className="space-y-2">
      <div className="h-3 bg-gray-100 rounded w-full" />
      <div className="h-3 bg-gray-100 rounded w-5/6" />
    </div>
    <div className="flex justify-between items-center pt-1">
      <div className="h-3 w-16 bg-gray-100 rounded" />
      <div className="flex gap-1">
        <div className="h-5 w-14 bg-gray-100 rounded-full" />
        <div className="h-5 w-14 bg-gray-100 rounded-full" />
      </div>
    </div>
  </div>
);
