// Grab all elements
var elements = document.getElementsByTagName('*');
	
fetch(chrome.extension.getURL('/data/re.json')).then((resp) => resp.json()).then(function (jsonData) {
	
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
					
					
					element.replaceChild(document.createTextNode(newText), node);
					
					//for each textnode, appendchild to the node
					
					//element.style.color = "red";
				} // replacement
				
			}
		}
	}
})