// Function to create a copy button
function createCopyButton() {
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '5px';
    button.style.right = '5px';
    button.style.backgroundColor = 'lightgray';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.padding = '5px';
    button.style.borderRadius = '2px';
    button.style.opacity = '0.2';
    button.style.transition = 'opacity 0.3s';
    button.style.zIndex = '10';
    button.addEventListener('click', copyCode);
    return button;
  }
  
  // Function to copy code content to the clipboard
  async function copyCode(event) {
    const codeElement = event.target.parentElement.querySelector('code');
    try {
      await navigator.clipboard.writeText(codeElement.textContent);
      console.log('Code copied to clipboard');
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  }
  
  // Find all <code> elements on the page
  const codeElements = document.querySelectorAll('code');
  
  // Iterate through the NodeList and add a copy button to each <code> element
  codeElements.forEach((codeElement) => {
    const codeWrapper = document.createElement('div');
    codeWrapper.style.position = 'relative';
    codeWrapper.style.display = 'inline-block';
  
    codeElement.parentNode.insertBefore(codeWrapper, codeElement);
    codeWrapper.appendChild(codeElement);
  
    const copyButton = createCopyButton();
    codeWrapper.appendChild(copyButton);
  
    // Show the copy button when hovering over the code region
    codeWrapper.addEventListener('mouseover', () => {
      copyButton.style.opacity = '1';
    });
  
    // Make the copy button less visible when not hovering over the code region
    codeWrapper.addEventListener('mouseout', () => {
      copyButton.style.opacity = '0.2';
    });
  });
