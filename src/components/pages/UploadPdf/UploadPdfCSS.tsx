import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../../store/actions/authActions";
import "./UploadPdfCSS.scss";

import sentiumLogo from "../../../img/sentium-logo.png";
import userIcon from "../../../img/user-logo.png";
//import PdfList from "../PdfList/PdfList";
import axios from "../../../services/axios";

const UploadPdf = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentSelectedPdf, setCurrentSelectedPdf]: any = useState(null);
  const [uploadedPdfs, setUploadedPdfs] = useState([]);

  const auth: any = useSelector((state: any) => state.auth);

  const getAllPdfsOfAuthor = async () => {
    await axios
      .get("/pdf", {
        headers: {
          Authorization: `Bearer ${auth.authToken}`,
        },
      })
      .then(({ data }) => {
        setUploadedPdfs(data.payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!auth.user) {
      history.push("/sign-in");
    }
    getAllPdfsOfAuthor();
  }, [auth]);

  const uploadPdf = async () => {
    const formData = new FormData();

    formData.append("pdf", currentSelectedPdf);

    // auth.authToken
    await axios
      .post("/pdf", formData, {
        headers: {
          Authorization: `Bearer ${auth.authToken}`,
          contentType: "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log(data.payload);
        getAllPdfsOfAuthor();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="page-wrap">
      <header>
        <div className="logo">
          <img src={sentiumLogo} alt="sentium-logo" />
          <div className="heading-title">
            SENTIUM
            <br /> CONSULTING
          </div>
        </div>
        <div className="name-surname">
          <img src={userIcon} alt="user-icon" className="user-img" />
          <span className="sign-out">
            {auth.user?.name} {auth.user?.surname}{" "}
            <span
            className="sign-out-link"
              onClick={() => {
                dispatch(signOut());
              }}
            >
              Sign Out
            </span>
          </span>
        </div>
      </header>
      <div className="content">
        <div className="upload-pdf-container-wrap">
          <div className="upload-pdf-container">
            <p className="upload-pdf-text">Upload PDF file</p>
            <input
              title=""
              accept="application/pdf"
              type="file"
              onChange={(e: any) => {
                setCurrentSelectedPdf(e.target.files[0]);
              }}
            />
            <input className="upload-input-submit" type="submit" value="Upload" onClick={uploadPdf} />
          </div>
        </div>
        <div>
          {uploadedPdfs &&
            uploadedPdfs.map((pdf: any) => (
              <a href={`http://localhost:5000/pdfs/${pdf.filename}`}>
                <div>{pdf.filename}</div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UploadPdf;
