"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Photo = {
  src: string | null;
  alt: string;
  caption: string;
  left: string;
  top: string;
  rotate: number;
  tint: string;
  hideOnMobile?: boolean;
};

// Set `src` to an image path (e.g. "/home-photos/one.jpg") to replace a placeholder.
const photos: Photo[] = [
  { src: null, alt: "Photo 1", caption: "add caption", left: "66%", top: "16%", rotate: 6, tint: "#CFE0D8" },
  { src: null, alt: "Photo 2", caption: "add caption", left: "2%", top: "66%", rotate: -7, tint: "#F2D9C4" },
  { src: null, alt: "Photo 3", caption: "add caption", left: "70%", top: "64%", rotate: 4, tint: "#E4DAEF" },
  { src: null, alt: "Photo 4", caption: "add caption", left: "22%", top: "70%", rotate: -3, tint: "#F4E7B8", hideOnMobile: true },
];

function DraggablePhoto({
  photo,
  containerRef,
  nextZ,
}: {
  photo: Photo;
  containerRef: React.RefObject<HTMLDivElement | null>;
  nextZ: () => number;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [z, setZ] = useState(1);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<{
    startX: number;
    startY: number;
    originX: number;
    originY: number;
    minDx: number;
    maxDx: number;
    minDy: number;
    maxDy: number;
  } | null>(null);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const container = containerRef.current;
    if (!container) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const el = e.currentTarget.getBoundingClientRect();
    const box = container.getBoundingClientRect();
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: offset.x,
      originY: offset.y,
      minDx: box.left - el.left,
      maxDx: box.right - el.right,
      minDy: box.top - el.top,
      maxDy: box.bottom - el.bottom,
    };
    setZ(nextZ());
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d) return;
    const dx = Math.min(d.maxDx, Math.max(d.minDx, e.clientX - d.startX));
    const dy = Math.min(d.maxDy, Math.max(d.minDy, e.clientY - d.startY));
    setOffset({ x: d.originX + dx, y: d.originY + dy });
  }

  function endDrag() {
    drag.current = null;
    setDragging(false);
  }

  return (
    <div
      className={`draggable-photo${photo.hideOnMobile ? " hide-on-mobile" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      style={{
        left: photo.left,
        top: photo.top,
        zIndex: z,
        cursor: dragging ? "grabbing" : "grab",
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${photo.rotate}deg) scale(${dragging ? 1.05 : 1})`,
        boxShadow: dragging
          ? "0 22px 32px rgba(0,0,0,0.22)"
          : "0 8px 18px rgba(0,0,0,0.16)",
      }}
    >
      <div className="draggable-photo-image" style={{ backgroundColor: photo.tint }}>
        {photo.src && (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="200px"
            draggable={false}
            className="object-cover"
          />
        )}
      </div>
      <p className="font-handwriting draggable-photo-caption">{photo.caption}</p>
    </div>
  );
}

export default function DraggablePhotos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const zCounter = useRef(10);
  const nextZ = () => ++zCounter.current;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <style>{`
        .draggable-photo {
          position: absolute;
          pointer-events: auto;
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
          background: #fff;
          padding: 10px 10px 6px;
          border-radius: 3px;
          width: 150px;
          transition: box-shadow 0.2s ease, transform 0.15s ease;
        }
        .draggable-photo-image {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }
        .draggable-photo-caption {
          font-size: 15px;
          line-height: 1.2;
          color: #2a2a2a;
          text-align: center;
          padding: 8px 2px 2px;
        }
        @media (min-width: 768px) {
          .draggable-photo { width: 124px; padding: 8px 8px 4px; }
          .draggable-photo-caption { font-size: 17px; }
        }
        @media (max-width: 767px) {
          .draggable-photo { width: 88px; padding: 6px 6px 3px; }
          .draggable-photo-caption { font-size: 12px; }
          .hide-on-mobile { display: none; }
        }
      `}</style>
      {photos.map((photo) => (
        <DraggablePhoto
          key={photo.alt}
          photo={photo}
          containerRef={containerRef}
          nextZ={nextZ}
        />
      ))}
    </div>
  );
}
