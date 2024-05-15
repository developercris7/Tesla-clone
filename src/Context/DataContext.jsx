import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  // ModelView Hooks
  const [modelInfo, setModelInfo] = useState("");
  const [modelAssets, setModelAssets] = useState("");
  const [modelImages, setModelImages] = useState("");
  const [interiorImage, setInteriorImage] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [paintColor, setPaintColor] = useState("blue");
  const [wheelDesign, setWheelDesign] = useState("wheel1");
  const [interiorColor, setInteriorColor] = useState("white");

  const options = ["cash", "lease", "finance"];
  const [optionTab, setOptionTab] = useState("cash");
  const [optionBodyActive, setOptionBodyActive] = useState(1);
  const optionsText = [
    {
      tab: "cash",
      options: [
        { text: "Rear-Wheel Drive", price: "$29,490" },
        { text: "Long Range All-Wheel Drive", price: "$25,490" },
        { text: "Perfomance All-Wheel Drive", price: "$39,490" },
      ],
    },
    {
      tab: "lease",
      options: [
        { text: "Rear-Wheel Drive", price: "$279/mo" },
        { text: "Long Range All-Wheel Drive", price: "$329/mo" },
        { text: "Perfomance All-Wheel Drive", price: "$370/mo" },
      ],
    },
    {
      tab: "finance",
      options: [
        { text: "Rear-Wheel Drive", price: "$466/mo" },
        { text: "Long Range All-Wheel Drive", price: "$525/mo" },
        { text: "Perfomance All-Wheel Drive", price: "$606/mo" },
      ],
    },
  ];

  const handleTabSwitch = (value) => {
    setOptionTab(value);
    setOptionBodyActive(1);
  };
  return (
    <DataContext.Provider
      value={{
        modelInfo,
        setModelInfo,
        modelAssets,
        setModelAssets,
        modelImages,
        setModelImages,
        interiorImage,
        setInteriorImage,
        urlImage,
        setUrlImage,
        paintColor,
        setPaintColor,
        wheelDesign,
        setWheelDesign,
        interiorColor,
        setInteriorColor,
        options,
        optionTab,
        optionBodyActive,
        setOptionBodyActive,
        optionsText,
        handleTabSwitch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
