{"version":3,"file":"lists.min.js","sources":["lists.js"],"names":["BX","namespace","Lists","firstButtonInModalWindow","windowsWithoutManager","ajax","config","data","message","bitrix_sessid","modalWindow","params","title","bindElement","overlay","autoHide","closeIcon","right","top","modalId","Math","random","withoutContentWrap","contentClassName","contentStyle","content","buttons","events","withoutWindowManager","contentDialogChildren","push","create","props","className","text","concat","style","children","i","hasOwnProperty","html","contentDialog","onPopupShow","delegate","length","bind","document","proxy","this","_keyPress","proxy_context","closePopup","onPopupClose","unbind","_keypress","e","destroy","PopupWindow","closeByEsc","zIndex","isNaN","PopupWindowManager","show","removeElement","elem","parentNode","removeChild","addToLinkParam","link","name","value","util","remove_url_param","indexOf","showModalWithStatusAction","response","action","status","getFirstErrorFromResponse","messageBox","currentPopup","getCurrentPopup","idTimeout","setTimeout","w","uniquePopupId","close","popupConfirm","clearTimeout","onmouseover","onmouseout","addNewTableRow","tableID","col_count","regexp","rindex","tbl","getElementById","cnt","rows","oRow","insertRow","oCell","insertCell","cells","innerHTML","replace","arguments","parseInt","element","getRealDisplay","old","getAttribute","display","nodeName","body","displayCache","testElem","createElement","appendChild","setAttribute","hide","currentStyle","window","getComputedStyle","computedStyle","getPropertyValue"],"mappings":"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"}