import { Loader2 } from 'lucide-react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-primary-light/50">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
    );
};

export default LoadingSpinner;
