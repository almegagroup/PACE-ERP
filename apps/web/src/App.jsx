import React from "react";
import useAppConfig from "./config/useAppConfig";

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-pace-bg text-slate-100 flex items-center justify-center">
      <div className="text-sm text-slate-300">
        Booting PACE ERP – Loading runtime config…
      </div>
    </div>
  );
}

function ErrorScreen({ error, onRetry }) {
  return (
    <div className="min-h-screen bg-pace-bg text-red-400 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 rounded-card border border-red-800 bg-black/60 shadow-lg p-6 text-center space-y-3">
        <h1 className="text-lg font-semibold">Config Load Failed</h1>
        <p className="text-sm opacity-80">
          The app could not load its runtime configuration.
        </p>
        <pre className="text-xs bg-black/60 p-3 rounded overflow-auto text-left">
          {error?.message}
        </pre>
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 rounded bg-pace-primary text-white text-sm font-medium"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

function App() {
  const { config, status, error, reload } = useAppConfig();

  if (status === "loading" || !config) {
    return <LoadingScreen />;
  }

  if (status === "error") {
    return <ErrorScreen error={error} onRetry={reload} />;
  }

  const { appName, env, version } = config;

  return (
    <div className="min-h-screen bg-pace-bg text-slate-100 flex items-center justify-center">
      <div className="max-w-xl w-full mx-4 rounded-card border border-slate-800 bg-pace-card/90 shadow-lg shadow-black/40 p-6">
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {appName || "PACE ERP – Control Core Shell"}
        </h1>
        <p className="text-xs text-slate-500 mb-3">
          env: {env} · v{version}
        </p>
        <p className="text-sm text-slate-400">
          Fresh monorepo, secure auth, and dynamic ACL engine will live here.
        </p>
      </div>
    </div>
  );
}

export default App;
