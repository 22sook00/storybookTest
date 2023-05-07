import React, { useState, useEffect, useCallback, useRef } from "react";
import Line from "../Line/Line";
import Image from "next/image";
import Pagination from "../Common/Pagination/Pagination";
import Colorpicker from "../Common/Colorpicker/Colorpicker";
import Badge from "../Common/Badge/Badge";
import Calendar from "../Common/Calendar/Calendar";
import moment from "moment";
import Modal from "../Common/Modal/Modal";
import Button from "../Common/Buttons/Button";
import Tooltip from "../Common/Tooltip/Tooltip";
import Accordion from "../Common/Accordion/Accordion";
import Checkbox from "../Common/Checkbox/Checkbox";
import Toggle from "../Common/Toggle/Toggle";
import { Dummies } from "./dummyList";
//import "./post.css";
import { accordionDummy } from "../Common/Accordion/accordionDummy";
import ColorDefinition from "../ColorDefinition/ColorDefinition";

const PostList = () => {
  const LIMIT = 7;
  const [curIdx, setCurIdx] = useState(1);
  const [postDatas, setPostDatas] = useState<any>([]);
  const [selectDate, setSelectDate] = useState("");
  //const [curColor, setCurColor] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpen = () => {
    setIsOpenModal((prev) => !prev);
  };
  //console.log("selectDate:", selectDate);
  useEffect(() => {
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

  const [selectedIDX, setSelectedIDX] = useState<number | null>(0);
  const [selected, setSelected] = useState<string | undefined>();
  return (
    <section className="h-full flex flex-col justify-center w-full max-w-[1240px] py-10 ">
      <div className="flex flex-col gap-4">
        {Dummies.map((list) => {
          return (
            <div key={list.id}>
              <Toggle idx={list.id} selectedIDX={selectedIDX} />
            </div>
          );
        })}
      </div>
      <Tooltip />
      <Checkbox text={"hi"} />
      <div className="default-flex">
        <div className={`w-[500px]`}>
          {accordionDummy.map((item, i) => {
            return (
              <div key={i}>
                <Accordion
                  value={selected}
                  onChange={setSelected}
                  title={item.title}
                  content={item.content}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/*<Accordion />*/}

      <ColorDefinition />
      <section className="grid grid-cols-3 gap-4 items-center">
        <Badge text="뱃지sm" color="#fdd43d" />
        <Badge text="뱃지md" color="#0ed1a4" size="md" />
        <Badge text="뱃지lg" color="#3898ff" size="lg" />
      </section>
      <Colorpicker />
      <Button size="sm" theme="secondary" onClick={() => setIsOpenModal(true)}>
        모달열기클릭
      </Button>
      {isOpenModal && (
        <Modal
          title="modal test"
          desc="모달 테스트"
          dimmed={false}
          size="md"
          onClose={() => handleOpen()}
          setIsOpenModal={setIsOpenModal}
        >
          <h2>안녕하세요!</h2>
          <h3>나이스투밋츄!</h3>
          <p>이숙영입니다.</p>
          <h2>안녕하세요!</h2>
          <h3>나이스투밋츄!</h3>
          <p>이숙영입니다.</p>
        </Modal>
      )}
      <section>
        <Calendar setSelectDate={setSelectDate} />
      </section>
      <Pagination
        setCurIdx={setCurIdx}
        //total={Math.ceil(postDatas?.total / LIMIT)}
        total={20}
      />
    </section>
  );
};

export default PostList;
