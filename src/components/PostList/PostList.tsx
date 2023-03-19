import React, { useState, useEffect, useCallback } from "react";
import Line from "../Line/Line";
import Image from "next/image";
import Pagination from "../Common/Pagination/Pagination";
import Colorpicker from "../Common/Colorpicker/Colorpicker";
import Badge from "../Common/Badge/Badge";
import Calendar from "../Common/Calendar/Calendar";
import { allData } from "../Common/Calendar/defaultData";
import moment from "moment";
import StyleDefinition from "../StyleDefinition/StyleDefinition";
//import "./post.css";
const PostList = () => {
  const LIMIT = 7;
  const [curIdx, setCurIdx] = useState(1);
  const [postDatas, setPostDatas] = useState<any>([]);
  const [selectDate, setSelectDate] = useState("");
  const [curColor, setCurColor] = useState("");
  useEffect(() => {
    console.log("no data");
    //const postingByPagination = async () => {
    //	try {
    //		const response = await GETPOSTLIST({
    //			...(curIdx && { curPage: curIdx }),
    //			...(LIMIT && { limit: LIMIT }),
    //		});
    //		setPostDatas(response?.data);
    //	} catch (err) {
    //		console.dir(err);
    //	}
    //};
    //postingByPagination();
  }, [curIdx]);

  const handleViewCount = useCallback(async (id: number) => {
    console.log(id, "가 없음 비커즈 노 데이타");
    //try {
    //	await UPDATEVIEWCOUNT({ id });
    //} catch (err) {
    //	console.dir(err);
    //}
  }, []);

  return (
    <section className="h-full flex flex-col justify-center w-full max-w-[1240px] py-10 ">
      {/*<h3 className="mb-5 text-lg">자유게시판</h3>*/}
      {/*<div className="rounded-[8px] h-full min-h-[450px] border border-background-gray shadow-primary-shadow p-[30px]">
        <article className="flex gap-[10px] cursor-pointer">
          <span>번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>조회수</span>
          <span>작성일</span>
        </article>
        {postDatas?.list?.map((post: any, idx: number) => {
          const postNum = idx + 1 + LIMIT * (curIdx - 1);
          return (
            <article key={idx} onClick={() => handleViewCount(post?.id)}>
              <>
                <span>{postNum}</span>
                <span>{post?.title}</span>
                <span>{post?.user_name}</span>
                <span>{post?.view_count}</span>
              </>

              {idx + 1 !== LIMIT && <Line />}
            </article>
          );
        })}
      </div>*/}
      <StyleDefinition />
      <section className="grid grid-cols-3 gap-4 items-center">
        <Badge text="뱃지sm" color="#fdd43d" />
        <Badge text="뱃지md" color="#0ed1a4" size="md" />
        <Badge text="뱃지lg" color="#3898ff" size="lg" />
      </section>

      <Colorpicker setCurColor={setCurColor} />

      {/*<section className="flex gap-2 items-center flex-col justify-center">
        <Image
          placeholder="blur"
          src={`/sample.jpg`}
          blurDataURL={"data"}
          alt="img"
          width={200}
          height={200}
        />
        <div className="preview-div">컬러를 나타냅니다.</div>
      </section>*/}
      <section>
        <Calendar allData={allData} setSelectDate={setSelectDate} />
      </section>
      <Pagination
        curIdx={curIdx}
        setCurIdx={setCurIdx}
        //total={Math.ceil(postDatas?.total / LIMIT)}
        total={20}
      />
    </section>
  );
};

export default PostList;
