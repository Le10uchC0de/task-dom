/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let t = '';

    const text = document.querySelector('body');
    for (let i = 0; i < count; i++) {
        t += `<${tag}>${content}</${tag}>`;
    }
    text.innerHTML = t;
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    const div1 = document.createElement('div');
    div1.classList.add('item_1');
    for (let i = 0; i < childrenCount; i++) {
        const div2 = document.createElement('div');
        div2.classList.add('item_2');
        div1.insertAdjacentElement('beforeend', div2);
        for (let j = 0; j < level; j++) {
            const div3 = document.createElement('div');
            div3.classList.add('item_3');
            div2.insertAdjacentElement('beforeend', div3);
        }
    }

    return div1;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const div1 = document.createElement('div');
    div1.classList.add('item_1');
    for (let i = 0; i < 2; i++) {
        const div2 = document.createElement('section');
        div2.classList.add('item_2');
        div1.insertAdjacentElement('beforeend', div2);
        for (let j = 0; j < 2; j++) {
            const div3 = document.createElement('div');
            div3.classList.add('item_3');
            div2.insertAdjacentElement('beforeend', div3);
        }
    }
    return div1;
}
