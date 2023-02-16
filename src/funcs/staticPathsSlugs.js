export const staticPathsSlugs = async (posts) => {
  return posts.map(({ frontmatter, Content }) => {
    const { slug, thumbnail, href, title, date, keywords } = frontmatter;
    return {
      params: { slug },
      props: { Content, thumbnail, href, title, date, keywords },
    };
  });
};
