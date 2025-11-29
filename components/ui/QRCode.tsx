"use client";

import { QRCodeSVG } from "qrcode.react";

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export default function QRCode({ 
  value, 
  size = 160, 
  className = "" 
}: QRCodeProps) {
  return (
    <QRCodeSVG
      value={value}
      size={size}
      level="H"
      includeMargin={false}
      className={className}
    />
  );
}

