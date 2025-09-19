import React from "react"

export default function Footer() {
  return (
    <footer className="border-t border-base-border">
      <div className="container-pad py-8 text-sm text-base-muted">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>© {new Date().getFullYear()} TimeOut Tavern • Veteran owned • Family friendly</div>
          <div className="opacity-80">Site by <a className="underline" href="https://built4you.org" target="_blank" rel="noreferrer">Built4You</a></div>
        </div>
      </div>
    </footer>
  )
}
