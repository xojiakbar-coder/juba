import { useLocation } from "react-router-dom";

const useFindItemIdByPath = (navbarItems) => {
  const location = useLocation();

  const findItemIdByPath = () => {
    const allPaths = navbarItems.flatMap((item) => [
      { id: item.id, path: item.path },
      ...(item.children || []).map((child) => ({
        id: child.id,
        path: child.path,
      })),
    ]);

    const found = allPaths.find(({ path }) => path === location.pathname);
    return found?.id || null;
  };

  return findItemIdByPath();
};

export default useFindItemIdByPath;
