import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      let errorMessage = "حدث خطأ غير متوقع في التطبيق.";
      let errorDetails = "";

      try {
        // Check if it's a Firestore error JSON
        if (this.state.error?.message.startsWith('{')) {
          const firestoreError = JSON.parse(this.state.error.message);
          errorMessage = "خطأ في الاتصال بقاعدة البيانات (Firestore).";
          errorDetails = `العملية: ${firestoreError.operationType} | المسار: ${firestoreError.path}`;
        } else {
          errorDetails = this.state.error?.message || "";
        }
      } catch (e) {
        errorDetails = this.state.error?.message || "";
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-right dir-rtl">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-20 h-20 bg-rose-50 dark:bg-rose-900/20 rounded-3xl flex items-center justify-center text-rose-600 dark:text-rose-400 mx-auto mb-6">
              <AlertCircle size={40} />
            </div>
            
            <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2">عذراً، حدث خطأ ما</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
              {errorMessage}
            </p>

            {errorDetails && (
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl mb-8 text-[10px] font-mono text-slate-400 break-all">
                {errorDetails}
              </div>
            )}

            <div className="space-y-3">
              <button 
                onClick={this.handleReset}
                className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 dark:shadow-none hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} />
                تحديث الصفحة
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-2xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Home size={18} />
                العودة للرئيسية
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
