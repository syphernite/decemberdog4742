import React from "react"

export default function MapEmbed({ address }: { address: string }) {
  const q = encodeURIComponent(address)
  const src = `https://www.google.com/maps?q=${q}&output=embed`
  return <iframe title="Map" src={src} className="w-full h-[360px] border-0" loading="lazy" />
}
