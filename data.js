import MarkWebber from "./src/assets/avatar-mark-webber.webp";
import AngelaGray from "./src/assets/avatar-angela-gray.webp";
import JacobThompson from "./src/assets/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "./src/assets/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "./src/assets/avatar-kimberly-smith.webp";
import NathanPeterson from "./src/assets/avatar-nathan-peterson.webp";
import AnnaKim from "./src/assets/avatar-anna-kim.webp";
import Chess from "./src/assets/image-chess.webp";

const notificationDatas = [
  {
    id: 0,
    profilePicture: MarkWebber,
    name: "Mark Webber",
    message: "reacted to your recent post",
    time: "1m ago",
    to: {
      postText: "My first tournament today!",
    },
    unread: true,
  },
  {
    id: 1,
    profilePicture: AngelaGray,
    name: "Angela Gray",
    message: "followed you",
    time: "5m ago",
    unread: true,
  },
  {
    id: 2,
    profilePicture: JacobThompson,
    name: "Jacob Thompson",
    message: "has joined your group",
    time: "1 day ago",
    to: {
      group: "Chess Club",
    },
    unread: true,
  },
  {
    id: 3,
    profilePicture: RizkyHasanuddin,
    name: "Rizky Hasanuddin",
    message: "sent you a private message",
    time: "5 days ago",

    privateChat:
      "Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im alunready having lots of fun and improving my game.",

    unread: false,
  },
  {
    id: 4,
    profilePicture: KimberlySmith,
    name: "Kimberly Smith",
    message: "commented on your picture",
    time: "1 week ago",
    to: {
      postPicture: Chess,
    },
    unread: false,
  },
  {
    id: 5,
    profilePicture: NathanPeterson,
    name: "Nathan Peterson",
    message: "reacted to your recent post",
    time: "2 week ago",
    to: {
      postText: "5 end-game strategies to increase your win rate",
    },
    unread: false,
  },
  {
    id: 6,
    profilePicture: AnnaKim,
    name: "Anna Kim",
    message: "left the group",
    time: "2 week ago",
    to: {
      group: "Chess Club",
    },
    unread: false,
  },
];

export const getData = () => {
  return notificationDatas;
};

export const getUnread = () => {
  const unRead = notificationDatas.filter((notif) => notif.unread);
  return unRead;
};
