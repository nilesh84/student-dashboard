import React from "react";
import axios from "axios";

const Limit = 12;
const API_URL = `https://randomuser.me/api/?results=${Limit}`;

const STUDENT_STORAGE_KEY = "student_data";

export const ApiService = async () => {
  try {
    const response = await axios.get(API_URL);
    const studentRecord = response.data.results;
    localStorage.setItem(STUDENT_STORAGE_KEY, JSON.stringify(studentRecord));
    //console.log(studentRecord);
    return studentRecord;
  } catch (error) {
    console.log(`fetching Error ${error}`);
    const cachedData = localStorage.getItem(STUDENT_STORAGE_KEY);
    if (cachedData) {
      console.warn("cached data from local storage.");
      return JSON.parse(cachedData);
    } else {
      throw new Error("No Storgae Data Available");
    }
  }
};
