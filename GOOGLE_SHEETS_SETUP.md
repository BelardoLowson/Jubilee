# Инструкция по настройке Google Таблицы

## Шаг 1: Откройте вашу Google Таблицу
Откройте таблицу по ссылке: https://docs.google.com/spreadsheets/d/1dEVap52TqbJ-CcfErK85mxjhwbHDmXwlSApqGqbmtW8/edit?gid=0#gid=0

## Шаг 2: Создайте заголовки столбцов
В первой строке таблицы создайте следующие заголовки:
- A1: **Дата и время**
- B1: **ФИО**
- C1: **Решение**

## Шаг 3: Откройте редактор скриптов
1. В меню Google Таблицы выберите **Расширения** → **Apps Script**
2. Откроется новое окно с редактором кода

## Шаг 4: Вставьте код скрипта
Удалите весь существующий код и вставьте следующий:

```javascript
function doPost(e) {
  try {
    // Получаем активную таблицу
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Получаем данные из формы
    var name = e.parameter.name;
    var willAttend = e.parameter.willAttend;
    var timestamp = e.parameter.timestamp;
    
    // Добавляем новую строку с данными
    sheet.appendRow([timestamp, name, willAttend]);
    
    // Возвращаем успешный ответ
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'row': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // В случае ошибки возвращаем сообщение об ошибке
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Шаг 5: Сохраните и опубликуйте скрипт
1. Нажмите на значок **💾 (Сохранить)** или Ctrl+S
2. Дайте проекту название, например "RSVP Handler"
3. Нажмите **Развернуть** → **Новое развертывание**
4. Выберите тип: **Веб-приложение**
5. Настройки:
   - **Описание**: RSVP Form Handler
   - **Запуск от имени**: Меня
   - **У кого есть доступ**: Все
6. Нажмите **Развернуть**
7. Появится окно с разрешениями - нажмите **Авторизовать доступ**
8. Войдите в свой аккаунт Google и разрешите доступ
9. **ВАЖНО**: Скопируйте URL веб-приложения (он будет выглядеть примерно так: `https://script.google.com/macros/s/ВАЯШ_ID/exec`)

## Шаг 6: Добавьте URL в код приложения
1. Вернитесь к файлу `/App.tsx`
2. Найдите строку:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
   ```
3. Замените `'YOUR_GOOGLE_SCRIPT_URL_HERE'` на скопированный URL:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/ВАШ_ID/exec';
   ```

## Готово! 🎉
Теперь все ответы с формы RSVP будут автоматически сохраняться в вашу Google Таблицу со следующими данными:
- Дата и время ответа
- ФИО гостя
- Решение (Приду / Не приду)

## Проверка работы
1. Откройте ваш сайт
2. Заполните форму и нажмите "Приду" или "Не приду"
3. Проверьте Google Таблицу - должна появиться новая строка с данными

## Возможные проблемы

### Данные не приходят в таблицу?
- Убедитесь, что вы правильно скопировали URL скрипта
- Проверьте, что при развертывании выбрали "У кого есть доступ: Все"
- Попробуйте создать новое развертывание

### Ошибка авторизации?
- Убедитесь, что вы вошли в правильный аккаунт Google
- Повторите процесс авторизации

Если проблемы остаются, напишите мне!
