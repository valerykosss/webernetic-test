function createElement(tag, classNames, attributes, textContent) {
    const element = document.createElement(tag);
    if (classNames) {
        classNames.split(' ').forEach(className => element.classList.add(className));
    }
    if (attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

function createInput(type, placeholder, name, classNames) {
    return createElement('input', classNames, { type, placeholder, name });
}

function createButton(textContent, classNames, type = 'submit') {
    return createElement('button', classNames, { type }, textContent);
}

function createPopup() {
    const popupBg = createElement('div', 'popup__bg');

    const form = createElement('form', 'popup');

    const elements = [
        { tag: 'p', classNames: 'popup__header', textContent: 'Войти в систему' },
        { tag: 'img', classNames: 'close-popup', attributes: { src: 'images/close.svg' } },
        { tag: 'input', classNames: 'popup__input', attributes: { type: 'tel', placeholder: 'Email/Телефон', name: 'tel' } },
        { tag: 'input', classNames: 'popup__input', attributes: { type: 'password', placeholder: 'Пароль', name: 'password' } },
        { tag: 'label', classNames: 'popup__checkbox-wrapper', textContent: 'Запомнить пароль', children: [
            { tag: 'input', classNames: 'popup__checkbox', attributes: { type: 'checkbox' } },
            { tag: 'span', classNames: 'popup__checkmark' }
        ] },
        { tag: 'a', classNames: 'popup__link', textContent: 'Восстановить' },
        { tag: 'button', classNames: 'popup__button sign-in', attributes: { type: 'submit' }, textContent: 'Войти' },
        { tag: 'button', classNames: 'popup__button sign-up', attributes: { type: 'submit' }, textContent: 'Зарегистрироваться' }
    ];

    elements.forEach(elementData => {
        const { tag, classNames, attributes, textContent, children } = elementData;
        const element = createElement(tag, classNames, attributes, textContent);

        if (children) {
            children.forEach(childData => {
                const child = createElement(childData.tag, childData.classNames, childData.attributes, childData.textContent);
                element.appendChild(child);
            });
        }

        form.appendChild(element);
    });

    popupBg.appendChild(form);
    document.getElementById('popup__continer').appendChild(popupBg);
}

createPopup();