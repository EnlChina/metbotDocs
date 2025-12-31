# Markdown と MDX

RspressはMarkdownだけでなく、[MDX](https://mdxjs.com/)もサポートしています。これは強力なコンテンツ開発方法です。

## Markdown

MDXはMarkdownのスーパーセットです。つまり、通常通りMarkdownファイルを書くことができます。例：

```md
# Hello world
```

## コンポーネントの使用

MarkdownファイルでReactコンポーネントを使用したい場合は、`.mdx`拡張子でファイルに名前を付ける必要があります。例：

```mdx
// docs/index.mdx
import { CustomComponent } from './custom';

# Hello world

<CustomComponent />
```

## Front Matter

Markdownファイルの先頭にFront Matterを追加できます。これはメタデータを定義するためのYAML形式のオブジェクトです。例：

```yaml
---
title: Hello world
---
```

> 注意：デフォルトでは、Rspressはh1見出しをHTML見出しとして使用します。

本文中でFront Matterで定義されたプロパティにアクセスすることもできます。例：

```markdown
---
title: Hello world
---

# {frontmatter.title}
```

以前に定義されたプロパティは`frontmatter`プロパティとしてコンポーネントに渡されます。したがって、最終的な出力は次のようになります：

```html
<h1>Hello world</h1>
```

## カスタムコンテナ

`:::`構文を使用してカスタムコンテナを作成し、カスタムタイトルをサポートできます。例：

**入力：**

```markdown
:::tip
This is a `block` of type `tip`
:::

:::info
This is a `block` of type `info`
:::

:::warning
This is a `block` of type `warning`
:::

:::danger
This is a `block` of type `danger`
:::

::: details
This is a `block` of type `details`
:::

:::tip Custom Title
This is a `block` of `Custom Title`
:::

:::tip{title="Custom Title"}
This is a `block` of `Custom Title`
:::
```

**出力：**

:::tip
This is a `block` of type `tip`
:::

:::info
This is a `block` of type `info`
:::

:::warning
This is a `block` of type `warning`
:::

:::danger
This is a `block` of type `danger`
:::

::: details
This is a `block` of type `details`
:::

:::tip Custom Title
This is a `block` of `Custom Title`
:::

:::tip{title="Custom Title"}
This is a `block` of `Custom Title`
:::

## コードブロック

### 基本的な使用法

\`\`\`構文を使用してコードブロックを作成し、カスタムタイトルをサポートできます。例：

**入力：**

````md
```js
console.log('Hello World');
```

```js title="hello.js"
console.log('Hello World');
```
````

**出力：**

```js
console.log('Hello World');
```

```js title="hello.js"
console.log('Hello World');
```

### 行番号の表示

行番号を表示したい場合は、設定ファイルで`showLineNumbers`オプションを有効にできます：

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    showLineNumbers: true,
  },
};
```

### コードの折り返し

デフォルトで長いコード行を折り返したい場合は、設定ファイルで`defaultWrapCode`オプションを有効にできます：

```ts title="rspress.config.ts"
export default {
  // ...
  markdown: {
    defaultWrapCode: true,
  },
};
```

### 行ハイライト

行ハイライトとコードブロックタイトルを同時に適用することもできます。例：

**入力：**

````md
```js title="hello.js" {1,3-5}
console.log('Hello World');

const a = 1;

console.log(a);

const b = 2;

console.log(b);
```
````

**出力：**

```js title="hello.js" {1,3-5}
console.log('Hello World');

const a = 1;

console.log(a);

const b = 2;

console.log(b);
```

## Rustify MDXコンパイラ

以下の設定でRustify MDXコンパイラを有効にできます：
