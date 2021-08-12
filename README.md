#    React GraphQL Practice

## yarn init

###    專案結構
```
.
├── client // chat app
    ├── src // app folder
        ├── App.jsx // interpoint/ import css/ set app config
        ├── Chat.jsx // chat app import apollo/client shards-react/design
        ├── index.html // root html
        ├── index.css // root stylesheet
        └── index.js //  root js script
    ├── package.json // pack manager
    └── webpack.config.js // set listening port/ pack name/ remotes or import pack
└── home-page //
    ├── src // app folder
        ├── App.jsx // import remote chat client app
        ├── index.html // root html
        ├── index.css // root stylesheet
        └── index.js //  root js script
    ├── package.json // pack manager
    └── webpack.config.js // set listening port/ pack name/ remotes or import pack
├── server // graphql server 
    ├── server.js // import graphql-server/ design data schema/ resolver api
    └── package.json // pack manager
```
###    專案建置指令
```
cd server
yarn init -y
yarn add graphql-yoga
cd ..
npx degit https://github.com/jherr/wp5-starter-react.git\ #main clinet
cd client
yarn 
yarn start
yarn add shards-react
yarn add @apollo/client graphql
yarn add 
```
###    Webpack5.0
[wp5 Github](https://github.com/jherr/wp5-starter-react)

* 一個 React 框架的前端開發包
* 內建Docker File
* 初始監聽8080，可於wbp.config.js更改
* 可以輸出/輸入遠端專案
* 指令可直接下載套件的包到專案底下
```
npx degit ://github.com/jherr/wp5-starter-react.git\ #main $自訂檔案名
```

###    Apollo/Client

[Apollo Doc](https://www.apollographql.com/docs/react/get-started/)

* 基於 GraphQL 所定義的樣板
* 可以更好規劃GQl APi
* 圖形化規劃
* 使用Json格式傳輸檔案
* 通用於各種設備，代表APi可以共用


####    下載套件

```
yarn add @apollo/client graphql
```

####    初始化在index.js

```
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useSubscription,
  useMutation,  
  gql
} from "@apollo/client";


// 可設定連線到自己的GraphQL-server
const client = new ApolloClient({
  uri: 'https://___yourOwnGQL-Server___',
  cache: new InMemoryCache()
});


// 設計Request Query/Mutation/Subscriptions
const GET_MESSAGES = gql`
    subscription {
        messages {
            id
            content
            user
        }
    }
`;


// 設計物件接取自資料
const Messages = ({ user }) => {
    可以替換方法 useQuery/useMutatoin...
    const { data } = useSubscription(GET_MESSAGES);
}

// 最後輸出成 ApolloProvider
export default () => (
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
);

```

###    Shrads-react 

[Shards Doc](https://designrevision.com/docs/shards-react/getting-started)

* 一個 React 框架的設計套件
* 可提升Ui的設計速度
* 提升程式可讀性
* 提升性能
* 多種Tag 可使用


####    下載套件

```
// Yarn
yarn add shards-react

// NPM
npm i shards-react
```

####    引入套件

```
import {
    Container,
    Row,
    Col,
    FormInput,
    Button
} from 'shards-react';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
```