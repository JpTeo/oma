// components/GoogleMap.tsx
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import { GoogleMapProps } from "../../mapTypes";
const GoogleMap: React.FC<GoogleMapProps> = ({
  address,
  height = "400px",
  width = "100%",
  zoom = 15,
  className = "",
}) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/place/${encodedAddress}`;

  if (!apiKey) {
    console.error("Google Maps API key is missing");
    return <div>Mapa no disponible</div>;
  }

  return (
    <div
      className={`google-map-container ${className}`}
      style={{
        width: width,
        height: height,
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <iframe
        title={`Mapa de ${address}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=${zoom}`}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      />

      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="google-map-link"
        style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          background: "white",
          padding: "8px 12px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          color: "#333",
          fontWeight: 500,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          transition: "all 0.2s ease",
        }}
      >
        <EnvironmentOutlined style={{ color: "#4285F4" }} />
        <span>Abrir en Maps</span>
      </a>
    </div>
  );
};

export default GoogleMap;
