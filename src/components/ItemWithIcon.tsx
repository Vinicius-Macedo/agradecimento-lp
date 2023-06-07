import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function ItemWithIcon(props: Props) {
  return (
    <div style={{display: "grid", gridTemplateColumns: "32px 1fr", gap: "8px"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#ffa500"
        height="16.9"
        preserveAspectRatio="xMidYMid meet"
        version="1"
        viewBox="6.0 7.6 20.0 16.9"
        width="20"
        zoomAndPan="magnify"
        className="w-full h-auto pt-6"
      >
        <g id="change1_1">
          <path d="M20.91871,20.79a2.6567,2.6567,0,0,1-2.66,2.65h-8.59a2.65456,2.65456,0,0,1-2.65-2.65V12.2a2.6567,2.6567,0,0,1,2.65-2.66h8.59a2.65965,2.65965,0,0,1,2.3,1.32l.72-.72a3.64725,3.64725,0,0,0-3.02-1.6h-8.59a3.6596,3.6596,0,0,0-3.65,3.66v8.59a3.65747,3.65747,0,0,0,3.65,3.65h8.59a3.6596,3.6596,0,0,0,3.66-3.65V13.74l-1,1Z" />
          <path d="M25.83875,7.71a.49519.49519,0,0,0-.71,0l-3.38,3.38c-.063.06344-7.25074,7.25042-7.63,7.63l-3.24-4.34a.49676.49676,0,0,0-.7-.11.50675.50675,0,0,0-.1.7l3.58,4.81a.507.507,0,0,0,.76.05l6.5-6.5c.67337-.6728,4.17729-4.17767,4.92-4.92A.50107.50107,0,0,0,25.83875,7.71Z" />
        </g>
      </svg>
      <div>
        <p className="semi-title font-bold text-white">{props.title}</p>
        <p className="text-semiwhite">{props.description}</p>
      </div>
    </div>
  );
}
