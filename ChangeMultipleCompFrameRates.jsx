// Get the selected items
    var selectedItems = app.project.selection;
    
    // Filter the selected items to only include compositions
    var selectedComps = [];
    for (var i = 0; i < selectedItems.length; i++) {
        if (selectedItems[i] instanceof CompItem) {
            selectedComps.push(selectedItems[i]);
        }
    }

    // Check if there are any selected compositions
    if (selectedComps.length === 0) {
      alert("Please select at least one composition.");
  } else {
      // Prompt the user for a new frame rate
      var newFrameRate = prompt("Enter the new frame rate for the selected compositions:", selectedComps[0].frameRate);

              for (var j = 0; j < selectedComps.length; j++) {
                  selectedComps[j].frameRate = newFrameRate;
              }

              
              alert("Frame rate changed to " + newFrameRate + " fps for " + selectedComps.length + " compositions.");
          }
      
  