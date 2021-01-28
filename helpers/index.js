import cookie from "cookie"

const parseCookies = (req) => {
    // console.log("parseCookies", req, req.headers.cookie);
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export default parseCookies;