function encryptText(text) {
    const encrypt = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    const messageEncrypt = text.split('').map(letter => encrypt[letter] || letter).join('');
    this.addParagraph(messageEncrypt);
    return messageEncrypt;
}


function decryptText(textEncrypted) {
    const decrypt = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    }
    const decryptedText = textEncrypted.replace(/enter|imes|ai|ober|ufat/g, match => decrypt[match]);
    this.addParagraph(decryptedText);
    return decryptedText;
}

function captureTextData() {
    const textAreaElement = document.querySelector('.textEncripted');
    return textAreaElement ? textAreaElement.value : '';
}

function addParagraph(text) {
    const responsiveDiv = document.createElement('div');
    const overlapGroup = document.querySelector('.overlap-group');
    const imgVoid = overlapGroup.querySelector('.imgVoid');
    const frameDiv = overlapGroup.querySelector('.frame');
    responsiveDiv.classList.add('responsiveDiv');
    overlapGroup.appendChild(responsiveDiv);
    this.clearText();

    imgVoid.style.display = 'none';
    frameDiv.style.display = 'none';

    const pElement = document.createElement('p');
    pElement.textContent = text;
    pElement.classList.add('decriptedTextView');
    overlapGroup.appendChild(pElement);
    this.BtnsClearAndCopy();
}



function BtnsClearAndCopy() {
    // Create Clear Button
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Limpiar';
    clearButton.classList.add('btnBlue', 'btnClear');
    clearButton.addEventListener('click', clearText);

    const copyClipboardButton = document.createElement('button');
    copyClipboardButton.className = 'btn btn-small btn-gray';

    copyClipboardButton.onclick = function() {
    copyToClipboard(document.querySelector('.decriptedTextView').textContent);

    };
    const img = document.createElement('img');
    img.src = 'img/CopyClipBoard.svg';
    img.style.width = '19px';
    img.style.height = '19px';
    img.alt = 'Copy to Clipboard';
    copyClipboardButton.appendChild(img);

    const responsiveDiv = document.querySelector('.responsiveDiv');
    responsiveDiv.appendChild(clearButton);
    responsiveDiv.appendChild(copyClipboardButton);
}



function addClipbboardBtn() {
    const button = document.createElement('button');
    button.className = 'btn btn-small btn-gray';
    button.onclick = function() {
        copyToClipboard(document.querySelector('.textEncripted').value);
    };

    const img = document.createElement('img');
    img.src = 'img/CopyClipBoard.svg';
    img.style.width = '19px';
    img.style.height = '19px';
    img.alt = 'Copy to Clipboard';

    button.appendChild(img);
    document.querySelector('.overlap-group').appendChild(button);
}

function clearText() {
    const overlapGroup = document.querySelector('.overlap-group');
    const responsiveDiv = overlapGroup.querySelector('.responsiveDiv');
    const imgVoid = overlapGroup.querySelector('.imgVoid');
    const frameDiv = overlapGroup.querySelector('.frame');
    
    imgVoid.style.display = '';
    frameDiv.style.display = '';
    
    const pElement = overlapGroup.querySelector('.decriptedTextView');
    const clearButton = responsiveDiv.querySelector('.btnBlue');
    const copyClipboardButton = responsiveDiv.querySelector('.btn-gray');


    if (clearButton) {
        responsiveDiv.removeChild(clearButton);
    }
    if (copyClipboardButton) {
        responsiveDiv.removeChild(copyClipboardButton);
    }
    if (pElement) {
        overlapGroup.removeChild(pElement);
    }
}


function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Texto copiado al portapapeles');
}