import React, { useState, useEffect, useCallback } from "react";
import Line from "../Line/Line";
import Pagination from "../Common/Pagination/Pagination";
import Colorpicker from "../Common/Colorpicker/Colorpicker";
//import "./post.css";
const PostList = () => {
  const LIMIT = 7;
  const [curIdx, setCurIdx] = useState(1);
  const [postDatas, setPostDatas] = useState<any>([]);

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
    <section className="h-full flex flex-col justify-center w-full max-w-[1240px] py-10">
      <h3 className="mb-5 text-lg">자유게시판</h3>
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

      <Colorpicker />
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
