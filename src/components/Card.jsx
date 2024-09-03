import React, { useRef, useState, useEffect } from "react";
import { ReactComponent as MaleIcon } from "../assets/male.svg";
import { ReactComponent as FemaleIcon } from "../assets/female.svg";
import { ReactComponent as EmailIcon } from "../assets/email.svg";
import { ReactComponent as LocationIcon } from "../assets/location.svg";
import { ReactComponent as ContactIcon } from "../assets/contact.svg";
import { ReactComponent as CakeIcon } from "../assets/cake.svg";
import { ReactComponent as BunIcon } from "../assets/bun.svg";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";
import { ReactComponent as EditIcon } from "../assets/edit.svg";
import { ReactComponent as FlagIcon } from "../assets/flag.svg";
import { ReactComponent as CloseIcon } from "../assets/close.svg";

const Card = ({ data, viewMode }) => {
  const [dropdown, setDropdown] = useState(null);
  const [detail, setDetail] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const formateDate = (dobString) => {
    const date = new Date(dobString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getUTCFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  const handleDropdown = (id) => {
    let elem = document.querySelector(".dropdown-" + id);
    let elemArr = document.querySelectorAll(".drop-down-popup");
    Array.from(elemArr).forEach((item) => item.classList.remove("open"));
    if (elem) {
      elem.classList.add("open");
      setDropdown(true);
    }
  };

  const handleCardClick = (student) => {
    setDetail(student);
    setIsPopupVisible(true);
  };

  const handlePopupClose = () => {
    setDetail(null);
    setIsPopupVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handlePopupClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className={`card-list ${viewMode}`}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            const formattedDate = formateDate(item.dob.date);

            return (
              <>
                <div key={index} id={index} className="card">
                  <div className="button" onClick={() => handleDropdown(index)}>
                    <BunIcon />
                  </div>
                  <div
                    className="card-inner flex justify-start align-center"
                    onClick={() => handleCardClick(item)}
                  >
                    <ToolTip tid={index} dropdown={dropdown} />

                    <div
                      className={`card-img ${
                        item.gender === "female" ? "purple" : ""
                      }`}
                    >
                      <img
                        src={item.picture.medium}
                        width={72}
                        height={72}
                        alt={item.name.first}
                      />
                    </div>
                    <div className="card-body">
                      <div className="flex align-center m-b-5">
                        <span className="card-icon">
                          {item.gender === "male" ? (
                            <MaleIcon className="icon" />
                          ) : (
                            <FemaleIcon className="icon" />
                          )}
                        </span>
                        <span className="card-title card-name font-weight-600">
                          {item.name.title} {item.name.first} {item.name.last}
                        </span>
                      </div>

                      <div className="flex align-center m-b-5">
                        <span className="card-icon">
                          <EmailIcon className="icon" />
                        </span>
                        <span className="card-title card-email font-14">
                          {item.email}
                        </span>
                      </div>

                      <div className="flex align-center m-b-5">
                        <span className="card-icon">
                          <LocationIcon className="icon" />
                        </span>
                        <span className="card-title font-14 truncate">
                          {item.location.city}, {item.location.state},
                          {item.location.country}
                        </span>
                      </div>

                      <div className="flex align-center m-b-5">
                        <span className="card-icon">
                          <ContactIcon className="icon" />
                        </span>
                        <span className="card-title font-14">{item.phone}</span>
                      </div>

                      <div className="flex align-center">
                        <span className="card-icon">
                          <CakeIcon className="icon" />
                        </span>
                        <span className="card-title font-14">
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      {isPopupVisible && detail && (
        <PopupContainer
          studentData={detail}
          formateDate={formateDate}
          onClose={handlePopupClose}
          popupRef={popupRef}
        />
      )}
    </>
  );
};

const PopupContainer = ({ studentData, formateDate, onClose, popupRef }) => {
  const dateofbirth = formateDate(studentData.dob.date);
  return (
    <div className="overlay">
      <div className="popup-container" ref={popupRef}>
        <button className="close-popup" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="flex flex-column align-center">
          <div
            className={`card-img ${
              studentData.gender === "female" ? "purple" : ""
            }`}
          >
            <img
              src={studentData.picture.large}
              width={72}
              height={72}
              alt={studentData.name.first}
            />
          </div>
          <div className="flex align-center m-b-5">
            <span className="card-icon">
              {studentData.gender === "male" ? (
                <MaleIcon className="icon" />
              ) : (
                <FemaleIcon className="icon" />
              )}
            </span>
            <span className="card-title card-name font-weight-600">
              {studentData.name.title} {studentData.name.first}{" "}
              {studentData.name.last}
            </span>
          </div>

          <div className="flex align-center m-b-5">
            <span className="card-icon">
              <EmailIcon className="icon" />
            </span>
            <span className="card-title card-email font-14">
              {studentData.email}
            </span>
          </div>

          <div className="flex align-center m-b-5">
            <span className="card-icon">
              <LocationIcon className="icon" />
            </span>
            <span className="card-title font-14 truncate">
              {studentData.location.city}, {studentData.location.state},
              {studentData.location.country}
            </span>
          </div>

          <div className="flex align-center m-b-5">
            <span className="card-icon">
              <ContactIcon className="icon" />
            </span>
            <span className="card-title font-14">{studentData.phone}</span>
          </div>

          <div className="flex align-center">
            <span className="card-icon">
              <CakeIcon className="icon" />
            </span>
            <span className="card-title font-14">{dateofbirth}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ToolTip = (props) => {
  return (
    <div
      className={`drop-down-popup ${
        props.tid >= 0 ? "dropdown-" + props.tid : ""
      }`}
    >
      <div className="flex align-center font-14 dropdown-item">
        <DeleteIcon />
        Delete
      </div>
      <div className="flex align-center font-14 dropdown-item">
        <EditIcon />
        Edit
      </div>
      <div className="flex align-center font-14 dropdown-item">
        <FlagIcon />
        Flag
      </div>
    </div>
  );
};

export default Card;
