export function getStartDate(timestamp) {
  let getTime = new Date(timestamp);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  let todayTime = year + "-" + month + "-" + date;
  return todayTime;
}

export function getEndDate(timestamp) {
  let getTime = new Date(timestamp);
  getTime.setDate(getTime.getDate() + 1);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  let todayTime = year + "-" + month + "-" + date;
  return todayTime;
}

export function getEndTime(timestamp, duration, boolen) {
  let getTime = new Date(timestamp);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  let hours = getTime.getHours() + Math.floor(duration / 60);
  let min = 0;
  if (getTime.getMinutes() + (duration % 60) >= 60) {
    hours = hours + 1;
    min = getTime.getMinutes() + (duration % 60) - 60;
  } else {
    min = getTime.getMinutes() + (duration % 60);
  }
  let second = getTime.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  second = second < 10 ? "0" + second : second;
  let todayTime = year + "-" + month + "-" + date;
  let todayHours = hours + ":" + min + ":" + second;
  return boolen ? todayTime + " " + todayHours : todayHours;
}

export function getStartTime(timestamp, boolen) {
  let getTime = new Date(timestamp);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  let hours = getTime.getHours();
  let min = getTime.getMinutes();
  let second = getTime.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  second = second < 10 ? "0" + second : second;
  let todayTime = year + "-" + month + "-" + date;
  let todayHours = hours + ":" + min + ":" + second;
  return boolen ? todayTime + " " + todayHours : todayHours;
}

export function setStartDate(timestamp) {
  let getTime = new Date(timestamp);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  let todayTime = year + "-" + month + "-" + date;
  return todayTime;
}

export function setEndDate(timestamp) {
  let getTime = new Date(timestamp);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  let todayTime = year + "-" + month + "-" + date;
  return todayTime;
}

export function getMin(time1, time2) {
  // console.log(timeToMinutes(time2),timeToMinutes(time1));
  return timeToMinutes(time2) - timeToMinutes(time1);
}

function timeToMinutes(timeStr) {
  const parts = timeStr.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return hours * 60 + minutes;
}

export function nightShift(timestamp, duration) {
  const originalDate = new Date(timestamp);
  const newDate = new Date(timestamp);
  newDate.setMinutes(newDate.getMinutes() + duration);
  return originalDate.toDateString() !== newDate.toDateString();
}

export function overDay(timestamp, duration) {
  const parts = timestamp.split(":"); // 分割时分秒
  const hours = parseInt(parts[0], 10); // 小时部分转成整数
  const minutes = parseInt(parts[1], 10); // 分钟部分转成整数
  const seconds = parseInt(parts[2], 10); // 秒钟部分转成整数
  return hours * 60 + minutes + Number(duration) > 1440; // 转换成分钟
}

export function getDate(timestamp, num) {
  let getTime = new Date(timestamp);
  getTime.setDate(getTime.getDate() + num);
  let year = getTime.getFullYear();
  let month = getTime.getMonth() + 1;
  let date = getTime.getDate();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  let todayTime = year + "-" + month + "-" + date;
  return todayTime;
}

export function getDurTime(timeStr, minutes) {
  let date = timeStr.split("T");
  let timeParts = date[1].split(":");
  let time = new Date();
  time.setHours(timeParts[0]);
  time.setMinutes(timeParts[1]);
  time.setSeconds(timeParts[2]);

  // 加上指定的分钟数
  time.setMinutes(time.getMinutes() + minutes);

  // 格式化输出
  let newTimeStr =
    time.getHours().toString().padStart(2, "0") +
    ":" +
    time.getMinutes().toString().padStart(2, "0") +
    ":" +
    '00';
  return newTimeStr;
}

export function missTime(time) {
  let splitTime = time.split(' ');
  return splitTime[0] + 'T' + splitTime[1];
}

export function delectT(time) {
  let splitTime = time.split('T');
  return splitTime[0] + ' ' + splitTime[1];
}

export function splitT(time) {
  let splitTime = time.split(' ');
  return splitTime[1];
}

export function getNowDate() {
      let getTime = new Date();
      let year = getTime.getFullYear();
      let month = getTime.getMonth() + 1;
      let date = getTime.getDate();
      let hours = getTime.getHours();
      let min = getTime.getMinutes();
      let second = getTime.getSeconds();
      hours = hours < 10 ? "0" + hours : hours;
      min = min < 10 ? "0" + min : min;
      second = second < 10 ? "0" + second : second;
      let todayTime = year + "-" + month + "-" + date;
      let todayHours = hours + ":" + min + ":" + second;
      return todayTime + " " + todayHours;
    }

