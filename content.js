// 
// Main content script, which does the actual word replacements
// 

// Grab all elements on the page
var elements = document.getElementsByTagName('*');

console.log("Trickle-extension starting");

fetch(chrome.extension.getURL('/replacementdata/re.json')).then((resp) => resp.json()).then(function (jsonData) {
	
	// first process the jsonData to remove things like prefixed and suffixed spaces
	for (var k = 0; k < jsonData.length; k++){
	
	    console.log(k);
	
	}
	
	// then go through all of the elements and each one of their child nodes
	for (var i = 0; i < elements.length; i++) {
		var element = elements[i];

		for (var j = 0; j < element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				// Text to parse
				var oldText = node.nodeValue;
				var newText = oldText;
				
				for (var key in jsonData) {
					if (jsonData.hasOwnProperty(key)) {
						
						//nodes.push(document.createTextNode(text)); 
						
						// make the key into a blue code
						//var replacementText = '<font color="blue">'+jsonData[key]+'</font>';
						
						newText = newText.replace(new RegExp(key, 'gi'), jsonData[key]);
						
					}
				}	
				if (newText !== oldText) {
					
					// only replace the node if the text is different
					element.replaceChild(document.createTextNode(newText), node);
					
					// for debug:
					// element.style.color = "red";
				} 			
			}
		}
	}
})
