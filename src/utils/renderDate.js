function renderDate() {
  //날짜
  const nowDate = new Date();

  if (nowDate) {
    const dayToKorean = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
    const year = nowDate.getFullYear();
    const month = String(Number(nowDate.getMonth()) + 1);
    const date = nowDate.getDate();
    const day = nowDate.getDay() - 1;

    return year + "/ " + month + "/ " + date + "/ " + dayToKorean[day] + "";
  }
  return "";
}

export default renderDate;
