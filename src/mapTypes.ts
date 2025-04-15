// types/mapTypes.ts
export interface GoogleMapProps {
  address: string;
  height?: number | string;
  width?: number | string;
  zoom?: number;
  className?: string;
  mapStyle?: React.CSSProperties;
  linkStyle?: React.CSSProperties;
}
