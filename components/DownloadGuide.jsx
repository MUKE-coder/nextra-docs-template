import React from "react";

export default function DownloadGuide() {
  return (
    <div className="py-8">
      <a
        className="py-3 px-6 bg-slate-900 rounded-md text-slate-50 "
        href="/expo_router_guide.pdf"
        download
      >
        Download Expo Guide
      </a>
    </div>
  );
}
