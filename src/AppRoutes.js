import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import LayoutGlobal from "./layouts/LayoutGlobal"; 
// import PageCodingPatterns from "./pages/coding-patterns";

import PageHooks from "./pages/coding-patterns/PageHooks";
import PageForms from "./pages/coding-patterns/PageForms";
import PageComponentComposition from "./pages/coding-patterns/PageComponentComposition";
import PageDataFetching from "./pages/coding-patterns/PageDataFetching";
// import PageDynamicJsx from "./pages/coding-patterns/PageDynamicJsx";
import ResourcesOverview from "./pages/additional-resources/PageOverview";
import PageHighOrderComponents from "./pages/coding-patterns/PageHighOrderComponents";
// import PageCategoryLogicEncapsulation from "./pages/coding-patterns/PageCategoryLogicEncapsulation";
import PageRenderProps from "./pages/coding-patterns/PageRenderProps";
import PageReactInterviewQuestions from "./pages/knowledge-base/PageReactInterviewQuestions";
import PageHTMLCSSInterviewQuestions from "./pages/knowledge-base/PageHTMLCSSInterviewQuestions";
import PageJavascriptInterviewQuestions from "./pages/knowledge-base/PageJavascriptInterviewQuestions";
import PageHome from "./pages";
import PageCodingPatternsJs from "./pages/coding-patterns/javascript";
// import PageCodingPatternsReact from "./pages/coding-patterns/react";
import LayoutPage, { LayoutTemp } from "./layouts/LayoutPage";
import PageReactPerformance from "./pages/coding-patterns/PageReactPerformance";
import PassingDataDeepDown from "./pages/coding-patterns/PassingDataDeepDown";
import { PageCodPattJSPage1, PageCodPattJSPage2 } from "./pages/coding-patterns/PageCodPattJSPages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutGlobal />}>
        <Route index element={<PageHome />} />

        <Route path="/coding-patterns" element={<LayoutPage />}>
          {/** Nested routes */}
          <Route index element={<Navigate to="javascript/js-page1" />} /> {/* Parent route links here by default */}
          {/** -> These routes are relative to the parent route (host) */} 
          <Route path="javascript" element={<LayoutTemp />}>
            <Route index element={<Navigate to="js-page1" />} /> {/* Parent route links here by default */}
            <Route path="js-page1" element={<PageCodPattJSPage1 />} />
            <Route path="js-page2" element={<PageCodPattJSPage2 />} />
          </Route>

          {/** Nested routes */}
          <Route path="react" element={<LayoutTemp />}>
            <Route index element={<Navigate to="performance-patterns" />} /> {/* Parent route links here by default */}
            <Route path="performance-patterns" element={<PageReactPerformance />} />
            <Route path="hooks" element={<PageHooks />} />
            <Route path="render-props" element={<PageRenderProps />} />
            <Route path="forms" element={<PageForms />} />
            <Route
              path="component-composition"
              element={<PageComponentComposition />}
            />
            <Route path="data-fetching" element={<PageDataFetching />} />
            <Route
              path="logic-enapsulation"
              element={<PageHighOrderComponents />}
            />
            <Route
              path="passing-data-deeply"
              element={<PassingDataDeepDown />}
            /> 
          </Route>
        </Route>

        <Route path="/knowledge-base" element={<LayoutTemp />}>
          {/** Nested routes */}
          <Route index element={<Navigate to="javascript/javascript-core-concepts" />} /> {/* Parent route links here by default */}
          {/** -> These routes are relative to the parent route (host) */}  
          <Route path="javascript" element={<LayoutPage />}>
            <Route index element={<Navigate to="javascript-core-concepts" />} /> {/* Parent route links here by default */}
            <Route path="javascript-core-concepts" element={<PageJavascriptInterviewQuestions />} />
          </Route>
          <Route path="html-and-css" element={<LayoutPage />}>
            <Route index element={<Navigate to="html-and-css-core-concepts" />} /> {/* Parent route links here by default */}
            <Route path="html-and-css-core-concepts" element={<PageHTMLCSSInterviewQuestions />} />
          </Route>
          <Route path="react" element={<LayoutPage />}>
          <Route index element={<Navigate to="react-core-concepts" />} /> {/* Parent route links here by default */}
            <Route path="react-core-concepts" element={<PageReactInterviewQuestions />} />
          </Route>
        </Route>

        <Route path="/additional-resources" element={<LayoutPage />}>
          {/** Nested routes */} 
          <Route index element={<Navigate to="react-resoures" />} /> {/* Parent route links here by default */}
          <Route path="react-resoures" element={<ResourcesOverview />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
