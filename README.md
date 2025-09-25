# @kasymjaparov/bakai-icons

Легкая коллекция SVG иконок для React приложений экосистемы "Бакай банк"

## Установка

```bash
npm install @kasymjaparov/bakai-icons
```

## Использование

### Базовое использование

```jsx
import {IconProvider, Icon, ICON_TYPES} from '@kasymjaparov/bakai-icons';

function App() {
    return (
        <div>
            <IconProvider/>
            <Icon type={ICON_TYPES.arrowLeft}/>
            <Icon type={ICON_TYPES.settings}/>
            <Icon type={ICON_TYPES.check}/>
        </div>
    );
}
```

### С дополнительными параметрами

```jsx
import {Icon, IconProvider, ICON_TYPES} from '@kasymjaparov/bakai-icons';

function App() {
    return (
        <div>
            <IconProvider/>
            <Icon
                type={ICON_TYPES.star}
                size={24}
                color="#007bff"
                className="custom-icon"
            />
        </div>
    )
        ;
}
```

## Доступные иконки

Пакет включает следующие иконки:

| Тип иконки          | Описание                            |
|---------------------|-------------------------------------|
| `arrowLeft`         | Стрелка влево                       |
| `arrowRight`        | Стрелка вправо                      |
| `info`              | Символ информации                   |
| `card`              | Иконка банковской карты             |
| `settings`          | Иконка настроек                     |
| `web`               | Иконка веб/интернет                 |
| `unlimited_calls`   | Символ безлимитных звонков          |
| `other_calls`       | Символ других звонков               |
| `wifi`              | Иконка WiFi сигнала                 |
| `sim`               | Иконка SIM карты                    |
| `wallet`            | Иконка кошелька                     |
| `sms`               | Иконка SMS/сообщений                |
| `collapsedArrow`    | Стрелка для свернутого состояния    |
| `uncollapsedArrow`  | Стрелка для не свернутого состояния |
| `collapsedPlus`     | Плюс для развертывания              |
| `collapsedMinus`    | Минус для свертывания               |
| `radioUnchecked`    | Невыбранная радиокнопка             |
| `radioChecked`      | Выбранная радиокнопка               |
| `checkboxUnchecked` | Невыбранный чекбокс                 |
| `checkboxChecked`   | Выбранный чекбокс                   |
| `pdf`               | Иконка PDF документа                |
| `pen`               | Иконка редактирования               |
| `cross`             | Иконка закрытия/крестик             |
| `share`             | Иконка поделиться                   |
| `download`          | Иконка скачивания                   |
| `check`             | Иконка галочки                      |
| `googlePlay`        | Иконка Google Play Store            |
| `appStore`          | Иконка Apple App Store              |
| `retry`             | Иконка повтора/обновления           |
| `star`              | Иконка звезды                       |
| `calendar`          | Иконка календаря                    |
| `global`            | Иконка глобус/мир                   |
| `price_plan`        | Иконка тарифного плана              |
| `extraServices`     | Иконка дополнительных услуг         |
| `clock`             | Иконка часов/времени                |
| `tagUser`           | Иконка тега юзера                   |
| `likeShape`         | Иконка лайка в круге                |
| `lock`              | Иконка замочка                      |
| `likeShape`         | Иконка лайка в круге                |
| `plus`              | Иконка плюса                        |
| `retry`             | Иконка повтора (v2)                 |
| `infinite`          | Иконка бесконечности                |
| `toast_success`     | Иконка успеха                       |
| `toast_warning`     | Иконка предупреждения               |
| `plane`             | Иконка самолета                     |
| `car`               | Иконка машины                       |
| `airplane`          | Иконка самолета                     |
| `delete`            | Иконка удаления                     |
| `warning`           | Иконка warning                      |
| `arrrowDown`        | Иконка стрелки вниз                 |
| `money`             | Иконка деньги                       |


## Справочник API

### Компонент Icon

#### Параметры

| Параметр    | Тип         | По умолчанию     | Описание                  |
|-------------|-------------|------------------|---------------------------|
| `type`      | `TIconType` | **обязательный** | Тип отображаемой иконки   |
| `size`      | `number`    | `16`             | Размер иконки в пикселях  |
| `color`     | `string`    | `"currentColor"` | Цвет иконки               |
| `className` | `string`    | `""`             | Дополнительные CSS классы |

## Поддержка TypeScript

Пакет включает определения TypeScript. Константа `ICON_TYPES` обеспечивает типобезопасный доступ ко всем доступным
иконкам:

```typescript
import {ICON_TYPES, TIconType} from '@kasymjaparov/bakai-icons';

// Типобезопасное использование иконок
const iconType: TIconType = ICON_TYPES.settings;
```

## Требования

- React 16.8+ (поддержка хуков)
- Включена поддержка TypeScript

## Лицензия

Лицензия MIT - см. файл LICENSE для подробностей.

## Автор

Kasymjaparov Adilet