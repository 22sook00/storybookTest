export interface allDataProps {
  createdAt: string;
  order: number;
}

export const dayOfWeek: string[] = ["일", "월", "화", "수", "목", "금", "토"];
export const allData: allDataProps[] = [
  { createdAt: "2023-03-19T12:59-0500", order: 1 },
  { createdAt: "2023-03-12T12:59-0500", order: 2 },
  { createdAt: "2023-03-25T12:59-0500", order: 3 },
  { createdAt: "2023-03-22T12:59-0500", order: 2 },
  { createdAt: "2023-03-15T12:59-0500", order: 3 },
  { createdAt: "2023-03-12T12:59-0500", order: 1 },
  { createdAt: "2023-03-18T12:59-0500", order: 1 },
  { createdAt: "2023-03-30T12:59-0500", order: 2 },
  { createdAt: "2023-03-18T12:59-0500", order: 3 },
];
