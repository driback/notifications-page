const notificationDatas = [
  {
    id: 0,
    profilePicture: "src/assets/avatar-mark-webber.webp",
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
    profilePicture: "src/assets/avatar-angela-gray.webp",
    name: "Angela Gray",
    message: "followed you",
    time: "5m ago",
    unread: true,
  },
  {
    id: 2,
    profilePicture: "src/assets/avatar-jacob-thompson.webp",
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
    profilePicture: "src/assets/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    message: "sent you a private message",
    time: "5 days ago",

    privateChat:
      "Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im alunready having lots of fun and improving my game.",

    unread: false,
  },
  {
    id: 4,
    profilePicture: "src/assets/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    message: "commented on your picture",
    time: "1 week ago",
    to: {
      postPicture: "src/assets/image-chess.webp",
    },
    unread: false,
  },
  {
    id: 5,
    profilePicture: "src/assets/avatar-nathan-peterson.webp",
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
    profilePicture: "src/assets/avatar-anna-kim.webp",
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
