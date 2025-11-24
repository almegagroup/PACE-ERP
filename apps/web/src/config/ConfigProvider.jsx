// [ID-9] Runtime Config Loader – ConfigProvider

import React, { useEffect, useState } from "react";
import ConfigContext from "./ConfigContext";

export default function ConfigProvider({ children }) {
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  // --- Initial load ---
  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        setStatus("loading");

        const res = await fetch("/api/app-config");
        if (!res.ok) throw new Error(`Config load failed: ${res.status}`);

        const json = await res.json();
        if (!mounted) return;
        
        setConfig(json);
        setStatus("ready");
      } catch (err) {
        console.error("[Config] Load failed", err);
        if (!mounted) return;

        setError(err);
        setStatus("error");
      }
    }

    load();

    return () => { mounted = false; };
  }, []);

  // --- Reload ---
  async function reload() {
    try {
      setStatus("loading");

      const res = await fetch("/api/app-config");
      if (!res.ok) throw new Error(`Config reload failed: ${res.status}`);

      const json = await res.json();

      setConfig(json);
      setStatus("ready");
    } catch (err) {
      console.error("[Config] Reload failed", err);
      setError(err);
      setStatus("error");
    }
  }

  const value = { config, status, error, reload };

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  );
}
