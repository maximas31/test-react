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

    // // @ts-ignore
    // if (window.feedefyInjected) {
    //   return;
    // }
    // // @ts-ignore
    // window.feedefyInjected = true;

    const script = document.createElement("script");

    script.src = `https://app.feedefy.com/embed.js?id=${projectId}`;
    script.defer = true;
    script.addEventListener("error", () => script.remove());

    document.head.appendChild(script);

    return () => {
      // const button = document.querySelector(".feedefy-floating-button");
      // const widget = document.querySelector("iframe");
      // console.log(widget);
      // const widget2 = widget.querySelector(".feedefy-widget");
      // console.log(widget2);
      // if (widget) {
      //   widget.remove();
      // }
      // if (button) {
      //   button.remove();
      // }
      // script.remove();
    };
  }, [projectId]);

  return null;
};
