# Cloud Runハンズオン

このハンズオンではNginxをWebサーバーとしたVue.jsのフロントエンドアプリケーションをCloud Runに実装します。

## 利用する技術周り

- Vue.js (Vue3)
- Nginx
- Docker

## ハンズオン

### ターミナル立ち上げ

- このハンズオンはCloud Shellを利用して行います
    - Cloud ShellはGoogle Cloud環境を操作するのに特化したLinuxベースのターミナル環境
    - コマンドでの操作がメインとなります

![image.png](images/cloudshell.png)

- 右上のCloud Shellアイコンをクリックすると立ち上がる

![image.png](images/configlist.png)

以下を打ち込み、実行する。

```shell
# 自分のアカウント情報の認証を行い、現在の設定を確認する。
gcloud config list
# 以下の情報が表示されるはず
# [accessibility]
# screen_reader = True
# [component_manager]
# disable_update_check = True
# [compute]
# gce_metadata_read_timeout_sec = 30
# [core]
# account = <YOUR_EMAIL_ADDRESS>
# disable_usage_reporting = True
# project = <YOUR_PROJECT_ID>
# [metrics]
# environment = devshell

# project がtigじゃない場合は以下を実行する
gcloud config set project tig-03
```


