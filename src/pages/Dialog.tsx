import React from "react";
import Button from "../components/Common/Buttons/Button";

const Dialog = () => {
  return (
    //<div className="flex gap-4">
    //  <button>babo click</button>
    //  <button id="modal">Cheeseburger click</button>
    //</div>
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-slate-400/70"></div>
      <div className="fixed top-0 left-0 w-full h-full z-20 default-flex">
        <div className="box-border rounded-md w-[25rem] bg-white shadow-md p-[2rem]">
          <h3 className=" text-point-red text-lg mb-1">포스트 삭제</h3>
          <p className=" text-primary-light">
            포스트를 정말로 삭제하시겠습니까?
          </p>
          <section className="default-flex mt-10 justify-end">
            <Button size="sm" theme="tertiary">
              취소
            </Button>
            <Button size="sm" theme="primary">
              삭제
            </Button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dialog;
