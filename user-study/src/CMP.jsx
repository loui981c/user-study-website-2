import { useState, useEffect, useRef } from 'react';
import { logEvent } from "./logger";
import { EVENT_TARGETS, EVENT_TYPES, WEBSITES, DYNAMIC_CONTENT } from "./constants"; 


function CMP({ sessionId, siteName, index, onClose }) {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const hasLoggedRef = useRef(false);

  // Set default content for safety if siteName is unrecognized
  const content = DYNAMIC_CONTENT[siteName] || DYNAMIC_CONTENT[WEBSITES.ZALANDO];


  useEffect(() => {
    if (hasLoggedRef.current) return; 
    hasLoggedRef.current = true;

    logEvent(
      sessionId,
      siteName,
      index,
      EVENT_TYPES.CMP_SHOWN,
      EVENT_TARGETS.CMP_FIRST_LAYER
    );
  }, [sessionId, siteName, index]);


  /**
   * Reusable component for a single category row with a label and a Toggle.
   */
  function ToggleRow({ label, category, logTarget, initialOn = true, readOnly = false, isFirstLayer = true }) {
    const [isOn, setIsOn] = useState(initialOn);
    
    // Determine the content keys (on/off)
    const currentContent = content[category] ? (isOn ? content[category].on : content[category].off) : ["Placeholder explanation.", "Placeholder consequences."];
    
    // Determine the conditional styling for essential on the first layer
    const isEssentialAndOff = isFirstLayer && category === 'Essential' && !isOn;
    const essentialBgClasses = isEssentialAndOff ? 'bg-red-50 ring-2 ring-red-400' : '';
    const essentialTextClasses = isEssentialAndOff ? 'text-red-700' : 'text-gray-800';


    // 3. Updated Toggle component logic to be inline for shared state
    function ToggleComponent() {
      function toggle() {
        if (readOnly) return;
  
        logEvent(
              sessionId,
              siteName,
              index,
              isOn ? EVENT_TYPES.TOGGLE_OFF : EVENT_TYPES.TOGGLE_ON,
              logTarget
            );
        const newValue = !isOn;
        setIsOn(newValue);
      }
  
      return (
        <div
          onClick={() => toggle()}
          className={`
            w-14 h-8 flex items-center rounded-full p-1 transition-all
            ${readOnly ? "cursor-default opacity-70" : "cursor-pointer"}
            ${isOn ? "bg-blue-500" : "bg-gray-300"}
          `}
        >
          <div
            className={`
              w-6 h-6 bg-white rounded-full shadow-md transform transition-transform
              ${isOn ? "ml-auto" : "ml-0"}
            `}
          />
        </div>
      );
    } 

    return (
      <div className={`w-full py-3 px-3 transition-colors duration-300 rounded-lg ${essentialBgClasses}`}>
        <div className="flex items-center justify-between">
          <span className={`text-lg font-semibold ${essentialTextClasses}`}>{label}</span>
          <ToggleComponent />
        </div>
        <ul className="list-disc ml-5 mt-1 text-sm text-gray-600">
          <li className={isEssentialAndOff ? 'font-bold text-red-700' : ''} dangerouslySetInnerHTML={{ __html: currentContent[0] }}></li>
          <li className={isEssentialAndOff ? 'font-bold text-red-700' : ''} dangerouslySetInnerHTML={{ __html: currentContent[1] }}></li>
        </ul>
      </div>
    );
  }

  function Button({ label, logTarget, extraOnClick, styleClasses = "bg-blue-500 text-white hover:bg-blue-300" }) {
    return (
      <button
        className={`
          w-40 h-10 uppercase transition-colors
          ${styleClasses}
        `}
        onClick={() => {
          logEvent(
            sessionId,
            siteName,
            index,
            EVENT_TYPES.BUTTON_CLICK,
            logTarget
          );

          if (extraOnClick) extraOnClick();
        }}
      >
        {label}
      </button>
    );
  }

  /**
   * Function to handle the final button clicks (Accept All, Decline All, Save).
   */
  function handleFinalAction(logTarget) {
    logEvent(
            sessionId,
            siteName,
            index,
            EVENT_TYPES.BUTTON_CLICK,
            EVENT_TARGETS.BTN_CLOSE_CMP
          );

    onClose(logTarget);
  }

  function handleMoreOptions(show) {
    logEvent(
      sessionId,
      siteName,
      index,
      show ? EVENT_TYPES.PANEL_OPEN : EVENT_TYPES.PANEL_CLOSE,
      EVENT_TARGETS.CMP_SECOND_LAYER
    );

    setShowMoreOptions(show)
  }

  // --- SECOND LAYER (MORE OPTIONS) ---
  if (showMoreOptions) {
    return (
      <div className="bg-white w-2/5 min-w-[500px] shadow-2xl rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
        <span className="relative left-4 top-4 cursor-pointer text-xl font-bold p-2" 
              onClick={() => handleFinalAction(EVENT_TARGETS.CMP_SECOND_LAYER)}>
          &times; 
        </span>

        <div className="p-10">
          <p className="text-3xl font-bold mb-4">More Options</p>
          <p className="text-base mb-6 text-gray-600">Customize your preferences below.</p>
          
          <div className="max-h-64 overflow-y-auto pr-4 space-y-3">
             <ToggleRow 
                label={"Essential cookies"} 
                category={"Essential"}
                logTarget={EVENT_TARGETS.TOGGLE_NECESSARY} 
                initialOn={true}
                readOnly={false}
                isFirstLayer={false}
              />
              <hr className="my-0"/>
              <ToggleRow 
                label={"Statistics and internal development"} 
                category={"Analytics"}
                logTarget={EVENT_TARGETS.TOGGLE_ANALYTICS} 
                initialOn={true}
                isFirstLayer={false}
              />
              <hr className="my-0"/>
              <ToggleRow 
                label={"Tracking across devices"} 
                category={"Tracking"}
                logTarget={EVENT_TARGETS.TOGGLE_TRACKING} 
                initialOn={true}
                isFirstLayer={false}
              />
              <hr className="my-0"/>
              <ToggleRow 
                label={"Ads and third party consent"} 
                category={"Marketing"}
                logTarget={EVENT_TARGETS.TOGGLE_MARKETING} 
                initialOn={true}
                isFirstLayer={false}
              />
          </div>
          
          <div className="flex justify-between w-full mt-10">
            <Button 
              label={"back"} 
              logTarget={EVENT_TARGETS.BTN_BACK} 
              styleClasses="bg-blue-500 text-white hover:bg-blue-300"
              extraOnClick={() => handleMoreOptions(false)}
            />
            <Button 
              label={"submit"} 
              logTarget={EVENT_TARGETS.BTN_SAVE_CUSTOM} 
              extraOnClick={() => handleFinalAction(EVENT_TARGETS.CMP_SECOND_LAYER)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white w-2/5 min-w-[500px] h-[550px] flex flex-col shadow-2xl rounded-lg overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-8 pb-4 text-center flex-shrink-0">
        <p className="text-3xl font-bold mb-1">Consent Notice</p>
        
        <p className="text-sm text-gray-500">
          You have visited website <span className="font-semibold text-blue-600">{siteName}</span>. Read the consent options below and make your choices. See what the effects of your choices are by toggling the options.
        </p>
        
        <hr className="mt-4"/>
      </div>

      {/* Toggles/Categories Section (Scrollable Content with distinct background) */}
      <div className="px-5 py-4 flex-grow overflow-y-auto space-y-1 bg-gray-100"> 
        
        {/* Essential Category - NOW TOGGLE-ABLE AND HAS CONDITIONAL RED BACKGROUND */}
        <ToggleRow 
          label={"Essential"} 
          category={"Essential"}
          logTarget={EVENT_TARGETS.TOGGLE_NECESSARY}
          initialOn={true}
        />
        <hr className="my-2 border-gray-200"/>
        
        {/* Statistics Category */}
        <ToggleRow 
          label={"Statistics and internal development"} 
          category={"Analytics"}
          logTarget={EVENT_TARGETS.TOGGLE_ANALYTICS}
          initialOn={true}
        />
        <hr className="my-2 border-gray-200"/>

        {/* Tracking Across Devices Category */}
        <ToggleRow 
          label={"Tracking across devices"} 
          category={"Tracking"}
          logTarget={EVENT_TARGETS.TOGGLE_TRACKING}
          initialOn={true}
        />
        <hr className="my-2 border-gray-200"/>
        
        {/* Ads Category */}
        <ToggleRow 
          label={"Ads and third party consent"} 
          category={"Marketing"}
          logTarget={EVENT_TARGETS.TOGGLE_MARKETING}
          initialOn={true}
        />
        
        <div className="h-4"></div>
      </div>
      

      {/* Button Section (Fixed Footer) */}
      <div className="flex justify-between p-8 pt-4 flex-shrink-0 border-t border-gray-200">
        <Button 
          label={"ACCEPT ALL"} 
          logTarget={EVENT_TARGETS.BTN_ACCEPT_ALL} 
          extraOnClick={() => handleFinalAction(EVENT_TARGETS.BTN_ACCEPT_ALL)}
        />
        <Button 
          label={"DECLINE ALL"} 
          logTarget={EVENT_TARGETS.BTN_REJECT_ALL} 
          styleClasses="bg-blue-500 text-white hover:bg-blue-300" 
          extraOnClick={() => handleFinalAction(EVENT_TARGETS.BTN_REJECT_ALL)}
        />
        <Button 
          label={"SAVE"} 
          logTarget={EVENT_TARGETS.BTN_SAVE_CUSTOM} 
          extraOnClick={() => handleFinalAction(EVENT_TARGETS.BTN_SAVE_CUSTOM)}
        />
      </div>
    </div>
  );
}

export default CMP;