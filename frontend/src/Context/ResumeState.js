import ResumeContext from "./ResumeContext.js";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';

const ResumeState = (props) => {

  const componentRef = useRef();

 
  const initialData = {
    personalData: {
      profileImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3kQLeYMnpy05PhEiuzS1rtRmNVL7VKvwcE4ACmQSQT1rRmUO5mHLyjH-mGHq0ueUQY&usqp=CAU',
      name: "Your Name",
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      profile: "Work Profile",
      address: "Address Line",
      phone: "Phone Number",
      email: "Email Address",
      skill: 'Your, Skills, are, shown, here',
    },
    projectData: {
      projectTitles: { pTitle1: "Project Title 1" },
      projectDesc: { pDescription1: "Project Description 1" },
    },
    educationData: {
      educationTitles: { eTitle1: "Education Title 1" },
      educationDesc: { eDescription1: "Education Description 1" },
    },
    workData: {
      workTitles: { wTitle1: "Work Title 1" },
      workDesc: { wDescription1: "Work Description 1" },
    },
    awardData: {
      awards: 'Certificate of Appreciation - 2019, Certificate of Appreciation - 2018',
    },
  };

  const [themeData, setThemeData] = useState(initialData);

 
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false);


  const [currentTheme, setCurrentTheme] = useState('Theme1'); 
  const [showComponent, setShowComponent] = useState(false); 
  const [selectBtn, setSelectBtn] = useState(true); 
  const [loading, setLoading] = useState(false);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => setLoading(true),
    onAfterPrint: () => setLoading(false),
  });

  return (
    <ResumeContext.Provider
      value={{
        initialData,
        componentRef,
        handlePrint,

        // Resume content
        themeData,
        setThemeData,

        // Section toggles
        checkProj,
        setCheckProj,
        checkWork,
        setCheckWork,
        checkAward,
        setCheckAward,

        // UI state
        currentTheme,
        setCurrentTheme,
        showComponent,
        setShowComponent,
        selectBtn,
        setSelectBtn,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
