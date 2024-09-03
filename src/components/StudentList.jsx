import React, { useEffect, useState } from "react";
import { ApiService } from "../service/ApiService";
import Card from "./Card";
import { ReactComponent as ListIcon } from "../assets/listview.svg";
import { ReactComponent as ExpandIcon } from "../assets/expandview.svg";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);
        const studentData = await ApiService();
        setData(studentData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, []);

  const handleView = () => {
    setViewMode(viewMode === "list" ? "grid" : "list");
  };

  if (loading) {
    return (
      <div className="loading-msg">
        <span className="loading-spinner"></span> Loading...
      </div>
    );
  }

  if (error) {
    return <div className="error-msg">{error}</div>;
  }

  return (
    <div className="student-container">
      <div className="flex align-center m-b-25">
        <h1>Student List</h1>
        <button className="toggle-button" onClick={handleView}>
          {viewMode === "list" ? <ExpandIcon /> : <ListIcon />}
        </button>
      </div>

      <Card data={data} viewMode={viewMode} />
    </div>
  );
};

export default StudentList;
