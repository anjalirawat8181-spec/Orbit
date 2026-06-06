interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export const ErrorState = ({ message, onRetry }: ErrorStateProps) => (
  <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl">
      ⚠️
    </div>
    <p className="text-gray-500 text-sm max-w-xs">{message}</p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
    >
      Try again
    </button>
  </div>
);
