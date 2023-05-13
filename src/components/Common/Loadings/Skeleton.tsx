import React, { FC } from "react";

export interface SkeletonProps {
  width?: number;
  height?: number;
  isCol?: boolean;
  isLoading?: boolean;
  type?: string;
}
const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  isCol,
  isLoading,
  type = "shimmer",
}) => {
  return (
    <>
      {isLoading ? (
        <li className="flex items-center my-3 p-5 border-[0.2px solid #e5e7eb] rounded-sm relative">
          <div>
            <div
              className="w-20 h-20 rounded-lg bg-[#e1e9ee] relative overflow-hidden 
            before:absolute before:top-0 before:left-0 before:w-24 before:h-full 
            before:bg-shimmerGradient before:animate-shimmer
            "
            />
          </div>
          <div className="w-full flex flex-col items-start ml-5">
            {new Array(4).fill(1).map((_, i) => {
              return <div key={i}>내용{i}</div>;
            })}
          </div>
        </li>
      ) : (
        <li className="flex items-center my-3 p-5 border-[0.2px solid #e5e7eb] rounded-sm relative">
          <div>
            <div
              className="w-20 h-20 rounded-lg bg-[#e1e9ee] relative overflow-hidden 
            before:absolute before:top-0 before:left-0 before:w-24 before:h-full 
            before:bg-shimmerGradient before:animate-shimmer"
            />
          </div>
          <div className="w-full flex flex-col items-start ml-5">
            <p
              className="w-[70%] h-3 bg-[#e1e9ee] relative overflow-hidden rounded-md mb-2 
             before:absolute before:top-0 before:left-0 before:w-16 before:h-full 
             before:bg-shimmerGradient before:animate-shimmer
            "
            />
            <p
              className="w-[65%] h-2 bg-[#e1e9ee] relative overflow-hidden rounded-md mb-2 
             before:absolute before:top-0 before:left-0 before:w-16 before:h-full 
             before:bg-shimmerGradient before:animate-shimmer"
            />
            <p
              className="w-[65%] h-2 bg-[#e1e9ee] relative overflow-hidden rounded-md mb-2 
             before:absolute before:top-0 before:left-0 before:w-16 before:h-full 
             before:bg-shimmerGradient before:animate-shimmer"
            />
            <p
              className="w-[45%] h-2 bg-[#e1e9ee] relative overflow-hidden rounded-md mb-2 
             before:absolute before:top-0 before:left-0 before:w-16 before:h-full 
             before:bg-shimmerGradient before:animate-shimmer"
            />
          </div>
        </li>
      )}
    </>
  );
};

export default Skeleton;

/*
@keyframes pulse {
	0%,
	100% {
		transform: 1;
	}
	50% {
		opacity: 0.5;
	}
}

.skeleton-email {
	width: 65%;
	height: 8px;
	background: #e1e9ee;
	margin-top: 8px;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
}

.skeleton-email::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 60px;
	height: 100%;
	background: linear-gradient(to right, #e1e9ee, #f2f8fc, #e1e9ee);
	animation: loading 3s cubic-bezier(0.5, 0, 0.25, 1) infinite;
}
.skeleton-desc {
	width: 45%;
	height: 8px;
	background: #e1e9ee;
	margin-top: 8px;
	position: relative;
	border-radius: 8px;
	overflow: hidden;
}
.pulse-container {
	border: 0.2px solid #e5e7eb;
	height: 7rem;
	border-radius: 8px;
	min-width: 420px;
	max-width: 900px;
	padding: 40px 20px;
}
.pulse-animation-wrapper {
	display: flex;
	margin-left: 1rem;
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.pulse-circle-item {
	border-radius: 100%;
	background-color: #e1e9ee;
	width: 70px;
	height: 70px;
}
.pulse-each-items {
	height: 8px;
	border-radius: 4px;
	background-color: #e1e9ee;
}
.pulse-space-wrapper {
	margin-left: 1.5rem;
	flex: 1 1 0%;
	gap: 8px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
}

*/
