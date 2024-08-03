import { useEffect } from "react";

const RedirectLinks = {
  "/app": "https://mintbos.vercel.app",
  "/bos": "https://near.social/bos.genadrop.near/widget/Mintbase.App.Index",
  "/code-old": "https://github.com/GenaDrop/mintbos/",
  "/code": "https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/BosGenaDrop/widget/Mintbase",
  "/backlog": "https://github.com/orgs/GenaDrop/projects/2/views/2",
  "/docs": "https://github.com/GenaDrop/genadrop-bos-monorepo",
  "/milestone1": "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Announcement+%2B+SDK+%2B+UI+Kit%22",
  "/milestone2": "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Mintbase+Feature+Parity%22",
  "/milestone3": "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Extend+Social+%2B+DAO+Functionality+%2B+Telegram+Integration+%26+Marketing%22",
  "/twitter": "https://x.com/genadrop",
  "/telegram": "https://t.me/GenaDrop",
  "/wallet": "https://wallet.genadrop.xyz",
  "/support": "https://t.me/genadrop",
  "/mintbase-figma": "https://www.figma.com/file/PMmovNI2wfyjVrJThDu0HB/MINTBASE-OPEN?type=design&node-id=0-1&mode=design&t=VWEnFpgaA9TDHkVY-0",

};

const Redirect = () => {
  useEffect(() => {
    const url = RedirectLinks[window.location.pathname.toLowerCase()];
    if (url) {
      window.location.href = url;
    } else {
      window.location.href = "/";
    }
  }, []);

  return <></>;
};
export default Redirect;
