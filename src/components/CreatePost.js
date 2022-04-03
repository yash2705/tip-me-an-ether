import React, { useState } from "react";
import { BsImages } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   const [file, setFile] = useState(null);
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.title}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.description}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div
          className={styles.filePicker}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <BsImages />
          <span>Upload an image(optional)</span>
          <input
            id="fileInput"
            type="file"
            className="w-4/5 md:w-3/5 hidden"
            //   onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <div className="absolute p-4 rounded-full bg-slate-900 hover:bg-black text-white  text-3xl font-bold text-center cursor-pointer bottom-20 md:bottom-5 right-5 shadow-md">
        <IoCreateOutline />
      </div>
    </>
  );
};

const styles = {
  wrapper: `md:w-2/3 lg:w-4/5 xl:w-7/12 flex flex-col flex-1 overflow-y-scroll overscroll-contain md:h-[600px] scrollbar-hide pb-20 md:pb-0 items-center justify-center space-y-4`,
  title: `w-4/5 md:w-3/5 px-4 py-2 rounded-xl focus:outline-none border focus:border-slate-400 border-slate-200 text-xl font-semibold bg-slate-50`,
  description: `w-4/5 md:w-3/5 px-4 py-2 rounded-xl focus:outline-none border focus:border-slate-400  border-slate-200 text-lg bg-slate-50 resize-none md:h-48 h-32`,
  filePicker: `w-4/5 md:w-3/5 px-4 py-2 bg-slate-50 border-slate-200 border rounded-xl flex justify-center items-center text-lg text-slate-400 cursor-pointer space-x-2 hover:text-slate-600`,
  submitButton: ``,
};
export default CreatePost;
