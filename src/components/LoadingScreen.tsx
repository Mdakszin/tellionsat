import { Skeleton } from "@/components/ui/skeleton";

export const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
                </div>
                <div className="space-y-2 text-center">
                    <h2 className="text-xl font-bold text-primary animate-pulse">Little Sprouts Daycare</h2>
                    <div className="flex gap-1 justify-center">
                        <Skeleton className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                        <Skeleton className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                        <Skeleton className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                    </div>
                </div>
            </div>
        </div>
    );
};
