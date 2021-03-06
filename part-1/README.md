# Часть 1: Определи класс

## Введение

В этой задаче ты будешь работать с классом `ShippingContainer` (контейнер для погрузки), который содержит много объектов `Box` (ящик). Все ящики – одинакового размера, но могут отличаться по весу. Контейнер можно назвать заполненным, когда достигнута максимальная грузоподъемность или максимальный объем контейнера - в зависимости от того, какое из этих состояний наступит раньше.

`ShippingContainer` может отвечать на такие вопросы, как:

- Сколько веса можно добавить?
- Сколько ящиков можно добавить?
- Заполнен ли контейнер (ShippingContainer)?

## Тесты

### Запуск спецификаций (Specs)

Тесты можно запусить командой `npm run test-part1`, сами тесты находятся в папке spec.

## Releases

### Release 0: Атрибуты `ShippingContainer`

В тестах для класса `ShippingContainer` показан пример группы `attributes`, которая содержит тесты для желаемых атрибутов для экземпляра `ShippingContainer`. Запусти тесты. Обнови класс `ShippingContainer` в`shippingContainer.js`, чтобы пройти тесты.

_Не изменяйте тесты и класс Box_

### Release 1: Работа с ящиками

В тестах для класса `ShippingContainer` используется группа примеров `working with boxes` (работа с ящиками). Группа примеров в настоящее время имеет статус «ожидающей» (`pending`).

```JavaScript
 // in spec/shippingContainer.spec.js

 // CHANGE THIS
 xdescribe("working with boxes"), () =>


 // TO THIS
 describe("working with boxes"), () =>
```

После внесения изменений запусти тесты, чтобы увидеть, как примеры в этой группе терпят неудачу. Обнови класс `ShippingContainer` в`shippingContainer.js`, чтобы пройти тесты.

## Заключение

Как только все тесты будут успешно пройдены, это будет означать, что ты выполнил Часть 1. Если ты до сих пор этого не сделал, то подтверди внесенные изменения и переходи к Части 2 (Part-2).
