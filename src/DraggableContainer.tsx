import React, { useEffect, useRef, useState } from "react";

interface Props {
    children: React.ReactNode;
}

const DraggableContainer: React.FC<Props> = ({ children }) => {
    const [visible, setVisible] = useState(true);
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 80, y: 80 });
    const ref = useRef<HTMLDivElement>(null);
    const offset = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (!dragging) return;
            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        };
        const up = () => setDragging(false);
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        };
    }, [dragging]);

    const startDrag = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        offset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setDragging(true);
    };

    return (
        <>
            <button
                style={{
                    position: "fixed",
                    top: 20,
                    right: 20,
                    zIndex: 1000,
                    padding: "10px 16px",
                    background: visible ? "#ff4444" : "#00c853",
                    color: "white",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                }}
                onClick={() => setVisible((v) => !v)}
            >
                {visible ? "Hide Widget" : "Show Widget"}
            </button>

            {visible && (
                <div
                    ref={ref}
                    style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        zIndex: 999,
                        border: "2px solid #ff4444",
                        borderRadius: "8px",
                        overflow: "hidden",
                        width: "fit-content",
                        background: "#1e1e1e",
                        boxShadow: "0 0 12px #000",
                    }}
                >
                    <div
                        onMouseDown={startDrag}
                        style={{
                            background: "#333",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "0.5rem 1rem",
                            cursor: "grab",
                            userSelect: "none",
                            borderBottom: "2px solid #ff4444",
                        }}
                    >
                        Grab
                    </div>
                    <div style={{ pointerEvents: "auto", padding: "1rem" }}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default DraggableContainer;