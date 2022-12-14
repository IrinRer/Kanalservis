## Описание
Проект создан для отображений данных, которые поступают с сервера. Посмотреть эти данные можно только авторизованный пользователь. 

1. Логин: react
2. Пароль: qwerty

## Технологии
 1) React
 2) Redux (redux-toolkit, thunk)
 3) TypeScript
 4) Styled Component
 5) Axious

## Что было сделано
1. Приватные роуты. 

Есть страница на которой отображаются данные, но эти данные может посмотреть только авторизованный пользователь, если он не авторизован, то его перебрасывает на страницу с авторизацией. 

 ``<Route path={ROUTES.home.path} element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }/>``

В данном примере я оборачиваю компонент Home (является страницей) в компонент PrivateRoute, который внутри себя проверяет авторизацию и если ее нет, то на страницу Home вход не происходит. 

2. TypeScript позволяет использовать Record, что очень удобно при создании роутов, так как мы заранее определяем в объекте какие страницы будут, это позволяет избежать ошибок. 

3. Запрсы к серверу JSONPlaceholder совершаются в middleware - thunk. Store создавала с помощью Redux-toolkit.

4. Все приложение в Error Boundary, который рендерит специальный компонент, если возникают ошибки. Это позволяет избежать возможный крах приложения.

Используется общий компонент для 404 ERROR и для ошибок, которые ловятся в Error Boundary. Этот универсальный компонент принимает разные props и в зависимости от этого отображается нужный текст. Это позволяет избежать дублирования кода.

5. Сделан адаптив под разные устройства.

Мобильная и планшетная версия: Хук useWindowSize определяет ширину viewport и в соответствии с этим рендерится нужный компонент. В декстопной версии присутствуют некоторые элементы, которые отсутствуют в мобильной и планшетной версии. Например, лого компании отсуствует на мобильных устройствах, а на планшетах не отображается имя пользователя. 

6. Логин и пароль, а также backend URL содержаться в .env.

Созданы также специальные вспомогательные функции, которые позволяют достать эти значения из .env. Например, getBackendURL. 

7. Вспомогательная функция api, которая позволят создовать объект axios с нужными заголовками. 

```
export const api = (): AxiosInstance => {
  return axios.create({
    baseURL: getBackendURL(),
  });
};
```
В thunk нужно просто вызывать эту функцию. Это позволяет избежать дублирования кода.  

## Как запустить

1. Клонируете репозиторий

```
git clone https://github.com/IrinRer/Kanalservis.git
```
2. Устанавливаете зависимости

```
npm i
```

3. Запускаете проект

```
npm start
```
