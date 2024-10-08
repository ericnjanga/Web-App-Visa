import React, { useEffect, useState, createContext } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"; 
import { isEqual } from "lodash";
import useRouteSegments from "../../hooks/useRouteSegments";

// The page will be fetched here
export const PageContext = createContext(undefined);

const Breadcrumbs = () => { 
  const [crumbs, setCrumbs] = useState([]);
  const routeSegments = useRouteSegments();

  useEffect(() => {
    /**
     * ------- THE PAGE OBJECT WILL BE DETERMINED HERE -------
     * ------- HERE --------
     * ------- PageContext --------
     * ------- HERE --------
     */




    /**
     * Use route segments to generate an array of breadcrumbs components 
      // For each array items (except the last one):
      // - Wrap it with a <BreadcrumbLink /> component and pass it down the "route" and "id" extracted
      // - Wrap the last item with just a <span /> as it is not supposed to link anywhere
     */
    const newBreadcrumbsArray = routeSegments
      .map((itemId, index, array) => {
        let itemRoute = array.slice(0, index + 1).join('/');
  
        return (
          <BreadcrumbItem key={index}>
            {index === array.length - 1 ? (
              <span>{itemId}</span>
            ) : (
              <BreadcrumbLink as={NavLink} to={itemRoute}>
                {itemId}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      });

    // Don't update the state unless the new and previous state are different
    setCrumbs((prevCrumbs) => {
      if (isEqual(prevCrumbs, newBreadcrumbsArray)) {
        return prevCrumbs;
      }
      return newBreadcrumbsArray;
    })

  }, [routeSegments]);

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/">
          Welcome
        </BreadcrumbLink>
      </BreadcrumbItem>
      {crumbs}

      <PageContext.Provider value={undefined}></PageContext.Provider>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
