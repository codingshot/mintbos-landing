import { useEffect } from "react";

const RedirectLinks = {
  "/app": "https://bos.genadrop.io",
  "/code": "https://github.com/GenaDrop/mintbos/",
  "/backlog": "https://github.com/orgs/GenaDrop/projects/2/views/2",
  "/docs": "",
  "/twitter": "https://x.com/genadrop",
  "/telegram": "https://t.me/GenaDrop",
  "/wallet": "https://wallet.genadrop.xyz",

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
