import { useEffect } from "react";

export const Feedefy = ({ projectId }: { projectId: string }) => {
  useEffect(() => {
    if (!projectId) {
      console.error("No projectId was passed to Feedefy React, widget will not be initialized");
      return;
    }

    const existingScript = document.querySelector(`script[src*="https://app.feedefy.com"]`);

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = `https://app.feedefy.com/embed.js?id=${projectId}`;
    script.defer = true;
    script.addEventListener("error", () => script.remove());

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [projectId]);

  return null;
};
