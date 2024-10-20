import { useEffect } from "react";

const RedirectLinks = {
  "/app": "https://mintbos.vercel.app",
  "/bos": "https://near.social/bos.genadrop.near/widget/Mintbase.App.Index",
  "/code-old": "https://github.com/GenaDrop/mintbos/",
  "/code":
    "https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/Mintbase",
  "/backlog": "https://github.com/orgs/GenaDrop/projects/2/views/2",
  "/docs":
    "https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.App.Index?page=resources&tab=guide",
  "/mini": "https://dev.near.org/bos.genadrop.near/widget/Mintbase.Mini.Index",
  "/mini-code":
    "https://github.com/GenaDrop/genadrop-bos-monorepo/tree/main/apps/Mintbase/widget/Mintbase/Mini",
  "/marketplace-demo": "https://mintbos.testnet.page",
  "/marketplace-template":
    "https://github.com/NEARBuilders/mintbos-marketplace-template",
  "/sdk-guide":
    "https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.App.Index?page=resources&tab=sdk_guide",
  "/ui-kit":
    "https://mintbos.vercel.app/bos.genadrop.near/widget/Mintbase.UI-Kit",
  "/milestone1":
    "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Announcement+%2B+SDK+%2B+UI+Kit%22",
  "/milestone2":
    "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Mintbase+Feature+Parity%22",
  "/milestone3":
    "https://github.com/orgs/GenaDrop/projects/2/views/2?filterQuery=milestone%3A%22Extend+Social+%2B+DAO+Functionality+%2B+Telegram+Integration+%26+Marketing%22",
  "/twitter": "https://x.com/genadrop",
  "/telegram": "https://t.me/GenaDrop",
  "/wallet": "https://wallet.genadrop.xyz",
  "/support": "https://t.me/genadrop",
  "/mintbase-figma":
    "https://www.figma.com/file/PMmovNI2wfyjVrJThDu0HB/MINTBASE-OPEN?type=design&node-id=0-1&mode=design&t=VWEnFpgaA9TDHkVY-0",
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
