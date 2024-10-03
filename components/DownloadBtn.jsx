import React from "react";

export default function DownloadBtn() {
  return (
    <div className="py-8">
      <a
        className="py-3 px-6 bg-slate-900 rounded-md text-slate-50 "
        href="/notes.pptx"
        download
      >
        Download the presentation
      </a>
    </div>
  );
}
