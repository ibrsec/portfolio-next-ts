// "use client";
// import { useEffect, useRef } from "react";
// import ProjectsNavs from "./components/ProjectsNavs";
// import { AppStore, makeStore, persistor } from "@/lib/store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

// const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
//   const storeRef = useRef<AppStore>();
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = makeStore();
//   }

//   return (
//     <div className="pt-[150px] pb-[150px] md:pt-[130px]">
//       <Provider store={storeRef.current}>
//         <PersistGate loading={null} persistor={persistor}>
//           <ProjectsNavs />
//           {children}
//         </PersistGate>
//       </Provider>
//     </div>
//   );
// };

// export default ProjectsLayout;


"use client";
import { ReactNode } from "react";
import ProjectsNavs from "./components/ProjectsNavs";
import store, { persistor } from "@/lib/store"; // Tek bir store ve persistor örneği kullanın
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="pt-[150px] pb-[150px] md:pt-[130px]">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ProjectsNavs />
          {children}
        </PersistGate>
      </Provider>
    </div>
  );
};

export default ProjectsLayout;
