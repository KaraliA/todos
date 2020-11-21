import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en: {
        localeTitle: "English",
        toDoList: "To Do List",
        toDoCounter: "To do",
        doneCounter: "Done",
        toDoPlaceholder: "I need to...",
        removeDoneBtn: "Remove done",
        clearAllBtn: "Clear all",
        taskName: "Task",
        createdAt: "Created at",
        itemNotExists: "Item doesn't exist"
    },
    ua: {
        localeTitle: "Українська",
        toDoList: "Список завдань",
        toDoCounter: "Виконати",
        doneCounter: "Виконано",
        toDoPlaceholder: "Мені потрібно...",
        removeDoneBtn: "Видалити виконані",
        clearAllBtn: "Видалити всі",
        taskName: "Завдання",
        createdAt: "Створено о",
        itemNotExists: "Завдання не існує"
    }
};

export const locales = Object.entries(messages).map(([locale, translation]) => {
    return {
        locale: locale,
        title: translation.localeTitle
    }
});

export const i18n = new VueI18n({
    locale: 'ua',
    fallbackLocale: 'en',
    messages
})