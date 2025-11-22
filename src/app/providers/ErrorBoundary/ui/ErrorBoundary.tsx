import React, { ReactNode, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBarrier extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render(): ReactNode {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback={<Loader />}><PageError /></Suspense>;
        }

        return children;
    }
}

export default ErrorBarrier;
