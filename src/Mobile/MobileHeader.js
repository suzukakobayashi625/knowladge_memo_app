import "../scss/header.scss";
import { useState, useEffect } from "react";
import memokunImage from "../images/memokun.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "./SearchModal";

const MobileHeader = ({
  setData,
  sortValue,
}) => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mobile_header_container">
        <div className="mobile_header_wrapper">
          <div className="top_title">
            <img src={memokunImage} alt="メモ君のドット絵です" />
            <div>知見メモ</div>
          </div>
          <div className="search_btn" onClick={() => setModalOpen(true)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div >
      <SearchModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sortValue={sortValue}
        setData={setData}
      />
    </>
  );
};

export default MobileHeader;