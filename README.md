# kilok-ui

## 介绍

这是我在学习vue过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1.添加 CSS 样式
    使用本框架前，请在 CSS 中开启border-box

    *,*::before{box-sizing:border-box;},*::after{box-sizing:border-box;}
 
    你还需要设置默认颜色等变量（后续会改为 SCSS 变量)

    html{
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    }
    
    IE 15 及以上支持此样式
2.安装kilok-ui

    ```
    npm i --save kilok-ui
    ```

3.引入 kilok-ui

    ```
    import kilok-ui from 'kilok-test-1'
    import 'kilok-test-1/dist/index.css'
    ```

4.引入 svg symbols

    ```
    //at.alicdn.com/t/font_2027952_vc91t1v62bn.js
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