// export function choiceTime() {
//   let obj = [
//     { name: "半小时", value: 30 },
//     { name: "一小时", value: 60 },
//     { name: "一小时半", value: 90 },
//     { name: "两小时", value: 120 },
//     { name: "两小时半", value: 150 },
//     { name: "三小时", value: 180 },
//     { name: "三小时半", value: 210 },
//     { name: "四小时", value: 240 },
//     { name: "四小时半", value: 270 },
//     { name: "五小时", value: 300 },
//     { name: "五小时半", value: 330 },
//     { name: "六小时", value: 360 },
//     { name: "六小时半", value: 390 },
//     { name: "七小时", value: 420 },
//     { name: "七小时半", value: 450 },
//     { name: "八小时", value: 480 },
//     { name: "八小时半", value: 510 },
//     { name: "九小时", value: 540 },
//     { name: "九小时半", value: 570 },
//     { name: "十小时", value: 600 },
//     { name: "十小时半", value: 630 },
//     { name: "十一小时", value: 660 },
//     { name: "十一小时半", value: 690 },
//     { name: "十二小时", value: 720 },
//     { name: "十二小时半", value: 750 },
//     { name: "十三小时", value: 780 },
//     { name: "十三小时半", value: 810 },
//     { name: "十四小时", value: 840 },
//     { name: "十四小时半", value: 870 },
//     { name: "十五小时", value: 900 },
//     { name: "十五小时半", value: 930 },
//     { name: "十六小时", value: 960 },
//     { name: "十六小时半", value: 990 },
//     { name: "十七小时", value: 1020 },
//     { name: "十七小时半", value: 1050 },
//     { name: "十八小时", value: 1080 },
//     { name: "十八小时半", value: 1110 },
//     { name: "十九小时", value: 1140 },
//     { name: "十九小时半", value: 1170 },
//     { name: "二十小时", value: 1200 },
//     { name: "二十小时半", value: 1230 },
//     { name: "二十一小时", value: 1260 },
//     { name: "二十一小时半", value: 1290 },
//     { name: "二十二小时", value: 1320 },
//     { name: "二十二小时半", value: 1350 },
//     { name: "二十三小时", value: 1380 },
//     { name: "二十三小时半", value: 1410 },
//     { name: "二十四小时", value: 1440 },
//   ];
//   return obj;
// }

export function orderName () {
  return [
    {name:'Laser-Bot'},
    {name:'DEK-Bot'},
    {name:'SPI-Bot'},
    {name:'NPM-Bot'},
    {name:'AOI-1-Bot'},
    {name:'Reflow-Bot'},
    {name:'AOI-2-Bot'},
    {name:'ICT-Bot'},
    {name:'Laser-Top'},
    {name:'DEK-Top'},
    {name:'SPI-Top'},
    {name:'NPM-Top'},
    {name:'AOI-1-Top'},
    {name:'Reflow-Top'},
    {name:'AOI-2-Top'},
    {name:'ICT-Top'},
  ]
}

export function durationChoice () {
  return [
    {
      value: ["00:00:00", "01:00:00"],
      label: "早上0点~1点",
    },
    {
      value: ["01:00:00", "02:00:00"],
      label: "早上1点~2点",
    },
    {
      value: ["02:00:00", "03:00:00"],
      label: "早上2点~3点",
    },
    {
      value: ["03:00:00", "04:00:00"],
      label: "早上3点~4点",
    },
    {
      value: ["04:00:00", "05:00:00"],
      label: "早上4点~5点",
    },
    {
      value: ["05:00:00", "06:00:00"],
      label: "早上5点~6点",
    },
    {
      value: ["06:00:00", "07:00:00"],
      label: "早上6点~7点",
    },
    {
      value: ["07:00:00", "08:00:00"],
      label: "早上7点~8点",
    },
    {
      value: ["08:00:00", "09:00:00"],
      label: "早上8点~9点",
    },
    {
      value: ["09:00:00", "10:00:00"],
      label: "早上9点~10点",
    },
    {
      value: ["10:00:00", "11:00:00"],
      label: "早上10点~11点",
    },
    {
      value: ["11:00:00", "12:00:00"],
      label: "早上11点~12点",
    },{
      value: ["12:00:00", "13:00:00"],
      label: "下午0点~1点",
    },
    {
      value: ["13:00:00", "14:00:00"],
      label: "下午1点~2点",
    },
    {
      value: ["14:00:00", "15:00:00"],
      label: "下午2点~3点",
    },
    {
      value: ["15:00:00", "16:00:00"],
      label: "下午3点~4点",
    },
    {
      value: ["16:00:00", "17:00:00"],
      label: "下午4点~5点",
    },
    {
      value: ["17:00:00", "18:00:00"],
      label: "下午5点~6点",
    },
    {
      value: ["18:00:00", "19:00:00"],
      label: "下午6点~7点",
    },
    {
      value: ["19:00:00", "20:00:00"],
      label: "下午7点~8点",
    },
    {
      value: ["20:00:00", "21:00:00"],
      label: "下午8点~9点",
    },
    {
      value: ["21:00:00", "22:00:00"],
      label: "下午9点~10点",
    },
    {
      value: ["22:00:00", "23:00:00"],
      label: "下午10点~11点",
    },
    {
      value: ["23:00:00", "24:00:00"],
      label: "下午11点~12点",
    }
  ]
}