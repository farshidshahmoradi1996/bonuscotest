import moment from "moment";
const getFromNowByUnixTime = (time: number) => {
  return moment(time).fromNow();
};
export { getFromNowByUnixTime };
