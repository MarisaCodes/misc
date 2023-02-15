export const breadcrumbs = (pathname, title) => {
  const pathsArray = pathname.split("/");
  let i = -1;
  return pathsArray.map((path) => {
    i += 1;
    if (i === 0) return { link: "/", path: "Home" };
    else if (i === pathsArray.length - 1)
      return {
        link: pathsArray.slice(0, i + 1).join("/"),
        path: title,
        active: true,
      };
    else
      return {
        link: pathsArray.slice(0, i + 1).join("/"),
        path: path.split("-").join(" "),
      };
  });
};
