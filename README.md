**概要**

42のカリキュラムにおける修了制作であり、フルスタックのウェブアプリケーション開発を通じて、バックエンドからフロントエンド、データベース設計、リアルタイム通信まで幅広いスキルを習得することを目的としています。

リアルタイムで対戦可能なオンラインゲーム「Pong」をユーザプレイでき、そのために**チャットルームでチャットやユーザのプロフィル管理、友達登録、ランダムゲームマッチング**など構築しました。

<br>
<br>

**サービス内容**

- **チャット機能**
  - 公開・非公開設定が可能なチャットルーム生成
  - WebSocketを利用したチャット機能
  - チャットルームで招待、退出、ミュートなど管理機能
- **ユーザー機能**
  - マイページでニックネーム、プロフィール写真の変更が可能
  - 他のユーザーと友達登録、ブロック機能
  - 認証：OAuth, Jwtトークン、メールを用いた二次認証
- **ゲーム機能**
  - WebSocketを利用したリアルタイムのポンポンゲームプレイ
  - ゲームマッチング**：待機中のユーザー同士をマッチング**
  - ゲーム観戦と戦績紹介機能

<br>
<br>

**サービス詳細（画像） 🐣** ~

> 1。ログイン
>
> <img src="https://github.com/user-attachments/assets/942cae6c-60f6-446a-8f79-d5c1ec35a30e">
>
> OAuthを使用して、安全なログイン機能を提供します。
>
> - 二次認証：ログイン時にメールを用いた二次認証プロセスを提供しています。

<br>
<br>

> ２。チャットリスト
>
> <img width=77% height=77% src="https://github.com/user-attachments/assets/df2245ba-1e75-47a2-a0f6-72bcb7a384cd">
>
> - チャットルーム生成：新しいチャットルームを作成できます。
> - 公開/非公開チャット：チャットルームの公開・非公開設定を選択可能です。
> - パスワード設定：非公開チャットでは、パスワードによるアクセス制限を設定できます。

<br>
<br>

> ３。チャットルーム
>
> <img width=77% height=77% src="https://github.com/user-attachments/assets/33451aa7-0c7e-4a34-bb88-957988d6790c">
>
> - リアルタイムチャット：WebSocketを利用した機能を実装しています。
> - チャットルーム設定変更：チャットルーム名や公開・非公開の設定を変更可能です。
> - ルームのユーザー管理機能
>   - ユーザーを招待または退出させることができます。
>   - ユーザーを黙らせる（ミュート）機能を備えています。
> - 管理者権限：チャットルームの管理者権限を他のユーザーに付与可能です

<br>
<br>

> ４。友達リスト
>
> <img width=38% height=38% alt="４。友達機能" src="https://github.com/user-attachments/assets/00a594b0-5df7-4d64-9a6b-0cbd12e6b716">
>
> - ユーザー検索および友達登録：他のユーザーを検索して友達として登録できます。
> - 友達ブロック機能：特定の友達をリストからブロックすることが可能です。

<br>
<br>

> ５。チャットプロファイル
>
> <img width=37% height=37% alt="５。チャットプロフィール" src="https://github.com/user-attachments/assets/0b3056c4-9575-4713-9a57-fed512fb9549">
>
> - 一対一のチャットおよびゲーム申請ができます。
> - 友達リストから特定のユーザーをブロック（Ban）できます。

<br>
<br>

> ６。ユーザープロファイル
>
> <img width=77% height=77% src="https://github.com/user-attachments/assets/bdab461b-c69e-47a0-a546-f5aa1bd10ba6">
>
> - プロフィール変更機能
>   - あだ名（ニックネーム）を変更可能です。
>   - プロフィール写真をアップロードまたは更新できます。
> - ゲーム戦績の表示：過去のゲーム戦歴をプロフィール画面で確認できます。

<br>
<br>

> ７。ゲームショップ＆ゲームプレイ
>
><img width=77% height=77% src="https://github.com/user-attachments/assets/a7d9c347-4fca-42c8-b11a-cdf5fd67cb09">
>
> - Web上でリアルタイムにピンポンゲームをプレイできます。

<br>
<br>

> ８。ゲーム戦績
>
> <img width=38% height=38% alt="９。ゲーム戦績ページ" src="https://github.com/user-attachments/assets/7854d9db-3d7e-4197-8897-588c7a47b11a">
>
> - これまでにプレイしたゲームの戦績を確認できます。

<br>
<br>

> ９。ゲーム観戦ページ
>
> <img width=36% height=36% alt="２。チャットリスト" src="https://github.com/user-attachments/assets/3de965ee-63d0-47e8-9b0d-9e732dfbf84b">
>
> - 現在進行中のゲームをリアルタイムで観戦できます

<br>
<br>

**開発方法＆チーム構成**

- **開発方法**
  - デザイン、API設計、エンティティデザインの後、６週間のスプリント開発
  - 毎週、チーム内で維持する文化（Keep）、問題点（Problem）、試みること（Try）の**KPT振り返り**を実施
- **メンバー：**　フロント＆バックエンド：４名

<br>
<br>

**主な技術スタック 🛠️**

- **バックエンド：** TypeScript, NestJS, PostgreSQL, Prisma
- **プロントエンド**：TypeScript, React, ReactQuery, Recoil
- **インフラ・ツール**: Docker, Git
- **プロジェクト管理**: Git Issue、Git Wiki（ドキュメント管理）

<br>
<br>

**デザイン🔥**

ウェブモバイルサーイズで開発

- モバイルUIからPCに向けた画面の拡張しやすいと考え、モバイル画面向けに開発しました。
- [デザイン　Figma（韓国語）](https://www.figma.com/design/WXd142rB0HWgnhYoTEe4Ss/MatchPoint-Design?node-id=0-1&t=1dHYCPQrLI72XXHP-1)
- [デザイン　Figma\_フローチャート（韓国語）](https://www.figma.com/board/Bx3l4xtjg5CZ98g6i9xp1R/MatchPoint-DesignFlow?t=4TKSpwd8nF2urLny-1)
